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
	}

	onBtnPress = newInput => {
		// this.setState({ currentInput: joined }, () => {
		// 	console.log(this.state.currentInput);
		// });
		if (typeof newInput == 'number') {
			// Creating whole numbers from individual number inputs until NaN is pressed
			const joined = this.state.currentInput.concat(newInput);
			this.setState({ currentInput: joined }, () => {
				this.setState({ display: this.state.currentInput })
			});
		} else {
			this.setState({ lastMethodUsed: newInput });
			const lastNum = Number(this.state.currentInput.join(''));
			const lastMethod = this.state.lastMethodUsed
			let sum = Number(this.state.total);
			if (newInput === '+') {
				this.addInput(lastNum, sum);
			} else if (newInput === '-') {
				this.subtractInput(lastNum, sum);
			} else if (newInput === '=') {
				if (this.state.currentInput !== []) {
					const secondNum = Number(this.state.currentInput.join(''));
					const method = this.state.lastMethodUsed;
					if (method === '+') {
						this.addInput(secondNum, sum);
					}
				} else if (newInput === '-') {
					console.log('oh snap, you are subtracting now');
				}
			}
		}
	};

	addInput = (newNum, newTotal) => {
		newTotal += newNum;
		this.setState({ currentInput: [] });
		this.setState({ total: newTotal });
		this.setState({ display: newTotal });
	};

	subtractInput = (newNum, newTotal) => {
		if (newTotal !== 0) {
			newTotal -= newNum;
			this.setState({ currentInput: [] });
			this.setState({ total: newTotal });
			this.setState({ display: newTotal });
		} else {
			// something
		}
	};

	clearInput = () => {
		this.setState({ currentInput: [] });
		this.setState({ display: '' });
		this.setState({ total: 0 });
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
