import React from 'react';
import axios from 'axios';
import { Alert, Text, View, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';


export const HomeScreen = () => {
	// Состояния для статей и изображений
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
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

	// Функция для удаления HTML-тегов из строки
	const stripHtmlTags = (str) => {
		return str.replace(/<\/?[^>]+(>|$)/g, "");
	};

	const fetchPosts = () => {
		setIsLoading(true);
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
			}).finally(() => {
				setIsLoading(false);
			});
	}

	// Во время первого рендера, нам необходимо отправить запрос на бэкенд
	React.useEffect(fetchPosts, []);

	if (isLoading) {
		return (
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<ActivityIndicator size="large" />
				<Text>Загрузка...</Text>
			</View>
		);
	}

	// Рендерим статьи
	// Передаем во Flatlist массив наших статей.
	// И рендерим каждую статью, каждый item
	// renderItem вернет нам обьект со всеми статьями, которые есть в item
	return (
		<View>
			<FlatList
				refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
				data={items}
				renderItem={({ item }) => (
					<TouchableOpacity >
						<Post
							title={stripHtmlTags(item.title.rendered)}
							imageUrl={featuredImages[item.id]}
							createdAt={item.date} />
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}