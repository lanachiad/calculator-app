import React from 'react';
import Calculator from './Calculator';
import {StyleSheet, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
    	<View>
	      <Calculator />
	    </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	}
})
