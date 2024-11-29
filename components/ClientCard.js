// components/ClientCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClientCard = ({ client }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.clientName}>{client.name}</Text>
      <Text style={styles.clientContact}>{client.contact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
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
  clientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  clientContact: {
    fontSize: 16,
    color: '#666',
  },
});

export default ClientCard;