import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const IconButton = ({ icon, onPress, style }: { icon: ReactNode, onPress(): void, style: ViewStyle }) => {
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
