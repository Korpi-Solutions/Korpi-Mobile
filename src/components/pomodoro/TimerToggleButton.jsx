import react from 'react';
import { Button } from 'react-native';

export const TimerToggleButton = ({
	isTimerRunning,
	stopTimer,
	startTimer,
}) => {
	return (
		<Button
			title={isTimerRunning ? 'Stop Timer' : 'Start Timer'}
			onPress={isTimerRunning ? stopTimer : startTimer}
		/>
	);
};
