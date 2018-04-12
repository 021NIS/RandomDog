import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class App extends Component {
	// Состояние кампонента
	state = {
		url: 'initial url'
	};

	// Функция по загрузке изображения
	handleClick = () => {
		fetch('https://random.dog/woof.json').then(response => {
			// Конвертируем ответ респонс из json
			response.json().then(data => {
				// Сохраняем получненные данные, берем ссылку по ключу url
				this.setState({
					url: data.url
				});
			});
		});
	};

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'rgb(110, 100, 150)' }}>
				<TouchableOpacity onPress={this.handleClick}>
					<Text>DOGS! {this.state.url}</Text>
				</TouchableOpacity>
				<Image
					source={{ uri: this.state.url }}
					style={{ width: 120, height: 90 }}
				/>
			</View>
		);
	}
}
