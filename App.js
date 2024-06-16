import React from 'react';
import { View, StatusBar } from 'react-native';
import { HomeScreen } from './screens/Home';


export default function App() {

	return (
		<View>
			<HomeScreen />
			<StatusBar theme="auto" />
		</View>
	);
}