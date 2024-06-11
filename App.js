import React from 'react';
import axios from 'axios';
import { StatusBar, StyleSheet, Alert, Text, Image, View } from 'react-native';
import { Post } from './components/Post';


export default function App() {
	// Перетем как заюзать axios, делаем стейт, где будем хранить наши статьи
	// Вызываем items и setItems
	const [items, setItems] = React.useState([]);
	// Во время первого рендера, нам необходимо отправить запрос на бэкенд
	React.useEffect(() => {
		axios.get('https://66686577f53957909ff7da8d.mockapi.io/2')
			// И в момент когда мы получим ответ от бэкенда. Мы должны с помощью деструктуризации вытащить data и его поместить в setItems
			.then(({ data }) => {
				setItems(data);
			}).catch(err => { // Если вдруг у нас будет ошибка, мы должны об этом оповестить пользователя.
				console.log(err);
				Alert.alert('Ошибка', 'Не удалось получить статьи');
				// alert('Ошибка при получении статей');
			})
	}, []);

	// Рендерим статьи 
	return (
		<View>
			{items.map((obj) => (
				<Post
					title={obj.name}
					imageUrl={obj.avatar}
					// imageUrl="https://i.postimg.cc/FRxrV7Jt/download.webp"
					createdAt={obj.createdAt} />
			))}
			<StatusBar theme="auto" />
		</View>
	);
}

// return (
// 	<View>
// 		<Post
// 			title="Test"
// 			imageUrl="https://i.postimg.cc/FRxrV7Jt/download.webp"
// 			createdAt="13.03.2023" />
// 		<StatusBar theme="auto" />
// 	</View>
// );
