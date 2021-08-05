import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import THEME from '../theme';
import {categoryData} from '../services/category';
import {restaurantData} from '../services/resturant';
import {initialCurrentLocation} from '../services/location';
import {ICategory} from '../interfaces/category';

const Home: React.FC = ({navigation}: any) => {
  const [categories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation] = React.useState(initialCurrentLocation);

  const onSelectCategory = (category: ICategory) => {
    setRestaurants(
      restaurantData.filter(a => a.categories.includes(category.id)),
    );
    setSelectedCategory(category);
  };

  const getCategoryNameById = (id: number) => {
    let category = categories.filter(a => a.id == id);
    if (category.length > 0) {
      return category[0].name;
    }
    return '';
  };

  const renderHeader = () => {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: THEME.SIZES.padding + 2,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/icons/nearby.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: THEME.COLORS.lightGray3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: THEME.SIZES.radius,
            }}>
            <Text style={{...THEME.FONTS.h3}}>Location</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: THEME.SIZES.padding + 2,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/icons/shopping-basket.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMainCategory = () => {
    const renderItem = ({item}: any) => {
      return (
        <TouchableOpacity
          style={{
            padding: THEME.SIZES.padding,
            paddingBottom: THEME.SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id
                ? THEME.COLORS.primary
                : THEME.COLORS.white,
            borderRadius: THEME.SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: THEME.SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? THEME.COLORS.white
                  : THEME.COLORS.lightGray,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              marginTop: THEME.SIZES.padding,
              color:
                selectedCategory?.id == item.id
                  ? THEME.COLORS.white
                  : THEME.COLORS.black,
              ...THEME.FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{padding: THEME.SIZES.padding + 2}}>
        <Text style={{...THEME.FONTS.h1}}>Main</Text>
        <Text style={{...THEME.FONTS.h1}}>Categories</Text>

        <FlatList
          data={categoryData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: THEME.SIZES.padding + 2}}
        />
      </View>
    );
  };

  const renderResturantList = () => {
    const renderItem = ({item}: any) => {
      return (
        <TouchableOpacity
          style={{marginBottom: THEME.SIZES.padding * 2}}
          onPress={() =>
            navigation.navigate('Restaurant', {
              item,
              currentLocation,
            })
          }>
          {/* Image */}
          <View
            style={{
              marginBottom: THEME.SIZES.padding,
            }}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: '100%',
                height: 200,
                borderRadius: THEME.SIZES.radius,
              }}
            />

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 50,
                width: THEME.SIZES.width * 0.3,
                backgroundColor: THEME.COLORS.white,
                borderTopRightRadius: THEME.SIZES.radius,
                borderBottomLeftRadius: THEME.SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                ...styles.shadow,
              }}>
              <Text style={{...THEME.FONTS.h4}}>{item.duration}</Text>
            </View>
          </View>
          {/* Resturant info */}
          <View
            style={{
              marginTop: THEME.SIZES.padding,
              flexDirection: 'row',
            }}>
            {/* Rating */}
            <Image
              source={require('../../assets/icons/star.png')}
              style={{
                height: 20,
                width: 20,
                tintColor: THEME.COLORS.primary,
                marginRight: 10,
              }}
            />
            <Text style={{...THEME.FONTS.body3}}>{item.rating}</Text>
            {/* Categories */}
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              {item.categories.map((categoryId: number) => {
                return (
                  <View style={{flexDirection: 'row'}} key={categoryId}>
                    <Text style={{...THEME.FONTS.body3}}>
                      {getCategoryNameById(categoryId)}
                    </Text>
                    <Text
                      style={{...THEME.FONTS.h3, color: THEME.COLORS.darkgray}}>
                      {' '}
                      .{' '}
                    </Text>
                  </View>
                );
              })}
              {/* price */}
              {[1, 2, 3].map(priceRating => (
                <Text
                  key={priceRating}
                  style={{
                    ...THEME.FONTS.body3,
                    color:
                      priceRating <= item.priceRating
                        ? THEME.COLORS.black
                        : THEME.COLORS.darkgray,
                  }}>
                  $
                </Text>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: THEME.SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader}
      {renderMainCategory()}
      {renderResturantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
