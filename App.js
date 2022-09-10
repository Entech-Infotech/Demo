import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign,Ionicons } from '@expo/vector-icons';

//#region Imported Screens
import SplashScreen from './src/Screens/SplashScreen';
import DashboardScreen from './src/Screens/DashboardScreen';
import InvoiceScreenNavigation from './src/Screens/InvoiceScreen';
//#endregion


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarInactiveTintColor: "#4C164D",
      tabBarActiveTintColor: "#4C164D",
      tabBarIndicatorStyle: { backgroundColor: '#4C164D' },
      lazy:true
    }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Invoice" component={InvoiceScreenNavigation} />
      <Tab.Screen name="Help" component={DashboardScreen} />
    </Tab.Navigator>
  )
}

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, color: '#4c164d', fontWeight: 'bold', letterSpacing: 1.2, textAlign: 'center' }}>Score 3S Cloud</Text>
        <View style={{ marginVertical: 20, flexDirection: 'row' }}>
          <Image source={require("./assets/5943911.jpg")} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: 'contain' }} />
          <View>
            <Text style={{ fontSize: 18, letterSpacing: 1.2, fontWeight: '700' }}>Jhon Doe</Text>
            <Text style={{ fontSize: 14 }}  adjustsFontSizeToFit={true} numberOfLines={1}>Jhon.doe@gmail.com</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#4C164DD9',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#4C164D',
        drawerStyle: { backgroundColor: '#F6F6F6', width: 200 },
        headerTintColor: '#FFF',
        headerBackgroundContainerStyle: { backgroundColor: "#4C164D", alignItems: 'center' },
        headerTitleAlign: "center",
        drawerType: "slide"
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigator} options={{drawerIcon: ({focused, size}) => (
              <AntDesign
                 name="home"
                 size={size}
                 color={focused ? '#FFF' : '#4C164D'}
              />
           )}}/>
      <Drawer.Screen name="Outlet" component={TabNavigator} options={{drawerIcon: ({focused, size}) => (
              <AntDesign
                 name="isv"
                 size={size}
                 color={focused ? '#FFF' : '#4C164D'}
              />
           )}}/>
      <Drawer.Screen name="MRP" component={TabNavigator} options={{drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="pricetags-outline"
                 size={size}
                 color={focused ? '#FFF' : '#4C164D'}
              />
           )}}/>
      <Drawer.Screen name="Invoice" component={TabNavigator} options={{drawerIcon: ({focused, size}) => (
              <AntDesign
                 name="addfile"
                 size={size}
                 color={focused ? '#FFF' : '#4C164D'}
              />
           )}}/>
      <Drawer.Screen name="Sales Order" component={TabNavigator} options={{drawerIcon: ({focused, size}) => (
              <AntDesign
                 name="bank"
                 size={size}
                 color={focused ? '#FFF' : '#4C164D'}
              />
           )}}/>
      <Drawer.Screen name="About Us" component={TabNavigator} options={{drawerIcon: ({focused, size}) => (
              <AntDesign
                 name="team"
                 size={size}
                 color={focused ? '#FFF' : '#4C164D'}
              />
           )}}/>
      <Drawer.Screen name="Logout" children={() => {navigation.replace('Splash')}} options={{drawerIcon: ({focused, size}) => (
              <AntDesign
                 name="logout"
                 size={size}
                 color={focused ? '#FFF' : '#4C164D'}
              />
           )}}/>
    </Drawer.Navigator>
  )
}



export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigator} />
          {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    // <DashboardScreen />
  );
}
