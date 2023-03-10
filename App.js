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
	SafeAreaView, //only for ios
	StatusBar as ReactStatusBar,
	Platform,
	Dimensions,
	ScrollView,
} from 'react-native';

import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
	const handleOnPress = () => console.log('text pressed');

	// dimensions
	console.log(Dimensions.get('window'));
	console.log(Dimensions.get('screen'));

	// dimensions from hook for detecting screen rotation
	console.log(useDimensions());
	console.log(useDeviceOrientation());

	const { landscape } = useDeviceOrientation();

	return (
		//style can take array to apply multiple styles
		<SafeAreaView style={[styles.container, viewBackground]}>
			<StatusBar style="auto" />
			{/* <ScrollView>
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
				/> */}

			{/* layouts */}
			{/* <View
					style={{
						backgroundColor: 'blue',
						width: 150,
						height: 70,
					}}>
					<Text>width 150px</Text>
				</View>
				<View
					style={{
						backgroundColor: 'lightblue',
						width: '50%',
						height: 70,
					}}>
					<Text>width 50%</Text>
				</View>
				<View
					style={{
						backgroundColor: 'red',
						width: '50%',
						height: landscape ? '100%' : '30%', //calculate height base on screen rotation
					}}>
					<Text>height calculated</Text>
				</View>
			</ScrollView> */}

			<View
				style={{
					backgroundColor: 'dodgerblue',
					width: 100,
					height: 100,
				}}
			/>
			<View
				style={{
					backgroundColor: 'gold',
					width: 100,
					height: 100,
				}}
			/>
			<View
				style={{
					backgroundColor: 'tomato',
					width: 100,
					height: 100,
				}}
			/>
		</SafeAreaView>
	);
}

const viewBackground = { backgroundColor: 'lightgreen' };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: Platform.OS === 'android' ? ReactStatusBar.currentHeight : 0, //calculate padding for android base on status bar height
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
