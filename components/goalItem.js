import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
    return <Text style={styles.goal}>{props.title}</Text>;
};

const styles = StyleSheet.create({
    goal: {
        elevation: 2,
        padding: 10,
        fontSize: 15,
        borderRadius: 4,
        margin: 2,
    },
});

export default GoalItem;
