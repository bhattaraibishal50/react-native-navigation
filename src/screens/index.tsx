import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Home";
import Resturant from "./Resturant";
import OrderDelivery from "./OrderDelivery";

const Stack = createStackNavigator();
import Tabs from "../tabs";
export const Screens = () => {
    return (
        <>
            <Stack.Navigator headerMode="none" initialRouteName={"Home"} >
                <Stack.Screen component={Tabs} name="Tabs" />
                <Stack.Screen component={Resturant} name="Restaurant" />
                <Stack.Screen component={OrderDelivery} name="OrderDelivery" />
            </Stack.Navigator>
        </>
    )
}