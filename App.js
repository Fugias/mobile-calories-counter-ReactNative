import FoodScreen from "./food/foodsScreen";
import Nutrition from "./food/nutrition.js";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, StatusBar, View } from "react-native";
import { createContext, useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";

const Tab = createMaterialTopTabNavigator();
export const test = createContext(null)


const db = SQLite.openDatabase("food.db");



db.transaction((tx) =>
  tx.executeSql("CREATE TABLE IF NOT EXISTS food (id integer, name text, `when` text, protein integer, carbs integer, fiber integer, fat integer, grams integer);")
);




export default function App() {

  const [items, setItems] = useState(null);
  const [food, setFood] = useState([])

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(`select * from food;`, [], (_, { rows: { _array } }) =>
      {
        return setFood(_array)
      }
        
      );
    });
  }, []);


  // const [food, setFood] = useState([
  //   {
  //     id: 1,
  //     name: "mleko",
  //     when: "dinner",
  //     protein: 20,
  //     carbs: 40,
  //     fiber: 40,
  //     fat: 60,
  //     grams: 20,
  //   },
  //   {
  //     id: 2,
  //     name: "tvaroh",
  //     when: "breakfast",
  //     protein: 20,
  //     carbs: 40,
  //     fiber: 40,
  //     fat: 60,
  //     grams: 20,
  //   },
  //   {
  //     id: 3,
  //     name: "jogurt",
  //     when: "second dinner",
  //     protein: 20,
  //     carbs: 40,
  //     fiber: 40,
  //     fat: 60,
  //     grams: 20,
  //   },
  // ]);


  return (
    <test.Provider value={{food,setFood}}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2C2C2C"}></StatusBar>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "#A7A7A7",
            tabBarStyle: { backgroundColor: "#2C2C2C" },
            tabBarIndicatorStyle: {
              backgroundColor: "#A7A7A7",
              height: 4.5
            },
          
          }}
        >
          <Tab.Screen name="SUMMARY" component={Nutrition} initialParams={{ karel: "ahoj"}}/>
          <Tab.Screen name="DIET" component={FoodScreen} />
        </Tab.Navigator>
      </NavigationContainer>

    </test.Provider>
    
  );
}
