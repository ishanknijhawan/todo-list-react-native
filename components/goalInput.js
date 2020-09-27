import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, addGoal] = useState("");
    const courseGoalHandler = (enteredText) => {
        addGoal(enteredText);
    };

    return (
        <View style={styles.main}>
            <View style={styles.textInput}>
                <TextInput
                    placeholder="Course goals"
                    onChangeText={courseGoalHandler}
                    value={enteredGoal}
                ></TextInput>
            </View>
            <View style={styles.button}>
                <Button
                    title="Add"
                    onPress={() => props.onClick(enteredGoal)}
                    //or you can use props.onClick.bind(this, enteredGoal)
                />
            </View>
        </View>
    );
};

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

export default GoalInput;
