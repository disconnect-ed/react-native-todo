import React, {useState} from 'react';
import {AppLoading} from "expo";
import * as Font from 'expo-font'

import {MainLayout} from "./src/MainLayout";
import {TodoState} from "./src/context/todo/TodoState";
import {ScreenState} from "./src/context/screen/ScreenState";

async function loadApp() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false)


    if (!isReady) {
        return <AppLoading startAsync={loadApp} onError={err => console.log(err)}
                           onFinish={() => setIsReady(true)} />
    }



    return (
        <ScreenState>
            <TodoState>
                <MainLayout/>
            </TodoState>
        </ScreenState>
    )
}


