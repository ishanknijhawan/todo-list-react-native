import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
    Button,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";

export default function App() {
    const [goalsList, setGoalsList] = useState([]);
    const [isAdd, setIsAdd] = useState(false);

    const addGoalHandler = (goalTitle) => {
        if (goalTitle === "") {
            return;
        } else {
            setGoalsList((currentGoals) => {
                return [
                    ...currentGoals,
                    //convert key to string because FlatList expects a 'String' key
                    { key: Math.random().toString(), value: goalTitle },
                ];
            });
            setIsAdd(false);
        }
        //empty the text input after adding goal
        //addGoal("");
    };

    const removeGoalHandler = (goalId) => {
        setGoalsList((currentGoals) => {
            return currentGoals.filter((goal) => goal.key !== goalId);
        });
    };
    //flexbox tips
    //justify content is for the main axis
    //align items is for the cross axis
    return (
        <View style={styles.screen}>
            <View style={styles.button}>
                <Button
                    title="Add Goal"
                    onPress={() => setIsAdd(true)}
                ></Button>
            </View>
            <GoalInput
                onClick={addGoalHandler}
                visible={isAdd}
                onCancel={() => setIsAdd(false)}
            />
            {/* <ScrollView>
                {goalsList.map((element) => (
                    <Text key={element} style={styles.goal}>
                        {element}
                    </Text>
                ))}
            </ScrollView> */}
            {/* because scrollviews can be very inefficient for large lists 
            below is the FlatList, which is like RecyclerView from android */}
            <FlatList
                data={goalsList}
                renderItem={(itemData) => (
                    <GoalItem
                        title={itemData.item.value}
                        id={itemData.item.key}
                        onDelete={removeGoalHandler}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { padding: 20 },
    button: { margin: 20 },
});
