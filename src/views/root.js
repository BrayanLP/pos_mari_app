import React, { Component,useEffect,useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  SafeAreaView,
} from 'react-native'; 
// import styled from 'styled-components'; 
import { createStackNavigator } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';  
import { connect } from 'react-redux'
import LoginComponent from './login';
import routes from '../utils/router';
import Report from './report';
import Layout from './layout';



const Stack = createStackNavigator();
function Root ({}) { 
  useEffect(() =>{ 
    
  },  [])
    return ( 
      <>
        <Stack.Navigator>
          {/* <Stack.Screen
            name={routes.start}
            component={Start}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            options={{ headerShown: false }}
            name={routes.login}
            component={LoginComponent}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={routes.report}
            component={Layout}
          />
           
        </Stack.Navigator> 
        </>
    );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
});

const mapDispatch = (dispatch) => ({
})

export default connect(null, mapDispatch)(Root)