import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";

export default function App() {
  // ACTIONS
  const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  // REDUCER
  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
    }
  };
  // STORE
  let store = createStore(counter);

  // DISPATCH
  store.dispatch(increment());
  store.dispatch(decrement());
  store.dispatch(decrement());
  // counter state result: -1

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
