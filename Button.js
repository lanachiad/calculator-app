import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

class Button extends React.Component {
	onButtonPress = () => {
		this.props.triggerButton(this.props.value);
	};

	render() {
		return (
			<TouchableHighlight onPress={this.onButtonPress} style={btnStyles.btn}>
				<Text style={btnStyles.text}>
					{this.props.value}
				</Text>
			</TouchableHighlight>
		);
	}
}

const btnStyles = StyleSheet.create({
	btn: {
		backgroundColor: 'pink',
		marginBottom: 10,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		padding: 10,
		width: 60
	},
	text: {
		fontSize: 30,
		textAlign: 'center'
	}
});

export default Button;
