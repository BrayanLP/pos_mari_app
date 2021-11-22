import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import LoginComponent from './login';
import routes from '../utils/router'; 
import Layout from './layout';
const Stack = createStackNavigator();

function Root ({}) { 
    return ( 
      <>
        <Stack.Navigator> 
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
export default connect(null, null)(Root)