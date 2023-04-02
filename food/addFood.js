import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import InputFood from "./inputFood";

const AddFood = ({ when, setFood, food }) => {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.center}>
      <View style={styles.when}>
        <Text style={[styles.text, styles.textMarginLeft, styles.textColor]}>
          {when}
        </Text>
        <View style={[styles.addFood, styles.textMarginRight]}>
          <Text style={styles.textColor}>
            {food.reduce(
              (result, item) =>
                when.toLowerCase() == item.when
                  ? (result =
                      result +
                      Math.round(
                        ((item.protein * 4 +
                          item.fat * 9 +
                          item.fiber * 2 +
                          item.carbs * 4) /
                          100) *
                          item.grams
                      ))
                  : (result = result),
              0
            )} kcal
          </Text>
          <TouchableOpacity
            onPress={() => {
              setModal(true);
            }}
          >
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../assets/images/plus.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <InputFood
        modal={modal}
        setModal={setModal}
        setFood={setFood}
        food={food}
        when={when}
      />
    </View>
  );
};

export default AddFood;

const styles = StyleSheet.create({
  when: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    width: "95%",
    backgroundColor: "#2C2C2C",
    flexDirection: "row",
    borderRadius: 7,
  },
  textColor: {
    color: "#A7A7A7",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  textColorWhite: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  textMarginLeft: {
    marginLeft: 15,
  },
  textMarginRight: {
    marginRight: 15,
  },

  addFood: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 14,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 20,
  },
  modalWrap: {
    width: "95%",
    backgroundColor: "#404040",
    borderRadius: 7,
    flex: 1,
  },
  modalSizer: {
    width: "95%",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  close: {
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#3D9214",
  },
});
