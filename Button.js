import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

class Button extends React.Component {
	render() {
		return (
			<View>
        <TouchableHighlight>
        	<Text>{this.props.value}</Text>
        </TouchableHighlight>
			</View>
		)
	}
}

export default Button;