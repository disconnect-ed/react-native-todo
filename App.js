import React, {useState, useEffect} from 'react';
import {AppNav} from "./src/navigation/AppNavigation";
import {getTheme} from "./src/utils/methods";
import {AppLoading} from "expo";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import {Fetch} from "./src/components/Fetch";
import {AuthProvider} from "./src/components/Auth/Auth";
import {Main} from "./src/components/Main";



export default function App() {

    const [theme, setTheme] = useState('')
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return <AppLoading onFinish={() => setIsReady(true)}
                           startAsync={() => setTheme(getTheme())}
                           onError={err => console.log(err)}/>
    }

    return (
        <Provider store={store}>
            <AuthProvider>
                <Main theme={theme}/>
            </AuthProvider>
            <Fetch/>
        </Provider>
    );
}

{/*<NavigationContainer>*/
}
{/*    <Stack.Navigator screenOptions={{*/
}
{/*        title: 'Все дела',*/
}
{/*        headerStyle: {*/
}
{/*            backgroundColor: 'lime'*/
}
{/*        },*/
}
{/*        headerTintColor: '#fff',*/
}
{/*    }}*/
}
{/*                     initialRouteName="AllTodos">*/
}
{/*        <Stack.Screen name="AllTodos"*/
}
{/*                      component={AllTodosScreen}*/
}
{/*                      initialParams={{id: 111}}*/
}
{/*                      options={{*/
}
{/*                          headerRight: () => (*/
}
{/*                              <Button*/
}
{/*                                  onPress={() => alert('This is a button!')}*/
}
{/*                                  title="Info"*/
}
{/*                                  color="#fff"*/
}
{/*                              />*/
}
{/*                          )*/
}
{/*                      }}*/
}
{/*        />*/
}
{/*        <Stack.Screen name="Favorite" component={FavoriteScreen} options={{title: 'Избранные дела'}}/>*/
}
{/*    </Stack.Navigator>*/
}
{/*</NavigationContainer>*/
}