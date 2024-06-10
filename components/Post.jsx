// Component Post 

import styled from 'styled-components/native';

// Styled components
// Название компонента Post 

const PostView = styled.View
	`
	flex-direction: row;
	align-items: center;
	padding: 15px;
	width: 100%;
	height: 100px;
	border-bottom-width: 1px;
	border-bottom-color: rgba(0, 0, 0, 0.1);
	border-bottom-style: solid;
`;

const PostImage = styled.Image
	`
	width: 65px;
	height: 65px;
	border-radius: 12px;
	margin: 0;
	padding: 0;
	margin-right: 12px;
`;

const PostTitle = styled.Text
	`
	font-size: 16px;
	font-weight: 700;
`;

const PostDetails = styled.View
	`
	flex-direction: column;
	justify-content: center;
`;

const PostDate = styled.Text
	`
	font-size: 12px;
	color: rgba(0, 0, 0, 0.4);
	margin-top: 2px;
`;

export const Post = () => {
	return // рендерим 
	<PostView>
		<PostImage source={{ uri: 'https://i.postimg.cc/FRxrV7Jt/download.webp' }} />
		<PostDetails>
			<PostTitle>Рыбный текст</PostTitle>
			<PostDate>13.03.2023</PostDate>
		</PostDetails>
	</PostView>
};