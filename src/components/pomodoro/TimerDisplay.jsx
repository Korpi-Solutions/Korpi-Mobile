import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const TimerDisplay = ({ timerDate }) => {
	return (
		<View>
			<Text style={styles.timerText}>
				{timerDate.getMinutes().toString().padStart(2, '0')}:
				{timerDate.getSeconds().toString().padStart(2, '0')}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	timerText: {
		fontSize: 30,
		fontWeight: '700',
	},
});
