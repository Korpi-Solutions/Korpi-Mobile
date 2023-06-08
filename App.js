/* import 'react-native-gesture-handler'; */
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="go to Pomodoro"
				onPress={() => navigation.navigate('PomodoroMain')}
			/>
		</View>
	);
}

function PomodoroScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Pomodoro functionality here</Text>
		</View>
	);
}
function PomodoroSettings() {
	return (
		<View>
			<Text>Settings are here</Text>
		</View>
	);
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function PomodoroMain() {
	return (
		<Drawer.Navigator useLegacyImplementation>
			<Drawer.Screen
				name="Pomodoro"
				component={PomodoroScreen}
			/>
			<Stack.Screen
				name="Settings"
				component={PomodoroSettings}
			/>
		</Drawer.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: 'Home',
						headerStyle: {
							backgroundColor: '#f4511e',
							textAlign: 'center',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen
					name="Pomodoro"
					component={PomodoroMain}
					options={{ title: 'Pomodoro' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
