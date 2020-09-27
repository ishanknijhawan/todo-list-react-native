import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [enteredGoal, addGoal] = useState("");
    const [goalsList, setGoalsList] = useState([]);
    const courseGoalHandler = (enteredText) => {
        addGoal(enteredText);
    };
    const addGoalHandler = () => {
        setGoalsList((currentGoals) => [...currentGoals, enteredGoal]);
    };
    //flexbox tips
    //justify content is for the main axis
    //align items is for the cross axis
    return (
        <View style={{ padding: 20 }}>
            <View style={styles.main}>
                <View style={styles.textInput}>
                    <TextInput
                        placeholder="Course goals"
                        onChangeText={courseGoalHandler}
                        value={enteredGoal}
                    ></TextInput>
                </View>
                <View style={styles.button}>
                    <Button title="Add" onPress={addGoalHandler} />
                </View>
            </View>
            <View>
                {goalsList.map((element) => (
                    <Text>{element}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    textInput: {
        width: "85%",
        margin: 20,
        marginStart: 10,
        marginEnd: 10,
        padding: 5,
        borderRadius: 5,
        borderColor: "grey",
        borderWidth: 1,
    },
    button: { elevation: 10, shadowColor: "#f9f9" },
});
