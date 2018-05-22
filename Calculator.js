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
		let lastInput = [];
		if ( typeof newInput == 'number' ) {
			let joined = this.state.currentInput.concat(newInput);
			this.setState({ currentInput: joined });
		} else if ( newInput === "+" ) {
			// let total = this.state.allInputs.push(this.state.currentInput)
			// let total = this.state.allInputs.concat(this.state.currentInput);
			// let previousValue = this.state.currentInput;
			
			// store the currentInput
			// if this is the second number, add new input to stored input
			// save the result as a new value
			// if there's another number, add new input to saved result

			// this.setState({ allInputs: total })
			this.setState({ currentInput: [] })
		} else if ( newInput === "-" ) {

		} else if ( newInput === "×" ) {

		} else if ( newInput === "÷" ) {

		}
	};

	clearInput = () => {
		this.setState({ currentInput: [] });
	};

	render() {
		return (
			<View style={styles.btnContainer}>
				<Field input={this.state.currentInput} />
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
