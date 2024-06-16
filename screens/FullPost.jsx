import React from 'react';
import axios from 'axios';
import { View, } from 'react-native';
import styled from 'styled-components';
import { Loading } from '../components/Loading';

const PostImage = styled.Image
	`
	border-radius: 10px;
	width: 100%;
	height: 250px;
	margin-bottom: 20px;
`;

const PostText = styled.Text
	`
	font-size: 18px;
	line-height: 20px;
`;

export const FullPostScreen = () => {
	// Когда у нас FullPost отрендерится, мы отобразим Загрузку, саму статью будем сохранять в state.
	// И будем делать запрос на получение статьи
	const [isLoading, setIsLoading] = React.useState(true);
	const [data, setData] = React.useState();

	React.useEffect(() => {
		setIsLoading(true);
		axios.get('https://www.mirturizma46.ru/wp-json/wp/v2/posts/')
			.then(({ data }) => {
				setData(data);
				data.forEach(post => {
					const imageUrl = post._links["wp:featuredmedia"]?.[0]?.href;
					if (imageUrl) {
						getImage(imageUrl, post.id);
					}
				});
			}).catch(err => {
				console.log(err);
				Alert.alert('Ошибка', 'Не удалось получить статью');
			}).finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return (
			<View>
				<Loading />
			</View>
		);
	}

	return (
		<View style={{ padding: 20 }}>
			<PostImage source={{ uri: 'https://loremflickr.com/cache/resized/65535_53666982648_a23754f1ca_z_640_480_nofilter.jpg' }} />
			<PostText>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi ipsa rerum molestias minima velit. In voluptates dignissimos quod ducimus eum exercitationem, nobis consectetur itaque modi aliquam ipsa reprehenderit nesciunt.
			</PostText>
		</View>
	)
}

