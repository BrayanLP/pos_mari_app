import React from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import {  DataTable, Title, Paragraph, Avatar } from "react-native-paper";
const optionsPerPage = [2, 3, 4];
const dataList = [
  {
    icon: 'cart',
    title: 'Ventas del día',
    mount: 'S/200.00',
    bg: '#88E0EF'
  },
  {
    icon: 'basket-outline',
    title: 'Pro. Vendidos',
    mount: '30',
    bg: '#FF5151'
  },
  {
    icon: 'currency-usd',
    title: 'Ganancia',
    mount: 'S/30.00',
    bg: "#34BE82"
  }
];

export default function ReportDay() {
  
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const renderItem = ({ item }) => (
    <View style={[styles.card, {backgroundColor: item.bg}]} >
      <View style={styles.cardIcon}> 
        <Avatar.Icon size={40} icon={item.icon} style={{backgroundColor: item.bg}} />
      </View>
      <View style={styles.cardInfo}>
        <Title
          style={[
            styles.title,
            { textAlign: "center", marginBottom: 20 },
          ]}
        >
          {item.title}
        </Title>
        <Paragraph style={styles.content}>{item.mount}</Paragraph>
      </View>
    </View> 
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bg}>
        <FlatList horizontal={true} style={styles.cards} 
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        >
        </FlatList> 
        <View>
          <Title style={{ paddingHorizontal: 10 }}>Lista de productos:</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Producto</DataTable.Title>
              <DataTable.Title numeric>Precio</DataTable.Title> 
            </DataTable.Header>
            {new Array(20).fill({}).map(function (e, i) {
              return (
                <DataTable.Row key={i + 1}>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>S/159.00</DataTable.Cell>
                </DataTable.Row>
              );
            })}
            <DataTable.Pagination
              page={page}
              numberOfPages={100}
              onPageChange={(page) => setPage(page)}
            />
          </DataTable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#e5e5e5",
    flex: 1,
    paddingBottom: 10,
  },
  bg: {
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden",
    paddingBottom: 20,
  },
  cards: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
  },
  card: {
    backgroundColor: "#0081ca",
    flexDirection: "row",
    alignItems: "center",
    width: 190,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 4,
  },
  cardIcon: {
    width: 50,
    color: 'white' 
  },
  cardInfo: { 
    color: "white",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: 13, 
  },
  content: {
    color: "#fff", 
  },
  imgSize:{
    fontSize: 50,
    color: 'white', 
    padding: 0,
    minWidth: 30,
    textAlign: "center",
    margin: 0,
    flexDirection: "column",
  }
});
