import {
	DefaultTheme,
	NavigationContainer,
	useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Button, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Home from "../screens/home/Home";
import { colors } from "../theme/colors";
import IconButton from "../components/IconButton";

const Stack = createStackNavigator();

function HomeStack() {
	const { colors } = useTheme();

	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.primary,
				},
				headerTintColor: "#fff",
				headerTitle: "ExpenseX",
				headerRightContainerStyle: {
					paddingEnd: "2%",
				},
				headerRight: () => (
					<View style={{ flexDirection: "row" }}>
						<IconButton
							icon={
								<Feather name="search" size={24} color="#fff" />
							}
							onPress={console.log("This a button")}
							style={{ marginHorizontal: "6%" }}
						/>
						<IconButton
							icon={
								<FontAwesome
									name="exchange"
									size={24}
									color="#fff"
								/>
							}
							onPress={console.log("This a button")}
							style={{ marginHorizontal: "4%" }}
						/>
						<IconButton
							icon={
								<Feather
									name="more-vertical"
									size={24}
									color="#fff"
								/>
							}
							onPress={console.log("This a button")}
							style={{ marginHorizontal: "4%" }}
						/>
					</View>
				),
			}}
		>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
}

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: colors.primary,
	},
};

const RootNavigation = () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<StatusBar style="auto" />
			<HomeStack />
		</NavigationContainer>
	);
};

export default RootNavigation;
