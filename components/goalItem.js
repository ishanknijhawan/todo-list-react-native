import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
    return (
        //TouchableHighlight
        //TouchableNativeFeedback for that ripple effect (only works on Android)
        //TouchableWithoutFeedback (as the name suggests)
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <Text style={styles.goal}>{props.title}</Text>
        </TouchableOpacity>
    );
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
