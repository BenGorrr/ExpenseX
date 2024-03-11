import { StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { OutterDrawerParamList, RootStackParamList } from "../../navigation/types";
import { Styles } from "../../theme/globalStyles";

type Props = {
	navigation: StackScreenProps<RootStackParamList, 'ExpenseEntry'>;
}

const ExpenseEntry = ({ navigation }: Props) => {

	return (
		<View style={[Styles.container]}>
			<Text>New Expense</Text>
		</View>
	);
};

export default ExpenseEntry;
