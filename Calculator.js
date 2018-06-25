import React from 'react';
import Field from './Field';
import Button from './Button';
import { Alert, StyleSheet, Text, View } from 'react-native';

class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			currentInput: [],
			display: '',
			lastMethodUsed: '',
			total: 0
		};
	};

	onBtnPress = newInput => {
		if (typeof newInput == 'number') {
			const joined = this.state.currentInput.concat(newInput);
			this.setState({ currentInput: joined }, () => {
				this.setState({ display: this.state.currentInput })
			});
		} else {
			this.setState({ lastMethodUsed: newInput });
			let lastNum = Number(this.state.currentInput.join(''));
			const lastMethod = this.state.lastMethodUsed
			let sum = Number(this.state.total);
			if (newInput === '+') {
				if (newInput !== lastMethod && lastMethod !== '') {
					if (lastMethod === "-") {
						sum -= lastNum
					} else if (lastMethod === "×") {
						sum *= lastNum
					} else if (lastMethod === "÷") {
						sum /= lastNum
					}
					lastNum = 0;
				}
				this.performOperation('+', lastNum, sum)
			} else if (newInput === '-') {
				if (newInput !== lastMethod && lastMethod !== '') {
					if (lastMethod === "+") {
						sum += lastNum
					} else if (lastMethod === "×") {
						sum *= lastNum
					} else if (lastMethod === "÷") {
						sum /= lastNum
					}
					lastNum = 0;
				}
				this.performOperation('-', lastNum, sum)
			} else if (newInput === '×') {
				if (lastNum !== 0) {
					if (newInput !== lastMethod && lastMethod !== '') {
						if (lastMethod === "+") {
							sum += lastNum
						} else if (lastMethod === "-") {
							sum -= lastNum
						} else if (lastMethod === "÷") {
							sum /= lastNum
						}
						lastNum = 1;
					}
					this.performOperation('×', lastNum, sum)
				}
			} else if (newInput === '÷') {
				if (lastNum !== 0) {
					if (newInput !== lastMethod && lastMethod !== '') {
						if (lastMethod === "+") {
							sum += lastNum
						} else if (lastMethod === "×") {
							sum *= lastNum
						} else if (lastMethod === "-") {
							sum-= lastNum
						}
						lastNum = 1;
					}
					this.performOperation('÷', lastNum, sum)
				}
			} else if (newInput === '=') {
				if (this.state.currentInput !== []) {
					const secondNum = Number(this.state.currentInput.join(''));
					const method = this.state.lastMethodUsed;
					let operator;
					if (method === '+') {
						operator = '+';
					} else if (method === '-') {
						operator = '-';
					} else if (method == '×') {
						operator = '×';
					} else if (method == '÷') {
						operator = '÷';
					}
					this.performOperation(operator, secondNum, sum);
				} 
			}
		}
	};

	completeOperation = (method, newNum, newTotal) => {
		if (method === '+') {
			newTotal += newNum;
		} else if (method === '-') {
			newTotal -= newNum;
		} else if (method === '×') {
			newTotal *= newNum;
		} else if (method === '÷') {
			newTotal /= newNum;
		}
		return newTotal;
	}

	performOperation = (method, newNum, newTotal) => {
		if (method === '+') {
			newTotal += newNum;
			this.setState({ total: newTotal });
			this.setState({ display: newTotal });
		} else if (method === '-') {
			if (newTotal !== 0) {
				newTotal -= newNum;
				this.setState({ total: newTotal });
				this.setState({ display: newTotal });
			} else {
				this.setState({ total: newNum })
			}
		} else if (method === '×') {
			if (newTotal !== 0) {
				newTotal *= newNum;
				this.setState({ total: newTotal });
				this.setState({ display: newTotal });
			} else {
				this.setState({ total: newNum })
			}
		} else if (method === '÷') {
			if (newTotal !== 0) {
				newTotal /= newNum;
				this.setState({ total: newTotal });
				this.setState({ display: newTotal });
			} else {
				this.setState({ total: newNum })
			}
		}
		this.setState({ currentInput: [] });
	};

	clearInput = () => {
		this.setState({ currentInput: [] });
		this.setState({ display: '' });
		this.setState({ total: 0 });
		this.setState({ lastMethodUsed: '' });
	};

	render() {
		return (
			<View style={styles.btnContainer}>
				<Field input={this.state.display} />
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
					<Button triggerButton={this.clearInput} value={'CE'} />
					<Button triggerButton={this.onBtnPress} value={0} />
					<Button triggerButton={this.onBtnPress} value={'='} />
					<Button triggerButton={this.onBtnPress} value={'÷'} />
				</View>
			</View>
		);
	};
};

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
