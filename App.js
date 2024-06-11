import axios from 'axios';
import { StatusBar, StyleSheet, Text, Image, View } from 'react-native';
import { Post } from './components/Post';


export default function App() {
	// Перетем как заюзать axios, делаем стейт, где будем хранить наши статьи
	// Вызываем items и setItems
	const [items, setItems] = React.useState();
	// Во время первого рендера, нам необходимо отправить запрос на бэкенд
	React.useEffect(() => {
		axios.get('https://trycode.pw/c/KFKNW')
			// И в момент когда мы получим ответ от бэкенда. Мы должны с помощью деструктуризации вытащить data и его поместить в setItems
			.then(({ data }) => {
				setItems(data);
			}).catch(err => { // Если вдруг у нас будет ошибка, мы должны об этом оповестить пользователя.
				console.log(err);
				alert('Ошибка при получении статей');
			})
	}, []);

	return (
		<View>
			<Post
				title="Test"
				imageUrl="https://i.postimg.cc/FRxrV7Jt/download.webp"
				createdAt="13.03.2023" />
			<StatusBar theme="auto" />
		</View>
	);
}

