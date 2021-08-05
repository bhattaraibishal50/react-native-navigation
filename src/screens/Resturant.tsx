import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image  } from "react-native";
import Animated, { ceil } from "react-native-reanimated";
import { IResturant } from "../interfaces/resturant";
import THEME, { FONTS } from "../theme";
import { isIphoneX } from 'react-native-iphone-x-helper'

const Resturant: React.FC = ({ route, navigation }: any) => {
    const scrollX = new Animated.Value(0);
    const [resturant, setResturant] = useState<IResturant>()
    const [currentLocation, setCurrentLocation] = useState(null);
    const [orderItems, setOrderItems] = useState([]);

    useEffect(()=>{
        let {item, currentLocation} = route.params;
        setResturant(item)
        setCurrentLocation(currentLocation)
    })

    const renderHeader = () => {
        return (
            <View style={{flexDirection: "row"}}>
                {/* back  */}
                <TouchableOpacity style={{
                    width: 50,
                    paddingLeft: THEME.SIZES.padding *2,
                    justifyContent: "center"
                }}
                 onPress={()=> navigation.goBack()}>
                   <Image 
                   source={require("../../assets/icons/back.png")} 
                   resizeMode="contain"
                   style={{
                       width:30,
                       height:30,
                   }}/>
                </TouchableOpacity>

                 {/* Resturant Name */}
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <View style={{
                        height:50,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: THEME.SIZES.padding *3,
                        borderRadius: THEME.SIZES.radius,
                        backgroundColor: THEME.COLORS.lightGray3
                    }}>
                    <Text style={{...THEME.FONTS.h3}}> {resturant?.name}</Text>
                    </View>
                </View>
                {/* Size menu */}
                <TouchableOpacity 
                    style={{
                        width: 50, 
                        paddingRight: THEME.SIZES.padding * 2,
                        justifyContent: "center"
                    }}>
                    <Image 
                        source={require("../../assets/icons/list.png")} 
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderFoodInfo = () => {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                // onScroll={Animated.event([
                //     { nativeEvent: {contentOffSet: {x: scrollX }}}
                // ], {useNativeDriver: false})}
            >
                {
                    resturant?.menu.map((item:any, index:any)=> (
                        <View 
                            key={`menu_${index}`}
                            style={{ alignItems: "center" }}
                        >
                            <View style={{height: THEME.SIZES.height * 0.35}}>
                            {/* Food image */}
                                <Image 
                                    source={item.photo} 
                                    resizeMode="cover"
                                    style={{
                                        width: THEME.SIZES.width,
                                        height: "100%"
                                    }}
                                />
                                {/* quantity */}
                                <View style={{
                                    position: "absolute",
                                    bottom: -20,
                                    width: THEME.SIZES.width,
                                    height: 50,
                                    justifyContent: "center",
                                    flexDirection: "row"
                                }}>
                                    <TouchableOpacity style={{
                                        width: 50,
                                        backgroundColor: THEME.COLORS.white,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopLeftRadius:25,
                                        borderBottomLeftRadius: 25,
                                    }}>
                                        <Text style={{...THEME.FONTS.body1}}>-</Text>
                                    </TouchableOpacity>
                                    
                                    <View style={{
                                        width: 50,
                                        backgroundColor: THEME.COLORS.white,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                        <Text style={{...THEME.FONTS.h2}}>100</Text>
                                    </View>

                                    <TouchableOpacity 
                                        style={{
                                            width: 50,
                                            backgroundColor: THEME.COLORS.white,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderTopRightRadius: 25,
                                            borderBottomRightRadius: 25
                                        }}
                                    >
                                        <Text style={{...THEME.FONTS.body1}}>+</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                            {/* Name and description */}
                            <View style={{
                                width: THEME.SIZES.width,
                                alignItems: "center",
                                marginTop: 15,
                                paddingHorizontal: THEME.SIZES.padding * 2
                            }}>
                                <Text style={{
                                    marginVertical: 10, 
                                    textAlign: "center",
                                    ...THEME.FONTS.h2
                                }}>
                                    {item.name} - {item.price.toFixed(2)}
                                </Text>
                                <Text style={{...THEME.FONTS.body3}}>{item.description}</Text>
                            </View>

                            {/* calories  */}
                            <View style={{
                                flexDirection: "row",
                                marginTop: 10,
                            }}>
                                <Image source={require("../../assets/icons/fire.png")}
                                    style={{
                                        width: 20, 
                                        height: 20, 
                                        marginRight: 10
                                    }} 
                                />
                                <Text style={{...THEME.FONTS.body3, color: THEME.COLORS.darkgray}}>
                                    {item.calories.toFixed(2)} cal
                                </Text>
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>
        );
    }

    const  getBasketItemCount = () => {
        let itemCount = orderItems.reduce((a, b:any) => a + (b.qty || 0), 0)
        return itemCount
    }

    const sumOrder = () => {
        let total = orderItems.reduce((a, b:any) => a + (b.total || 0), 0)
        return total.toFixed(2)
    }

    const renderOrder = () => {
        return (
            <View>
            <View style={{
                backgroundColor: THEME.COLORS.white,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40
            }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: THEME.SIZES.padding * 2,
                        paddingHorizontal: THEME.SIZES.padding * 3,
                        borderBottomColor: THEME.COLORS.lightGray2,
                        borderBottomWidth: 1
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>{getBasketItemCount()} items in Cart</Text>
                    <Text style={{ ...FONTS.h3 }}>${sumOrder()}</Text>
                </View>
                
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: THEME.SIZES.padding * 2,
                        paddingHorizontal: THEME.SIZES.padding * 3
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require("../../assets/icons/pin.png")}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: THEME.COLORS.darkgray
                            }}
                        />
                        <Text style={{ marginLeft: THEME.SIZES.padding, ...THEME.FONTS.h4 }}>Location</Text>
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require("../../assets/icons/mastercard.png")}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: THEME.COLORS.darkgray
                            }}
                        />
                        <Text style={{ marginLeft: THEME.SIZES.padding, ...THEME.FONTS.h4 }}>8888</Text>
                    </View>
                </View>
                 {/* Order Button */}
                 <View
                    style={{
                        padding: THEME.SIZES.padding * 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                     <TouchableOpacity
                            style={{
                                width: THEME.SIZES.width * 0.9,
                                padding: THEME.SIZES.padding,
                                backgroundColor: THEME.COLORS.primary,
                                alignItems: 'center',
                                borderRadius: THEME.SIZES.radius
                            }}
                            onPress={() => navigation.navigate("OrderDelivery", {
                                restaurant: resturant,
                                currentLocation: currentLocation
                            })}
                        >
                            <Text style={{ color: THEME.COLORS.white, ...THEME.FONTS.h2 }}>Order</Text>
                        </TouchableOpacity>
                </View>
            </View>
            {isIphoneX() &&
                    <View
                        style={{
                            position: 'absolute',
                            bottom: -34,
                            left: 0,
                            right: 0,
                            height: 34,
                            backgroundColor: THEME.COLORS.white
                        }}
                    >
                    </View>
                }
            </View>
        );
    }
    return (
        <SafeAreaView>
            {renderHeader()}
            {renderFoodInfo()}
            {renderOrder()}
        </SafeAreaView>
    )
};

const Styles = StyleSheet.create({

});

export default Resturant;