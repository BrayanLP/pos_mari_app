import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
const optionsPerPage = [2, 3, 4];

function Products() {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bg}>
        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Producto</DataTable.Title>
              <DataTable.Title numeric>Cantidad</DataTable.Title>
            </DataTable.Header>

            {new Array(20).fill({}).map(function (e, i) {
              return (
                <DataTable.Row key={i + 1}>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>2</DataTable.Cell>
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
});

export default Products;
