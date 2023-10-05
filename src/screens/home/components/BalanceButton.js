import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Surface } from "react-native-paper";

const BalanceButton = ({ onPress, balance }) => {
	const { colors } = useTheme();
	const displayBalance =
		balance >= 0 ? "RM " + balance : "(RM " + balance * -1 + ")";

	return (
		<TouchableOpacity
			style={{
				alignSelf: "center",
			}}
			onPress={onPress}
		>
			<Surface
				style={{
					backgroundColor:
						balance >= 0 ? colors.primary : colors.error,
					borderRadius: 15,
				}}
				elevation={4}
			>
				<Text style={{ padding: "4%", color: "#fff", fontSize: 20 }}>
					Balance {displayBalance}
				</Text>
			</Surface>
		</TouchableOpacity>
	);
};

export default BalanceButton;
