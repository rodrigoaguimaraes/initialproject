import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ClientCard from './components/ClientCard';

const initialProducts = [
  { id: '1', dayReference: '01', quantity: 5, paid: false },
  { id: '2', dayReference: '02', quantity: 3, paid: false },
  // Adicione mais produtos conforme necessário
];

const clients = [
  { id: '1', name: 'Cliente A', contact: '123-456-7890' },
  { id: '2', name: 'Cliente B', contact: '987-654-3210' },
  // Adicione mais clientes conforme necessário
];

// Função para calcular o valor total
const calculateTotal = (products) => {
  return products.reduce((total, product) => total + product.quantity * 10, 0);
};

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const totalValue = calculateTotal(products);

  return (
    <View style={styles.container}>
      <ClientCard client={clients[0]} />
      {/* Cabeçalho da tabela */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Dia</Text>
        <Text style={styles.headerText}>Quantidade</Text>
        <Text style={styles.headerText}>Preço</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemDayReference}>{item.dayReference}</Text>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
            <Text style={styles.itemPrice}>R$ {(item.quantity * 10).toFixed(2)}</Text>
          </View>
        )}
      />
      <View style={styles.totalCard}>
        <Text style={styles.totalText}>
          Valor Total: R$ {totalValue.toFixed(2)} - Pago: {products.every(product => product.paid) ? 'Sim' : 'Não'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemDayReference: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
  },
  itemQuantity: {
    fontSize: 16,
    color: '#666',
  },
  totalCard: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProductList;






