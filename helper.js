// Основные компоненты 

// Подключение доп модулей и библиотек 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; // импорт из react-native библиотеки

// Теги 
<Viev></Viev> // тег div. Обертка
<Text></Text> // текстовый тег,h, p, span
<StatusBar></StatusBar> // Верхний статусбар смартфона

// Стили
// CSS Модуль 
// Функция создания стилей 
const styles = StyleSheet.create({
	container: { // Блок стилей. Применяется к конкретному тегу
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: { // Блок стилей. Применяется к конкретному тегу
		fontSize: 23,
		fontWeight: '700',
	},
	subtitle: { // Блок стилей. Применяется к конкретному тегу
		fontSize: 14,
		fontWeight: '400',
	},
});