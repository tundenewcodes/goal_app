import React from "react";
import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ courseGoals, deleteItem, id }) => {
  console.log(courseGoals);
  return (
    <View style={styles.goalContainer}>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.goalItemsView}>
            <Pressable
              onPress={deleteItem.bind(this, itemData.item.id)}
              android_ripple={{ color: "#dddddd" }}
              style={({pressed}) => pressed && styles.pressedItem }
            >
              <Text style={styles.goalText}>{itemData.item.goal}</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalContainer: {
    flex: 5,
  },
  goalItemsView: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  }, pressedItem:{
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
