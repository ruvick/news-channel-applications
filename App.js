import React from 'react';
import axios from 'axios';
import { ScrollView, StatusBar, StyleSheet, Alert, Text, Image, View } from 'react-native';
import { Post } from './components/Post';

export default function App() {
	// Состояния для статей и изображений
	const [items, setItems] = React.useState([]);
	const [featuredImages, setFeaturedImages] = React.useState({});

	// Функция для получения изображения
	const getImage = async (url, id) => {
		try {
			const response = await axios.get(url);
			if (response.data && response.data.source_url) {
				setFeaturedImages(prevState => ({
					...prevState,
					[id]: response.data.source_url
				}));
			}
		} catch (error) {
			console.log("Error - ", error);
		}
	};

	// Во время первого рендера, нам необходимо отправить запрос на бэкенд
	React.useEffect(() => {
		axios.get('https://www.mirturizma46.ru/wp-json/wp/v2/posts')
			.then(({ data }) => {
				setItems(data);
				data.forEach(post => {
					const imageUrl = post._links["wp:featuredmedia"]?.[0]?.href;
					if (imageUrl) {
						getImage(imageUrl, post.id);
					}
				});
			}).catch(err => {
				console.log(err);
				Alert.alert('Ошибка', 'Не удалось получить статьи');
			});
	}, []);

	// Рендерим статьи
	return (
		<ScrollView>
			<View>
				{items.map((obj) => (
					<Post
						key={obj.id}
						title={obj.title.rendered}
						imageUrl={featuredImages[obj.id]}
						createdAt={obj.date} />
				))}
				<StatusBar theme="auto" />
			</View>
		</ScrollView>
	);
}