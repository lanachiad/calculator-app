import React from 'react';
import Field from './Field';
import Button from './Button';
import { Alert, StyleSheet, Text, View } from 'react-native';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentInput: '0'
		}
	}

	onBtnPress = (newInput) => {
		Alert.alert(this.state.currentInput);
		this.setState = ({ currentInput: newInput })
	}

	updateCurrentInput = (newInput) => {
		this.setState = ({ currentInput: newInput })
	}

	// updateInputDisplay = () => {
	// 	let updatedInput = this.state.currentInput;
	// 	return updatedInput;
	// }

	render() {
		return (
			<View style={styles.btnContainer}>
				<Field input={this.state.currentInput} />
				<View style={styles.btnWrapper}>
					<Button triggerButton={this.onBtnPress(1)} value={1} />
					<Button value={2} />
					<Button value={3} />
				</View>
				<View style={styles.btnWrapper}>
					<Button value={4} />
					<Button value={5} />
					<Button value={6} />
				</View>
				<View style={styles.btnWrapper}>
					<Button value={7} />
					<Button value={8} />
					<Button value={9} />
				</View>
				<View style={styles.btnWrapper}>
					<Button value={0} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	btnContainer: {
		alignItems: 'center',
		marginTop: 100,
	},
	btnWrapper: {
		flexDirection: 'row',
	}
})

export default Calculator;