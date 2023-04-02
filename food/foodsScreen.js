import { useState, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AddFood from "./addFood";
import RenderList from "./renderFood";
import { test } from "../App";

const FoodScreen = () => {

  const {food,setFood} = useContext(test)

  return (
    
    <>
      <ScrollView style={styles.wrap}>
        <View>
          <View style={(paddingTop = "20")}></View>

          <AddFood when="BREAKFAST" setFood={setFood} food={food} />
          <RenderList food={food} setFood={setFood} when="breakfast" />

          <AddFood when="MORNING SNACK" setFood={setFood} food={food} />
          <RenderList food={food} setFood={setFood} when="morning snack" />

          <AddFood when="LUNCH" setFood={setFood} food={food} />
          <RenderList food={food} setFood={setFood} when="lunch" />

          <AddFood when="AFTERNOON SNACK" setFood={setFood} food={food} />
          <RenderList food={food} setFood={setFood} when="afternoon snack" />

          <AddFood when="DINNER" setFood={setFood} food={food} />
          <RenderList food={food} setFood={setFood} when="dinner" />

          <AddFood when="SECOND DINNER" setFood={setFood} food={food} />
          <RenderList food={food} setFood={setFood} when="second dinner" />

         


        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#222222",
    flex: 1,
  },
});

export default FoodScreen;
