import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalisVisible, setModalIsVisible] = useState(false);
  const closeGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredText) => {
    setCourseGoals((oldCourseGoals) => [
      ...oldCourseGoals,
      { goal: enteredText, id: Math.random().toString() },
    ]);
    closeGoalHandler()
  };
  const deleteItemHandler = (id) => {
    setCourseGoals((oldCourseGoals) =>
      oldCourseGoals.filter((goal) => goal.id !== id)
    );
  };

  const startGoalHandler = () => {
    setModalIsVisible(true);
  };
 
  return (
    <>
    <StatusBar style="light" />
     <View style={styles.appContainer}>
      <Button color="#5e0acc" onPress={startGoalHandler} title="Add New Goal" />

      <GoalInput
        addGoalHandler={addGoalHandler}
        showModal={modalisVisible}
        closeModal={closeGoalHandler}
      />

      <GoalItem
        courseGoals={courseGoals}
        deleteItem={deleteItemHandler}
        id={courseGoals.id}
      />
    </View>
    </>
   
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:"#1e085a"
  },
});
