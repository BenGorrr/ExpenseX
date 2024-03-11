import { Feather, FontAwesome } from "@expo/vector-icons";
import {
	DefaultTheme,
	NavigationContainer,
	useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-native-paper";
import IconButton from "../components/IconButton";
import Home from "../screens/home/Home";
import { colors } from "../theme/colors";
import ExpenseEntry from "../screens/entry/ExpenseEntry";

const HomeStackNav = createStackNavigator();

function HomeStack({ navigation }) {
	const { colors } = useTheme();

	return (
		<HomeStackNav.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false
			}}
		>
			<HomeStackNav.Screen name="OutterDrawer" component={OutterDrawerScreen} />
			{/* <HomeStackNav.Screen name="Home" component={Home} /> */}
		</HomeStackNav.Navigator>
	);
}

const InnerDrawer = createDrawerNavigator();

function InnerDrawerScreen({ navigation }) {
	return (
		<InnerDrawer.Navigator
			id="InnerDrawer"
			// screenOptions={{
			// 	drawerPosition: "left",
			// 	headerShown: false,
			// 	drawerStyle: {
			// 		backgroundColor: colors.background,
			// 	},
			// 	drawerLabelStyle: {
			// 		color: "#333",
			// 	},
			// }}
			screenOptions={{
				drawerPosition: "left",
				drawerStyle: {
					backgroundColor: colors.background,
				},
				drawerLabelStyle: {
					color: "#333",
				},
				headerShown: false,


			}}
			drawerContent={(props) => <InnerDrawerContent {...props} />}
		>
			<InnerDrawer.Screen
				options={{
					headerShown: true,
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
									navigation.getParent().openDrawer()
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
									navigation.openDrawer()
								}
								style={{ marginHorizontal: "4%" }}
							/>
						</View>
					),
				}}
				name="Home"
				component={Home}
			/>
		</InnerDrawer.Navigator>
	);
}

function InnerDrawerContent() {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>This is the left drawer</Text>
		</View>
	);
}
const OutterDrawer = createDrawerNavigator();

function OutterDrawerScreen() {
	return (
		<OutterDrawer.Navigator
			id="OutterDrawer"
			screenOptions={{
				drawerPosition: "right",
				headerShown: false,
			}}
			drawerContent={(props) => <OutterDrawerContent {...props} />}
		>
			<OutterDrawer.Screen
				name="InnerDrawer"
				component={InnerDrawerScreen}
			/>
		</OutterDrawer.Navigator>
	);
}

function OutterDrawerContent() {
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

const RootStack = createStackNavigator();

const RootNavigation = () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<Provider>
				<StatusBar style="auto" />
				<RootStack.Navigator
					initialRouteName="HomeStack"
					screenOptions={{
						headerShown: false,
					}}
				>
					<RootStack.Screen name="ExpenseEntry" component={ExpenseEntry} />
					<RootStack.Screen name="HomeStack" component={HomeStack} />
				</RootStack.Navigator>
			</Provider>
		</NavigationContainer>
	);
};

export default RootNavigation;
