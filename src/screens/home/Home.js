import { View } from "react-native";
import { Styles } from "../../theme/globalStyles";
import ExpenseButton from "./components/ExpenseButton";
import IncomeButton from "./components/IncomeButton";
import BalanceButton from "./components/BalanceButton";
import { useTheme } from "@react-navigation/native";

const Home = () => {
	const { colors } = useTheme();

	return (
		<View style={[Styles.container]}>
			<View style={{ flex: 1 }} />
			<View style={{ backgroundColor: "#fff" }}>
				<BalanceButton balance={123.2} />
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					paddingVertical: "10%",
				}}
			>
				<ExpenseButton />
				<IncomeButton />
			</View>
		</View>
	);
};

export default Home;
