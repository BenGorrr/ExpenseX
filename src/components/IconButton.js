import { TouchableOpacity } from "react-native-gesture-handler";

const IconButton = ({ icon, onPress, style }) => {
	return (
		<TouchableOpacity
			style={{
				...style,
				padding: "2%",
				alignItems: "center",
			}}
			onPress={onPress}
		>
			{icon}
		</TouchableOpacity>
	);
};

export default IconButton;
