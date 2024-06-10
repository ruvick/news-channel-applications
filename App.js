import { StatusBar, StyleSheet, Text, Image, View } from 'react-native';
import { Post } from './components/Post';


export default function App() {
	return (
		<View>
			<Post />
			<StatusBar theme="auto" />
		</View>
	);
}

