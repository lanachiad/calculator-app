import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Field extends React.Component {
	render() {
		return (
			<View style={fieldStyles.wrapper}>
				<Text style={fieldStyles.inputText}>
					{this.props.input}
				</Text>
			</View>
		);
	}
}

const fieldStyles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'lightgreen',
		height: 70,
		padding: 10,
		width: 275
	},
	inputText: {
		fontSize: 40,
		textAlign: 'center'
	}
});

export default Field;
