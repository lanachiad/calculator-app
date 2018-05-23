import React from 'react';
import Field from './Field';
import Button from './Button';
import { Alert, StyleSheet, Text, View } from 'react-native';

class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			currentInput: [],
			total: 0
		};
	}

	onBtnPress = newInput => {
		if ( typeof newInput == 'number' ) {
			let joined = this.state.currentInput.concat(newInput);
			this.setState({ currentInput: joined });
		} else if ( newInput === "+" ||
					newInput === "-" ||
					newInput === "×" ||
					newInput === "÷" ) {
			// add new currentInput value to the sum
			let sum = this.state.total;
			let newValue = Number(this.state.currentInput.join(''));

			if ( newInput === "+" ) {
				sum += newValue;
			} else if ( newInput === "-" ) {
				sum -= newValue;
			} else if ( newInput === "×" ) {
				sum *= newValue;
			} else if ( newInput === "÷" ) {
				sum /= newValue;
			}

			this.setState({ total: sum });
			this.setState({ currentInput: [] });
		}
	};

	clearInput = () => {
		this.setState({ currentInput: [] });
		this.setState({ total: 0 });
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
				<Text>CurrentInput: {this.state.currentInput}</Text>
				<Text>Total: {this.state.total}</Text>
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
