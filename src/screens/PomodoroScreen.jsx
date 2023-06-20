import { useState } from 'react';
import { Button, View, Text } from 'react-native';

import { TimerDisplay } from '../components/pomodoro/TimerDisplay';
import { TimerToggleButton } from '../components/pomodoro/TimerToggleButton';
import { TimerOptions } from '../components/pomodoro/TimerOptions';

const FOCUS_TIME_MINUTES = 25 * 60 * 1000;
const BREAK_TIME_MINUTES = 5 * 60 * 1000;

export default function PomodoroScreen({ navigation }) {
	const [timerCount, setTimerCount] = useState(FOCUS_TIME_MINUTES);
	const [timerInterval, setTimerInterval] = useState(null);
	const [isTimerRunning, setIsTimerRunning] = useState(false);

	const startTimer = () => {
		setIsTimerRunning(true);
		const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
		setTimerInterval(id);
	};

	const stopTimer = () => {
		if (timerInterval != null) {
			clearInterval(timerInterval);
		}
		setIsTimerRunning(false);
	};

	// time in minutes
	const setFocusTime = (time) => {
		stopTimer();

		const time_seconds = time * 60 * 1000;
		setTimerCount(time_seconds);
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TimerOptions setFocusTime={setFocusTime} />
			<TimerToggleButton
				isTimerRunning={isTimerRunning}
				startTimer={startTimer}
				stopTimer={stopTimer}
			/>
			<TimerDisplay timerDate={new Date(timerCount)} />
		</View>
	);
}
