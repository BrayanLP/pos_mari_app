import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Report from './report';
import Products from './products';
import ReportDay from './reportDay';
import TopProducts from './topProducts';

const Drawer = createDrawerNavigator();


function Layout (){

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        // backgroundColor: 'red',
        width: 240,
      },
      drawerActiveBackgroundColor:'#009DAE',
      drawerActiveTintColor: 'white',
      drawerLabelStyle:'red',
      // drawerItemStyle: 'white',
      drawerContentStyle: 'purple',
      drawerContentContainerStyle: 'green',
      drawerInactiveBackgroundColor: 'red'
    }}
    >

      <Drawer.Screen name="Ventas del día" component={ReportDay} />
      <Drawer.Screen name="Ventas" component={Report} />
      <Drawer.Screen name="Top Productos" component={TopProducts} />
      <Drawer.Screen name="Productos Escasos" component={Products} />
    </Drawer.Navigator>
  )
}

export default Layout;