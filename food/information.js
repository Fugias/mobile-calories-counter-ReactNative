import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

const Information = ({ info, setInfo, getinfo }) => {


  return (
    <Modal animationType="fade" visible={info} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalWrap}>
          <View style={styles.close}>
            <TouchableOpacity
              onPress={() => {
                setInfo(false);
              }}
            >
              <Image
                style={{
                  height: 25,
                  width: 25,
                  margin: 15,
                  transform: [{ rotate: "180deg" }],
                }}
                source={require("../assets/images/whitearrow.png")}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                color: "white",
                marginLeft: 20,
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
              }}
            >
              {getinfo.name}
            </Text>
          </View>

          <View style={styles.adding}>
            <View style={styles.inputs}>
              <View style={styles.input}>
                <Text style={styles.textColorWhite}>Protein: {Math.round(getinfo.protein / 100 * getinfo.grams)}</Text>
              </View>

              <View style={styles.input}>
                <Text style={styles.textColorWhite}>Fat: {Math.round(getinfo.fat / 100 * getinfo.grams)}</Text>
              </View>

              <View style={styles.input}>
                <Text style={styles.textColorWhite}>Carbs: {Math.round(getinfo.carbs / 100 * getinfo.grams)}</Text>
              </View>

              <View style={styles.input}>
                <Text style={styles.textColorWhite}>Fiber: {Math.round(getinfo.fiber / 100 * getinfo.grams)}</Text>
              </View>
            </View>
            <View style={styles.add}>
              <TouchableOpacity
                onPress={() => {
                  addFood();
                  setModal(false);
                }}
              >
                <Image
                  style={{ height: 35, width: 35 }}
                  source={require("../assets/images/plus.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Information;

const styles = StyleSheet.create({
  textColorWhite: {
    marginLeft: 5,
    color: "white",
    fontSize: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
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
    flexDirection: "row",
    alignItems: "center",
  },
  adding: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputs: {
    width: "95%",
    gap: 5,
  },
  input: {
    minHeight: 40,
    justifyContent: "flex-end",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2C",
  },
  add: {
    width: "95%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
