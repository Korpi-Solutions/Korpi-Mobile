import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Pomodoro"
				onPress={() => navigation.navigate('Pomodoro')}
			/>
		</View>
	);
}