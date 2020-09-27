import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, addGoal] = useState("");
    const courseGoalHandler = (enteredText) => {
        addGoal(enteredText);
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.modal}>
                <View style={styles.textInput}>
                    <TextInput
                        placeholder="Course goals"
                        onChangeText={courseGoalHandler}
                        value={enteredGoal}
                    ></TextInput>
                </View>

                <View style={styles.buttons}>
                    <View style={styles.inb}>
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                            color="red"
                            //or you can use props.onClick.bind(this, enteredGoal)
                        />
                    </View>
                    <View style={styles.inb}>
                        <Button
                            title="Add"
                            onPress={() => {
                                props.onClick(enteredGoal);
                                addGoal("");
                            }}
                            //or you can use props.onClick.bind(this, enteredGoal)
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-evenly",
    },
    modal: {
        flex: 1,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        width: "90%",
        margin: 20,
        marginStart: 10,
        marginEnd: 10,
        padding: 5,
        borderRadius: 5,
        borderColor: "grey",
        borderWidth: 1,
    },
    button: {
        elevation: 10,
        shadowColor: "#f9f9",
        margin: 5,
        flex: 1,
        justifyContent: "space-around",
    },
    inb: {
        overflow: "hidden",
        borderRadius: 5,
        margin: 10,
        flex: 1,
    },
});

export default GoalInput;
