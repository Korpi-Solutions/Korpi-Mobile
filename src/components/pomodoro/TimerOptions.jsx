import { Button, View } from 'react-native';

const TIMER_OPTIONS = [25, 35, 45];

export const TimerOptions = ({ setFocusTime }) => {
	return (
		<View style={{ display: 'flex', flexDirection: 'row' }}>
			{TIMER_OPTIONS.map((time) => {
				return (
					<Button
						title={String(time)}
						key={'opt_' + String(time)}
						onPress={() => setFocusTime(time)}
					/>
				);
			})}
		</View>
	);
};
