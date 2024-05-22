import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Pecas } from './Images';

export const Dados = () => {
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = (peca) => {
    setDescricao(Pecas[peca].desc);
    setNome(Pecas[peca].imgName);
    setModalVisible(true);
  };

  const pecasArray = Object.keys(Pecas).map((peca) => ({
    nome: peca,
    uri: Pecas[peca].uri,
  }));

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titulo}>{nome}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.titulo}>Descrição da Peça:</Text>
      <View style={styles.imagensContainer}>
        {pecasArray.map((peca, index) => (
          <TouchableOpacity key={index} onPress={() => handleImageClick(peca.nome)}>
            <Image style={styles.imagem} source={peca.uri} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  imagensContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    margin: 10,
  },centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    position: 'absolute', 
    top: 20,
    right: 20,
    backgroundColor: '#2196F3', 
    padding: (5, 9), 
  },
});
