import React, { useState } from "react";
import { View, Text, TextInput, SectionList, Image, StyleSheet} from "react-native";

const contatos = [
  {
    title: "Conversas",
    data: [
      {
        id: "1",
        nome: "João Pereira",
        mensagem: "ei",
        imagem: require("../assets/fulano.png"),
      },
      {
        id: "2",
        nome: "Maria Teixeira",
        mensagem: "Saindo do cemitério",
        imagem: require("../assets/fulano.png"),
      },
    ],
  },
  {
    title: "Comunidades",
    data: [
      {
        id: "3",
        nome: "Grupo de amigos que existem",
        mensagem: "Fulano saiu do grupo",
        imagem: require("../assets/fulano.png"),
      },
      {
        id: "4",
        nome: "G20",
        mensagem: "Gente voces não vão acreditar, o Davi...",
        imagem: require("../assets/fulano.png"),
      },
    ],
  },
];

export default function SectionListComponent() {
  const [busca, setBusca] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        placeholderTextColor="#aaa"
        value={busca}
        onChangeText={setBusca}
      />

      <SectionList
        sections={contatos.map((secao) => ({
          title: secao.title,
          data: secao.data.filter((item) =>
            item.nome.toLowerCase().includes(busca.toLowerCase())
          ),
        }))}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.imagem} style={styles.image} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.mensagem}>{item.mensagem}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEFF1", // fundo claro e suave
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  input: {
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    color: "#333333",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#B0BEC5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // para Android
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#37474F",
    backgroundColor: "#CFD8DC",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 5,
    marginTop: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ECEFF1",
    borderRadius: 8,
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#B0BEC5",
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
    color: "#263238",
  },
  mensagem: {
    fontSize: 14,
    color: "#607D8B",
  },
});
