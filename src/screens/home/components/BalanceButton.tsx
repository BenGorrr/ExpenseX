import { Text, TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";
import { colors } from "../../../theme/colors";

const BalanceButton = ({ onPress, balance }: { onPress(): void, balance: number }) => {

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
