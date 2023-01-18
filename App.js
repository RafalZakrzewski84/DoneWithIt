import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	Button,
	Alert,
} from 'react-native';

export default function App() {
	const handleOnPress = () => console.log('text pressed');
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />

			<Text numberOfLines={1} onPress={handleOnPress}>
				Used to truncate the text with an ellipsis after computing the text
				layout, including line wrapping, such that the total number of lines
				does not exceed this number. Setting this property to 0 will result in
				unsetting this value, which means that no lines restriction will be
				applied.
			</Text>

			<TouchableHighlight
				onPress={() => console.log("Don't touch this - highlight!!!")}>
				<Image
					source={{
						width: 200,
						height: 300,
						uri: 'https://picsum.photos/200/300',
					}}
				/>
			</TouchableHighlight>

			<TouchableOpacity
				onPress={() => console.log("Don't touch this - opacity!!!")}>
				<Image
					style={styles.forFavicon}
					source={require('./assets/favicon.png')}
				/>
			</TouchableOpacity>

			<TouchableWithoutFeedback
				onPress={() => console.log("Don't touch this - feedback!!!")}>
				<Image
					style={styles.tinyLogo}
					blurRadius={2}
					fadeDuration={1000}
					source={{
						width: 200,
						height: 300,
						uri: 'https://reactnative.dev/img/tiny_logo.png',
					}}
				/>
			</TouchableWithoutFeedback>
			<Button
				title="Click Me"
				color="orange"
				onPress={() => console.log("Don't touch button")}
			/>
			<Button
				title="Show alert"
				color="lightblue"
				onPress={() =>
					Alert.alert('My title', 'My message', [
						{ text: 'Yes', onPress: () => console.log('yes') },
						{ text: 'No', onPress: () => console.log('No') },
					])
				}
			/>
			<Button
				title="Leave msg"
				color="lightgrey"
				onPress={() =>
					Alert.prompt('Your title', 'Your msg', (text) => console.log(text))
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	forFavicon: {
		width: 20,
		height: 20,
	},
	tinyLogo: {
		width: 100,
		height: 100,
	},
});
