import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {View, Alert} from 'react-native'
import {AllTodosScreen} from "../screens/AllTodosScreen";
import {FavoriteScreen} from "../screens/FavoriteScreen";
import {UrgentScreen} from "../screens/UrgentScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome5} from "@expo/vector-icons";
import NavigationContainer from "@react-navigation/native/src/NavigationContainer";
import {ViewTodoScreen} from "../screens/ViewTodoScreen";
import {CustomButton} from "../components/CustomButton";
import {EditScreen} from "../screens/EditScreen";
import {CreateScreen} from "../screens/CreateScreen";
import { CommonActions } from '@react-navigation/native';
import {SearchScreen} from "../screens/SearchScreen";
import firebaseConfig from "firebase";

const addTodo = (props) => {
    props.navigation.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [
                { name: 'AllTodos' },
                {
                    name: 'Create',
                    params: { key: props.route.key },
                },

            ],
        })
    )
    props.navigation.navigate('All')

}

const logout = () => {
    Alert.alert(
        "Выйти",
        "Вы действительно хотите выйти?",
        [
            {
                text: "Нет",
                style: "cancel"
            },
            {
                text: "Да",
                onPress: () =>  firebaseConfig.auth().signOut(),
            },
        ],
        { cancelable: false }
    );
}

const getTabBarVisibility = (route) => {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';

    if (routeName === 'View' || routeName === 'Create' || routeName === 'Edit' || routeName === 'Search') {
        return false;
    }

    return true;
}

const AllTodosStackScreen = React.memo(function AllTodosStackScreen({...props}) {
    const AllTodosStack = createStackNavigator();
    const theme = props.theme
    return (
        <AllTodosStack.Navigator initialRouteName="AllTodos" screenOptions={{
            headerStyle: {
                color: 'white',
                backgroundColor: theme.textColor
            },
            headerTintColor: 'white'
        }}>
            <AllTodosStack.Screen options={{
                title: 'Все дела',
                headerRight: () => <View style={{flexDirection: 'row'}}>
                    <CustomButton name='sign-out-alt' style={{marginRight: 30}} onPress={logout}/>
                    <CustomButton name='plus' onPress={() => props.navigation.navigate('Create')}/>
                    </View>
            }} name='AllTodos'>
                {props => <AllTodosScreen {...props} theme={theme}/>}
            </AllTodosStack.Screen>
            <AllTodosStack.Screen options={{title: 'Просмотр дела'}}
                                  name='View'>
                {props => <ViewTodoScreen {...props} theme={theme}/>}
            </AllTodosStack.Screen>
            <AllTodosStack.Screen options={{title: 'Создание дела', tabBarVisible: false}}
                                  name='Create'>
                {props => <CreateScreen {...props} theme={theme}/>}
            </AllTodosStack.Screen>
            <AllTodosStack.Screen options={{title: 'Редактирование дела'}}
                                  name='Edit'>
                {props => <EditScreen {...props} theme={theme}/>}
            </AllTodosStack.Screen>
            <AllTodosStack.Screen options={{title: 'Поиск дела'}}
                                  name='Search'>
                {props => <SearchScreen {...props} theme={theme}/>}
            </AllTodosStack.Screen>
        </AllTodosStack.Navigator>
    )
})

export const FavoriteTodosStackScreen = React.memo(function FavoriteTodosStackScreen({...props}) {
    const FavoriteTodosStack = createStackNavigator();
    const theme = props.theme
    return (
        <FavoriteTodosStack.Navigator initialRouteName="FavoriteTodos" screenOptions={{
            headerStyle: {
                backgroundColor: theme.textColor
            },
            headerTintColor: 'white'
        }}>
            <FavoriteTodosStack.Screen options={{
                title: 'Избранные дела',
                headerRight: () => <View style={{flexDirection: 'row'}}>
                    <CustomButton name='sign-out-alt' style={{marginRight: 30}} onPress={logout}/>
                    <CustomButton name='plus' onPress={() => props.navigation.navigate('Create')}/>
                </View>
            }}
                                       name='FavoriteTodos'>
                {props => <FavoriteScreen {...props} theme={theme}/>}
            </FavoriteTodosStack.Screen>
        </FavoriteTodosStack.Navigator>
    )
})

export const UrgentTodosStackScreen = React.memo(function FavoriteTodosStackScreen({...props}) {
    const UrgentTodosStack = createStackNavigator();
    const theme = props.theme
    return (
        <UrgentTodosStack.Navigator initialRouteName="UrgentTodos" screenOptions={{
            headerStyle: {
                backgroundColor: theme.textColor
            },
            headerTintColor: 'white'
        }}>
            <UrgentTodosStack.Screen options={{
                title: 'Срочные дела',
                headerRight: () => <View style={{flexDirection: 'row'}}>
                    <CustomButton name='sign-out-alt' style={{marginRight: 30}} onPress={logout}/>
                    <CustomButton name='plus' onPress={() => props.navigation.navigate('Create')}/>
                </View>
            }} name='UrgentTodos'>
                {props => <UrgentScreen {...props} theme={theme}/>}
            </UrgentTodosStack.Screen>
        </UrgentTodosStack.Navigator>
    )
})


export const AppNav = ({theme, ...props}) => {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'All') {
                            iconName = 'list';
                        } else if (route.name === 'Favorite') {
                            iconName = 'star';
                        } else if (route.name === 'Urgent') {
                            iconName = 'fire';
                        }
                        return <FontAwesome5 name={iconName} size={20} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'rgba(255, 255, 255, 0.3)',
                    keyboardHidesTabBar: true,
                    style: {
                        backgroundColor: theme.textColor
                    }
                }}
            >
                <Tab.Screen name="All"  options={({route}) => ({title: 'Все', tabBarVisible: getTabBarVisibility(route)})}>
                    {props => <AllTodosStackScreen {...props} theme={theme}/>}
                </Tab.Screen>
                <Tab.Screen name="Favorite" options={{title: 'Избранные'}}>
                    {props => <FavoriteTodosStackScreen {...props} theme={theme}/>}
                </Tab.Screen>
                <Tab.Screen name="Urgent" options={{title: 'Срочные', }}>
                    {props => <UrgentTodosStackScreen {...props} theme={theme}/>}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}


