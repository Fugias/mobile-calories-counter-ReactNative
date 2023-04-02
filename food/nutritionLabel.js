import { Text, StyleSheet, View, Image } from "react-native";

const NutritionLabel = ({ food }) => {
  return (
    <View style={{ alignItems: "center", paddingTop: 20, paddingBottom: 20 }}>
      <View style={styles.wrap}>
        <View style={styles.nutrition}>
          <Image
            style={styles.images}
            source={require(`../assets/images/protein.png`)}
          />
          <View>
            <Text style={[styles.textGray, { fontSize: 20 }]}>Protein</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={[styles.textWhite, { fontSize: 18 }]}>
                {food.reduce(
                  (result, item) =>
                    result + Math.round((item.protein / 100) * item.grams),
                  0
                )}
              </Text>
              <Text style={styles.textGray}>/170 g</Text>
            </View>
          </View>
        </View>

        <View style={styles.nutrition}>
          <Image
            style={styles.images}
            source={require(`../assets/images/fiber.png`)}
          />
          <View>
            <Text style={[styles.textGray, { fontSize: 20 }]}>Fiber</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={[styles.textWhite, { fontSize: 18 }]}>
                {food.reduce(
                  (result, item) =>
                    result + Math.round((item.fiber / 100) * item.grams),
                  0
                )}
              </Text>
              <Text style={styles.textGray}>/50 g</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.wrap}>
        <View style={styles.nutrition}>
          <Image
            style={styles.images}
            source={require(`../assets/images/fat.png`)}
          />
          <View>
            <Text style={[styles.textGray, { fontSize: 20 }]}>Fat</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={[styles.textWhite, { fontSize: 18 }]}>
                {food.reduce(
                  (result, item) =>
                    result + Math.round((item.fat / 100) * item.grams),
                  0
                )}
              </Text>
              <Text style={styles.textGray}>/100 g</Text>
            </View>
          </View>
        </View>

        <View style={styles.nutrition}>
          <Image
            style={styles.images}
            source={require(`../assets/images/carbs.png`)}
          />
          <View>
            <Text style={[styles.textGray, { fontSize: 20 }]}>Carbs</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={[styles.textWhite, { fontSize: 18 }]}>
                {food.reduce(
                  (result, item) =>
                    result + Math.round((item.carbs / 100) * item.grams),
                  0
                )}
              </Text>
              <Text style={styles.textGray}>/200 g</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.wrap}>
        <View style={styles.nutrition}>
          <Image
            style={styles.images}
            source={require(`../assets/images/salt.png`)}
          />
          <View style={{ gap: 3 }}>
            <Text style={[styles.textGray, { fontSize: 20 }]}>Salt</Text>
            <View style={styles.premium}>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Premium
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.nutrition}>
          <Image
            style={styles.images}
            source={require(`../assets/images/sugar.png`)}
          />
          <View style={{ gap: 3 }}>
            <Text style={[styles.textGray, { fontSize: 20 }]}>Sugar</Text>
            <View style={styles.premium}>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Premium
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NutritionLabel;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#2C2C2C",
    width: "95%",
    height: 100,
  },
  nutrition: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 130,
  },
  images: {
    width: 60,
    height: 60,
  },
  textGray: {
    color: "#A7A7A7",
  },
  textWhite: {
    color: "white",
  },
  premium: {
    width: 90,
    height: 24,
    backgroundColor: "green",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
