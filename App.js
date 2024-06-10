// import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

// Styled components
// Название компонента Post 
const Post = styled.View
	`	
		padding: 15px;
		width: 100px;
		height: 100px;
		border-bottom-width: 1px;
		border-bottom-color: rgba(0, 0, 0, 0.1);
		border-bottom-style: solid;
	`;


export default function App() {
	return (
		<View style={styles.container}>
			<Post />
			<StatusBar theme="auto" />
		</View>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 23,
		fontWeight: '700',
	},
	subtitle: {
		fontSize: 14,
		fontWeight: '400',
	},
});
