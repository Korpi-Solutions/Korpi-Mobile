import { Button, View, Text } from 'react-native';
import VideoPlayer from '../components/videoplayer';

export default function VideoScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Video Screen</Text>
			<Button
				title="Go to Home"
				onPress={() => navigation.goBack()}
			/>
            <VideoPlayer />
		</View>
	);
}
