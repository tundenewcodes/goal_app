import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View, Image } from "react-native";

const GoalInput = ({ addGoalHandler, showModal, closeModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState(" ");
  const goalChangeHandler = (goal) => {
    setEnteredGoalText(goal);
  };
  const addGoal = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputView}>
        <Image  source={require("../assets/images/kemal.jpg")}   style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="add new goal"
          onChangeText={goalChangeHandler}
          value={enteredGoalText}
        />
        <View style={styles.btnView}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={closeModal} color="#f31282"/>
          </View>
          <View style={styles.btn}>
            <Button title="Add goal" onPress={addGoal} color="#5e0acc"  />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputView: {
    padding:16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    flex: 1,
    backgroundColor:"#311b6b"
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    color:"#120483",
    padding: 16,
    backgroundColor:"#e4d0ff", borderRadius:6
  },
  btnView: {
    flexDirection: "row",
    marginTop:16
  },
  btn: {
    marginHorizontal: 8,
    width: 100,
  },
  image:{
    width:100, height:100, margin:20
  }
});
