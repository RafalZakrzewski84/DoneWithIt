import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function App() {
	const handleOnPress = () => console.log('text pressed');
	return (
		<View style={styles.container}>
			<Text numberOfLines={1} onPress={handleOnPress}>
				Used to truncate the text with an ellipsis after computing the text
				layout, including line wrapping, such that the total number of lines
				does not exceed this number. Setting this property to 0 will result in
				unsetting this value, which means that no lines restriction will be
				applied.
			</Text>
			<StatusBar style="auto" />
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
});
