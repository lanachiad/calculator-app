import React from 'react';
import Button from './Button';
import { StyleSheet, Text, View } from 'react-native';

class Calculator extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Hi, this is a calculator</Text>
				<Button />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	}
})

export default Calculator;