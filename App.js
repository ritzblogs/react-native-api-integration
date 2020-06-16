import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar, withTheme } from "react-native-elements";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class HomeScreen extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,

        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {

    const mylist = []

    for (let i = 0; i < this.state.data.length; i++) {
      mylist.push(this.state.data[i].name + " \n \n ")
    }

    return (
      <View style={styles.container}>
        <Text style={{ width: "90%", textAlign: "center", marginTop: "8%", color: "white", fontSize: 20 }}>Fetched Data</Text>
<View style={{borderBottomColor: 'lightgrey', width:"90%",
                borderBottomWidth: 0.5,
                marginLeft: 5,
                paddingLeft:5,
                paddingRight:5,
                paddingBottom:10,
                marginBottom:"8%",
                marginRight: 5}}></View>
        <Text style={{ width: "90%", margin: 10, color: "white", fontSize: 17 }}>{mylist}</Text>
      </View>
    );
  }
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={HomeScreen}

          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#282C34',
  },
});