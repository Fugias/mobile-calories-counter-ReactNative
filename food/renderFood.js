import { useState } from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Information from "./information";

const RenderList = ({ food, when, setFood }) => {
  const [info, setInfo] = useState(false);
  const [getinfo, setGetinfo] = useState({});

  return (
    <FlatList
      data={food}
      style={{ marginBottom: 10 }}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={({ item }) => {
        if (item.when == when) {
          return (
            <>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: 10,
                    width: "95%",
                    paddingLeft: 17,
                    paddingRight: 20,
                  }}
                >
                  <View style={{ flex: 1 }}>
                      <Text style={styles.textColorWhite}>{item.name}</Text>
                      <Text style={styles.textColor}>{item.grams} g</Text>
                      
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Text style={styles.textColorWhite}>
                      {Math.round(
                        ((item.protein * 4 +
                          item.fat * 9 +
                          item.fiber * 2 +
                          item.carbs * 4) /
                          100) *
                          item.grams
                      )}{" "}
                      kcal
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setGetinfo(item);
                        setInfo(true);
                      }}
                    >
                      <Image
                        source={require("../assets/images/information.png")}
                        style={{ width: 15, height: 15 }}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPressIn={() => {
                        setFood(
                          food.filter((element) => item.id !== element.id)
                        );
                      }}
                    >
                      <Image
                        source={require("../assets/images/close.png")}
                        style={{ width: 15, height: 15 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Information info={info} setInfo={setInfo} getinfo={getinfo} />
            </>
          );
        }
      }}
    />
  );
};

export default RenderList;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#222222",
    flex: 1,
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
});
