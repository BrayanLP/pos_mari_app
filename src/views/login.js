import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from 'react-native-paper'; 
import { TextInput, Title, Button, Snackbar  } from "react-native-paper";
import routes from "utils/router";

export default function LoginComponent({navigation}){
  const [text, setText] = React.useState('');

  const { colors } = useTheme(); 
  const [visible, setVisible] = React.useState(false); 
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);


  return (
   
    <View style={[styles.container, {backgroundColor: colors.background}]}>
    <StatusBar style="auto" /> 
    <View style={styles.wrapper}>
      <Title style={{textAlign: 'center', marginBottom: 20}}>Bodega Mari </Title>
      <View style={{paddingTop: 20}}>
        <TextInput
          mode="outlined"
          label="Usuario o Correo" 
          placeholder=""
        />
      </View>
      <View style={{paddingTop: 20}}>
        <TextInput
          mode="outlined"
          label="Contraseña"
          secureTextEntry
          placeholder=""
          right={<TextInput.Icon name="eye" />}

        />
      </View>
      <View style={{paddingTop: 30}}>
        <Button 
          mode="contained"
          onPress={() => {
            onToggleSnackBar(),
            navigation.navigate(routes.report);
          }
        }
        >
          Ingresar
        </Button>
      </View>
    </View>
    <Snackbar
      visible={visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: 'Cerrar',
        onPress: () => { 
        },
      }}>
      usuario ó contraseña incorrectos
    </Snackbar>
  </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  'red',
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
});
