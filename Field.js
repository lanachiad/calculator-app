import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Field extends React.Component {
	render() {
		return(
			<View style={fieldStyles.wrapper}>
				<Text>{this.props.input}</Text>
			</View>
		)
	}
}

const fieldStyles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'lightblue',
		padding: 10,
	}
})

export default Field;