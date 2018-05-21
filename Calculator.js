import React from 'react';
import Field from './Field';
import Button from './Button';
import { Alert, StyleSheet, Text, View } from 'react-native';

class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			currentInput: [],
			allInputs: []
		};
	}

	onBtnPress = newInput => {
		// this.setState({ currentInput: newInput });
		if (typeof newInput == 'number') {
			let joined = this.state.currentInput.concat(newInput);
			this.setState({ currentInput: joined });
		} else {
			let total = this.state.allInputs.concat(this.state.currentInput);
			this.setState({ allInputs: total })
		}
	};

	clearInput = () => {
		this.setState({ currentInput: 0 });
	};

	render() {
		let currentDisplay = this.state.currentInput;

		return (
			<View style={styles.btnContainer}>
				<Field input={currentDisplay} />
				<View style={styles.btnWrapper} />
				<View style={styles.btnWrapper}>
					<Button triggerButton={this.onBtnPress} value={1} />
					<Button triggerButton={this.onBtnPress} value={2} />
					<Button triggerButton={this.onBtnPress} value={3} />
					<Button triggerButton={this.onBtnPress} value={'+'} />
				</View>
				<View style={styles.btnWrapper}>
					<Button triggerButton={this.onBtnPress} value={4} />
					<Button triggerButton={this.onBtnPress} value={5} />
					<Button triggerButton={this.onBtnPress} value={6} />
					<Button triggerButton={this.onBtnPress} value={'-'} />
				</View>
				<View style={styles.btnWrapper}>
					<Button triggerButton={this.onBtnPress} value={7} />
					<Button triggerButton={this.onBtnPress} value={8} />
					<Button triggerButton={this.onBtnPress} value={9} />
					<Button triggerButton={this.onBtnPress} value={'×'} />
				</View>
				<View style={styles.btnWrapper}>
					<Button triggerButton={this.clearInput} value={'AC'} />
					<Button triggerButton={this.onBtnPress} value={0} />
					<Button triggerButton={this.onBtnPress} value={'%'} />
					<Button triggerButton={this.onBtnPress} value={'÷'} />
				</View>
				<Text>{this.state.allInputs}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	btnContainer: {
		alignItems: 'center',
		marginTop: 100
	},
	btnWrapper: {
		flexDirection: 'row'
	}
});

export default Calculator;
