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

// Modules 

// Для работы React  проекте его необходимо подключить
import React from 'react';

// Подключение компонентов 
import { Post } from './components/Post';

// Подключение axios 
import axios from 'axios';

// Компонент React Native Alert, для отображения ошибки
import { StatusBar, StyleSheet, Alert, Text, Image, View } from 'react-native';
// В функции прописываем Alert.alert('Ощибка', 'Не удалось получить статьи');

// StatusBar из React Native 
import { StatusBar, StyleSheet, Text, View } from 'react-native';
<StatusBar theme="auto" /> // theme="auto" тема по умолчанию
// Очень багнутая штука. Может вести себя нередсказуемо
// StatusBar размещаем где угодно, в основном контейнере. Главное чтобы он отрендерился.

//========================================================================================================================================================


