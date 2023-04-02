import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

const InputFood = ({ modal, setModal, setFood, food, when }) => {

    const [namefood, setNamefood] = useState("")
    const [nameprotein, setNameProtein] = useState(0)
    const [namefat, setNamefat] = useState(0)
    const [namecarbs, setNamecarbs] = useState(0)
    const [namefiber, setNamefiber] = useState(0)
    const [namegrams, setNamegrams] = useState(0)


  const addFood = () => {
    setFood([
      ...food,
      {
        name: namefood,
        when: when.toLowerCase(),
        id: Math.round(Math.random() * 1000000000) + 50,
        protein: nameprotein,
        carbs: namecarbs,
        fiber: namefiber,
        fat: namefat,
        grams: namegrams,
      },
    ]);
    
  };

  return (
    <Modal animationType="slide" visible={modal} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalWrap}>
          <View style={styles.close}>
            <TouchableOpacity
              onPress={() => {
                setModal(false);
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
          </View>

          <View style={styles.adding}>
            <View style={styles.inputs}>
              <Text style={[styles.textColorWhite, { color: "#A7A7A7" }]}>
                Per 100g
              </Text>

              <View style={styles.input}>
                <TextInput
                  placeholderTextColor="white"
                  style={styles.textColorWhite}
                  onChangeText={setNamefood}
                  value={namefood}
                  placeholder="Name"
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.textColorWhite}
                  placeholderTextColor="white"
                  placeholder="Protein"
                  keyboardType="numeric"
                  value={nameprotein}
                  onChangeText={setNameProtein}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholderTextColor="white"
                  style={styles.textColorWhite}
                  placeholder="Fat"
                  keyboardType="numeric"
                  value={namefat}
                  onChangeText={setNamefat}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholderTextColor="white"
                  style={styles.textColorWhite}
                  placeholder="Carbs"
                  keyboardType="numeric"
                  value={namecarbs}
                  onChangeText={setNamecarbs}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholderTextColor="white"
                  style={styles.textColorWhite}
                  placeholder="Fiber"
                  keyboardType="numeric"
                  value={namefiber}
                  onChangeText={setNamefiber}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholderTextColor="white"
                  style={[styles.textColorWhite, { marginTop: 30 }]}
                  placeholder="Grams"
                  keyboardType="numeric"
                  value={namegrams}
                  onChangeText={setNamegrams}
                />
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

export default InputFood;

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
