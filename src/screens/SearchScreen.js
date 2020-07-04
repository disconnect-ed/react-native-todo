import React from 'react'
import {View, Text, Button} from "react-native";

export const SearchScreen = ({navigation}) => {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Перейти к избранным делам"
                onPress={() => navigation.navigate('Favorite')}
            />
        </View>
    );
}