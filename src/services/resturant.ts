const affordable = 1
const fairPrice = 2
const expensive = 3

export const restaurantData = [
    {
        id: 1,
        name: "ByProgrammers Burger",
        rating: 4.8,
        categories: [5, 7],
        priceRating: affordable,
        photo: require("../../assets/images/burger-restaurant.jpg"),
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        courier: {
            avatar: require("../../assets/images/avatar-1.jpg"),
            name: "Amy"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
                photo: require("../../assets/images/crispy-chicken-burger.jpg"),
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 10
            },
            {
                menuId: 2,
                name: "Crispy Chicken Burger with Honey Mustard",
                photo: require("../../assets/images/honey-mustard-chicken-burger.jpg"),
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                calories: 250,
                price: 15
            },
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
                photo: require("../../assets/images/baked-fries.jpg"),
                description: "Crispy Baked French Fries",
                calories: 194,
                price: 8
            }
        ]
    },
    {
        id: 2,
        name: "ByProgrammers Pizza",
        rating: 4.8,
        categories: [2, 4, 6],
        priceRating: expensive,
        photo: require("../../assets/images/pizza-restaurant.jpg"),
        duration: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        courier: {
            avatar: require("../../assets/images/avatar-2.jpg"),
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                photo: require("../../assets/images/hawaiian-pizza.jpg"),
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            },
            {
                menuId: 5,
                name: "Tomato & Basil Pizza",
                photo: require("../../assets/images/pizza.jpg"),
                description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                calories: 250,
                price: 20
            },
            {
                menuId: 6,
                name: "Tomato Pasta",
                photo: require("../../assets/images/tomato-pasta.jpg"),
                description: "Pasta with fresh tomatoes",
                calories: 100,
                price: 10
            },
            {
                menuId: 7,
                name: "Mediterranean Chopped Salad ",
                photo: require("../../assets/images/salad.jpg"),
                description: "Finely chopped lettuce, tomatoes, cucumbers",
                calories: 100,
                price: 10
            }
        ]
    },
    {
        id: 3,
        name: "ByProgrammers Hotdogs",
        rating: 4.8,
        categories: [3],
        priceRating: expensive,
        photo: require("../../assets/images/hot-dog-restaurant.jpg"),
        duration: "20 - 25 min",
        location: {
            latitude: 1.5238753474714375,
            longitude: 110.34261833833622,
        },
        courier: {
            avatar: require("../../assets/images/avatar-3.jpg"),
            name: "James"
        },
        menu: [
            {
                menuId: 8,
                name: "Chicago Style Hot Dog",
                photo: require("../../assets/images/chicago-hot-dog.jpg"),
                description: "Fresh tomatoes, all beef hot dogs",
                calories: 100,
                price: 20
            }
        ]
    },
    {
        id: 4,
        name: "ByProgrammers Sushi",
        rating: 4.8,
        categories: [8],
        priceRating: expensive,
        photo: require("../../assets/images/japanese-restaurant.jpg"),
        duration: "10 - 15 min",
        location: {
            latitude: 1.5578068150528928,
            longitude: 110.35482523764315,
        },
        courier: {
            avatar: require("../../assets/images/avatar-4.jpg"),
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                photo: require("../../assets/images/sushi.jpg"),
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                calories: 100,
                price: 50
            }
        ]
    },
    {
        id: 5,
        name: "ByProgrammers Cuisine",
        rating: 4.8,
        categories: [1, 2],
        priceRating: affordable,
        photo: require("../../assets/images/noodle-shop.jpg"),
        duration: "15 - 20 min",
        location: {
            latitude: 1.558050496260768,
            longitude: 110.34743759630511,
        },
        courier: {
            avatar: require("../../assets/images/avatar-4.jpg"),
            name: "Muthu"
        },
        menu: [
            {
                menuId: 10,
                name: "Kolo Mee",
                photo: require("../../assets/images/kolo-mee.jpg"),
                description: "Noodles with char siu",
                calories: 200,
                price: 5
            },
            {
                menuId: 11,
                name: "Sarawak Laksa",
                photo: require("../../assets/images/sarawak-laksa.jpg"),
                description: "Vermicelli noodles, cooked prawns",
                calories: 300,
                price: 8
            },
            {
                menuId: 12,
                name: "Nasi Lemak",
                photo: require("../../assets/images/nasi-lemak.jpg"),
                description: "A traditional Malay rice dish",
                calories: 300,
                price: 8
            },
            {
                menuId: 13,
                name: "Nasi Briyani with Mutton",
                photo: require("../../assets/images/nasi-briyani-mutton.jpg"),
                description: "A traditional Indian rice dish with mutton",
                calories: 300,
                price: 8
            },

        ]
    },
    {

        id: 6,
        name: "ByProgrammers Dessets",
        rating: 4.9,
        categories: [9, 10],
        priceRating: affordable,
        photo: require("../../assets/images/kek-lapis-shop.jpg"),
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            avatar: require("../../assets/images/avatar-1.jpg"),
            name: "Jessie"
        },
        menu: [
            {
                menuId: 12,
                name: "Teh C Peng",
                photo: require("../../assets/images/teh-c-peng.jpg"),
                description: "Three Layer Teh C Peng",
                calories: 100,
                price: 2
            },
            {
                menuId: 13,
                name: "ABC Ice Kacang",
                photo: require("../../assets/images/ice-kacang.jpg"),
                description: "Shaved Ice with red beans",
                calories: 100,
                price: 3
            },
            {
                menuId: 14,
                name: "Kek Lapis",
                photo: require("../../assets/images/kek-lapis.jpg"),
                description: "Layer cakes",
                calories: 300,
                price: 20
            }
        ]

    }


]
