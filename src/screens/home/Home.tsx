import { View } from "react-native";
import { Styles } from "../../theme/globalStyles";
import BalanceButton from "./components/BalanceButton";
import ExpenseButton from "./components/ExpenseButton";
import IncomeButton from "./components/IncomeButton";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList, InnerDrawerParamList, OutterDrawerParamList } from "../../navigation/types";
import { CompositeScreenProps } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";

type Props = CompositeScreenProps<
	StackScreenProps<HomeStackParamList, 'Home'>,
	CompositeScreenProps<DrawerScreenProps<InnerDrawerParamList>, DrawerScreenProps<OutterDrawerParamList>>
>;

const Home = ({ navigation }: Props) => {

	return (
		<View style={[Styles.container]}>
			<View style={{ flex: 1 }} />
			<View style={{ backgroundColor: "#fff" }}>
				<BalanceButton onPress={() => { }} balance={123.2} />
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					paddingVertical: "10%",
				}}
			>
				<ExpenseButton onPress={() => {
					navigation.navigate("ExpenseEntry");
				}} />
				<IncomeButton onPress={() => { }} />
			</View>
		</View>
	);
};

export default Home;
