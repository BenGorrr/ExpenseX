import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../theme/colors";

const ExpenseButton = ({ onPress, size = 100 }: { onPress(): void, size?: number }) => {

	return (
		<TouchableOpacity
			style={{
				padding: 5,
				borderRadius: 999,
				backgroundColor: colors.error,
				alignSelf: "center",
			}}
			onPress={onPress}
		>
			<View
				style={{
					borderRadius: 999,
					backgroundColor: "#fff",
					width: size,
					height: size,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Feather name="minus" size={size * 0.4} color={colors.error} />
			</View>
		</TouchableOpacity>
	);
};

export default ExpenseButton;
