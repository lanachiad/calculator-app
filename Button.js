import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

class Button extends React.Component {
	render() {
		return (
        <TouchableHighlight style={btnStyles.btn}>
        	<Text style={btnStyles.text}>{this.props.value}</Text>
        </TouchableHighlight>
		)
	}
}

const btnStyles = StyleSheet.create({
	btn: {
		backgroundColor: 'pink',
		margin: 5,
		padding: 10,
		width: 60,
	},
	text: {
		fontSize: 30,
		textAlign: 'center',
	}
})

export default Button;