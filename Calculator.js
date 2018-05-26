import React from 'react';
import Field from './Field';
import Button from './Button';
import { Alert, StyleSheet, Text, View } from 'react-native';

class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			currentInput: [],
			lastMethodUsed: '',
			total: 0
		};
	}

	// onBtnPress = newInput => {
	// 	if (typeof newInput == 'number') {
	// 		let joined = this.state.currentInput.concat(newInput);
	// 		this.setState({ currentInput: joined });
	// 	} else if (newInput === '+' || newInput === '-' || newInput === '×' || newInput === '÷') {
	// 		let sum = this.state.total;
	// 		let newValue = Number(this.state.currentInput.join(''));

	// 		if (newInput === '+') {
	// 			sum += newValue;
	// 		} else if (newInput === '-') {
	// 			sum -= newValue;
	// 		} else if (newInput === '×') {
	// 			sum *= newValue;
	// 		} else if (newInput === '÷') {
	// 			sum /= newValue;
	// 		}

	// 		this.setState({ total: sum });
	// 		this.setState({ currentInput: [] });
	// 	} else if (newInput === '=') {
	// 	}
	// };

	onBtnPress = newInput => {
		// this.setState({ currentInput: joined }, () => {
		// 	console.log(this.state.currentInput);
		// });
		if (typeof newInput == 'number') {
			const joined = this.state.currentInput.concat(newInput);
			this.setState({ currentInput: joined });
		} else if (typeof newInput != 'number') {
			const firstNum = Number(this.state.currentInput.join(''));
			let sum = Number(this.state.total);
			if (newInput === '+') {
				this.addInput(firstNum, sum);
			} else if (newInput === '=') {
				if (currentInput !== []) {
					const secondNum = Number(this.state.currentInput.join(''));
					const method = this.state.lastMethodUsed;
					if (method === '+') {
						sum += secondNum;
						this.setState({ currentInput: sum });
						this.setState({ total: sum });
					}
				}
			}
		}
	};

	clearInput = () => {
		this.setState({ currentInput: [] });
		this.setState({ total: 0 });
	};

	equalInput = () => {
		const totalSum = this.state.total;
		this.setState({ currentInput: totalSum });
	};

	addInput = (newNum, newTotal) => {
		newTotal += newNum;
		this.setState({ currentInput: [] });
		this.setState({ total: newTotal });
	};
	// Replicate the above for all other methods

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
					<Button triggerButton={this.equalInput} value={'='} />
					<Button triggerButton={this.onBtnPress} value={'÷'} />
				</View>
				<Text>
					CurrentInput: {this.state.currentInput}
				</Text>
				<Text>
					Total: {this.state.total}
				</Text>
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
