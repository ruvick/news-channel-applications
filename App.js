// import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

// Styled components
// Название компонента Post 

const PageNews = styled.View
	`display: flex;
	 flex: 1;
`;


export default function App() {
	return (
		<PageNews>
			<Post />
			<StatusBar theme="auto" />
		</PageNews>
	);
}

// export default function App() {
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.title}>News Channel</Text>
// 			<Text style={styles.subtitle}>Rudikov Project React Native</Text>
// 			<StatusBar style="auto" />
// 			<Post />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		display: 'flex',
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	title: {
// 		fontSize: 23,
// 		fontWeight: '700',
// 	},
// 	subtitle: {
// 		fontSize: 14,
// 		fontWeight: '400',
// 	},
// });
