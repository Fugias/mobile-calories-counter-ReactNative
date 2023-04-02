import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { test } from "../App";
import { useContext } from "react";
import * as SQLite from "expo-sqlite";
import NutritionLabel from "./nutritionLabel";

const db = SQLite.openDatabase("food.db");

const Nutrition = () => {
  const { food } = useContext(test);

  return (
    <ScrollView style={{backgroundColor: "#222222"}}>
      <View style={styles.wrap}>
        <Text style={[styles.textColor, { fontSize: 28 }]}>Calories</Text>
        <View style={styles.bigBall}>
          <Image
            style={styles.hamburger}
            source={require("../assets/images/hamburger.png")}
          ></Image>
        </View>
        <Text style={[styles.textColor, { fontSize: 28 }]}>
          {food.reduce(
            (result, item) =>
              (result =
                result +
                Math.round(
                  ((item.protein * 4 +
                    item.fat * 9 +
                    item.fiber * 2 +
                    item.carbs * 4) /
                    100) *
                    item.grams
                )),
            0
          )}{" "}
          kcal
        </Text>
        <Text style={[styles.textColorGray, { fontSize: 20 }]}>goal 3000</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            db.transaction((tx) => tx.executeSql("DROP TABLE IF EXISTS food;"));
            db.transaction((tx) =>
              tx.executeSql(
                "CREATE TABLE IF NOT EXISTS food (id integer, name text, `when` text, protein integer, carbs integer, fiber integer, fat integer, grams integer);"
              )
            );
            food.forEach((item) => {
              db.transaction((tx) =>
                tx.executeSql(
                  `INSERT INTO food (id, name, \`when\`, protein, carbs, fiber, fat, grams) VALUES(${item.id},"${item.name}", "${item.when}", ${item.protein}, ${item.carbs}, ${item.fiber}, ${item.fat}, ${item.grams});`
                )
              );
            });
          }}
        >
          <Text style={{color: "white", fontSize: 20, fontWeight: 500}}>Save</Text>
        </TouchableOpacity>
      </View>
      <NutritionLabel food={food}></NutritionLabel>
    </ScrollView>
  );
};

export default Nutrition;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#222222",
    alignItems: "center",
    paddingTop: 10,
  },
  textColor: {
    color: "white",
  },
  textColorGray: {
    color: "#A7A7A7",
  },
  hamburger: {
    width: 100,
    height: 100,
  },
  bigBall: {
    borderRadius: 3000,
    backgroundColor: "#2C2C2C",
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#2C2C2C",
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    width: 300,
    borderColor: "#A7A7A7",
    padding: 20,
    marginTop: 10
  }
});
