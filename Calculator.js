import React from 'react';
import Button from './Button';
import { StyleSheet, Text, View } from 'react-native';

class Calculator extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Button value={1} />
				<Button value={2} />
				<Button value={3} />
				<Button value={4} />
				<Button value={5} />
				<Button value={6} />
				<Button value={7} />
				<Button value={8} />
				<Button value={9} />
				<Button value={0} />
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