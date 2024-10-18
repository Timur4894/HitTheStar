import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SCREENS} from '../utils/constants';
import bottomTabs from '../utils/data/bottomTabs';
import {View} from 'react-native';
const Tab = createBottomTabNavigator();

const BottomTabRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#bfab91'
        },
        headerShown: false,
        headerTransparent: false,
        tabBarActiveTintColor: COLORS.primary,
        headerShadowVisible: false,
        tabBarLabel: '',
        tabBarLabelStyle: {
          marginTop: -26,
        },
        headerTitleStyle: {
          color: COLORS.black,
          fontWeight: 'bold',
          fontSize: 30,
        },
      }}>
      {bottomTabs.map(({name, component, Icon}) => (
        <Tab.Screen
          name={name}
          component={component}
          options={{
            tabBarIcon: ({color}) => Icon !== undefined && (
              <View style={{width: 28, height: 28}}>
                <Icon width={'100%'} height={'100%'} color={color} />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabRouter;
