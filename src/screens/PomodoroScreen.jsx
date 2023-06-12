import { Button, View, Text } from 'react-native';

export default function PomodoroScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Pomodoro Screen</Text>
			<Button
				title="Go to Home"
				onPress={() => navigation.goBack()}
			/>
		</View>
	);
}
