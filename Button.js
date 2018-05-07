import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

class Button extends React.Component {
	render() {
		return (
			<View>
        <TouchableHighlight style={btnStyles.btn}>
        	<Text>{this.props.value}</Text>
        </TouchableHighlight>
			</View>
		)
	}
}

const btnStyles = StyleSheet.create({
	btn: {
		backgroundColor: 'pink',
		margin: 5,
		padding: 10
	}
})

export default Button;