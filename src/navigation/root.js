import {
	DefaultTheme,
	NavigationContainer,
	useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Home from "../screens/home/Home";
import { colors } from "../theme/colors";
import IconButton from "../components/IconButton";
import { Provider } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
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
				headerLeft: () => (
					<View style={{ flexDirection: "row", marginStart: "6%" }}>
						<IconButton
							icon={
								<Feather name="filter" size={24} color="#fff" />
							}
							onPress={() =>
								navigation.getParent("LeftDrawer").openDrawer()
							}
							style={{ marginHorizontal: "6%" }}
						/>
					</View>
				),
				headerRight: () => (
					<View style={{ flexDirection: "row" }}>
						<IconButton
							icon={
								<Feather name="search" size={24} color="#fff" />
							}
							onPress={() => console.log("Search")}
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
							onPress={() => console.log("Transfer")}
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
							onPress={() =>
								navigation.getParent("RightDrawer").openDrawer()
							}
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

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen() {
	return (
		<LeftDrawer.Navigator
			id="LeftDrawer"
			screenOptions={{
				drawerPosition: "left",
				headerShown: false,
				drawerStyle: {
					backgroundColor: colors.background,
				},
				drawerLabelStyle: {
					color: "#333",
				},
			}}
			drawerContent={(props) => <LeftDrawerContent {...props} />}
		>
			<LeftDrawer.Screen name="HomeStack" component={HomeStack} />
		</LeftDrawer.Navigator>
	);
}

function LeftDrawerContent() {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>This is the left drawer</Text>
		</View>
	);
}
const RightDrawer = createDrawerNavigator();

function RightDrawerScreen() {
	return (
		<RightDrawer.Navigator
			id="RightDrawer"
			screenOptions={{
				drawerPosition: "right",
				headerShown: false,
			}}
			drawerContent={(props) => <RightDrawerContent {...props} />}
		>
			<RightDrawer.Screen
				name="LeftDrawer"
				component={LeftDrawerScreen}
			/>
		</RightDrawer.Navigator>
	);
}

function RightDrawerContent() {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>This is the right drawer</Text>
		</View>
	);
}

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		...colors,
	},
};

const RootNavigation = () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<Provider>
				<StatusBar style="auto" />
				<RightDrawerScreen />
			</Provider>
		</NavigationContainer>
	);
};

export default RootNavigation;
