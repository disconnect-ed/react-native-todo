import React, {useContext} from 'react'
import {Navbar} from "./components/Navbar/Navbar";
import {View, StyleSheet} from "react-native";
import {THEME} from "./utils/theme";
import {MainScreen} from "./screens/MainScreen/MainScreen";
import {TodoScreen} from "./screens/TodoScreen/TodoScreen";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = (props) => {
    const {todoId} = useContext(ScreenContext)

    return (
        <View style={styles.wrapper}>
            <Navbar/>
            <View style={styles.container}>
                {todoId ? <TodoScreen/> : <MainScreen/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
        flex: 1
    },
    wrapper: {
        flex: 1
    }
});