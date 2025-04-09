// Importa os hooks e componentes necessários do React e React Native
import React, { useState } from "react";
import { View, Text, TextInput, SectionList, Image, StyleSheet } from "react-native";

// Lista de contatos divididos em seções (Conversas e Comunidades)
const contatos = [
  {
    title: "Conversas", // Título da primeira seção
    data: [
      {
        id: "1",
        nome: "Grazi",
        mensagem: "Vamos pra aula de pintura",
        imagem: require("../assets/fulano.png"), // Imagem de avatar
      },
      {
        id: "2",
        nome: "Joana",
        mensagem: "Me empresta tua borracha",
        imagem: require("../assets/fulano.png"),
      },
    ],
  },
  {
    title: "Comunidades", // Título da segunda seção
    data: [
      {
        id: "3",
        nome: "Encrenquinhas",
        mensagem: "Yasmim saiu do grupo",
        imagem: require("../assets/fulano.png"),
      },
      {
        id: "4",
        nome: "Redes de Computadores",
        mensagem: "~Evandro J R Silva adicionou...",
        imagem: require("../assets/fulano.png"),
      },
    ],
  },
];

// Componente principal da lista com filtro de busca
export default function SectionListComponent() {
  // Estado para armazenar o texto digitado no campo de busca
  const [busca, setBusca] = useState("");

  return (
    <View style={styles.container}>
      {/* Campo de busca */}
      <TextInput
        style={styles.input}
        placeholder="Pesquisar" // Texto exibido quando o campo está vazio
        placeholderTextColor="#aaa" // Cor do placeholder
        value={busca} // Valor atual do campo
        onChangeText={setBusca} // Atualiza o estado 'busca' ao digitar
      />

      {/* Lista agrupada por seções */}
      <SectionList
        // Filtra os itens de cada seção de acordo com o texto digitado
        sections={contatos.map((secao) => ({
          title: secao.title,
          data: secao.data.filter((item) =>
            item.nome.toLowerCase().includes(busca.toLowerCase())
          ),
        }))}
        keyExtractor={(item) => item.id} // Chave única de cada item

        // Renderiza o título da seção
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}

        // Renderiza cada item da lista
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* Imagem do contato */}
            <Image source={item.imagem} style={styles.image} />
            <View>
              {/* Nome do contato */}
              <Text style={styles.nome}>{item.nome}</Text>
              {/* Última mensagem */}
              <Text style={styles.mensagem}>{item.mensagem}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

// Estilos utilizados no componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEFF1", // Fundo cinza claro
    paddingTop: 50, // Espaçamento do topo
    paddingHorizontal: 15, // Espaçamento lateral
  },
  input: {
    height: 45,
    backgroundColor: "#FFFFFF", // Fundo branco
    borderRadius: 12, // Bordas arredondadas
    paddingHorizontal: 15, // Espaçamento interno horizontal
    color: "#333333", // Cor do texto
    marginBottom: 15, // Espaço abaixo do input
    borderWidth: 1,
    borderColor: "#B0BEC5",
    shadowColor: "#000", // Sombra (iOS)
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Sombra (Android)
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#37474F", // Cor escura do texto do título
    backgroundColor: "#CFD8DC", // Fundo cinza claro
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 5,
    marginTop: 10,
  },
  item: {
    flexDirection: "row", // Alinha os itens em linha
    alignItems: "center", // Alinha verticalmente ao centro
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ECEFF1", // Linha de separação inferior
    borderRadius: 8,
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // Deixa a imagem circular
    marginRight: 12, // Espaço à direita da imagem
    borderWidth: 1,
    borderColor: "#B0BEC5", // Borda levemente destacada
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
    color: "#263238", // Cor escura para o nome
  },
  mensagem: {
    fontSize: 14,
    color: "#607D8B", // Cor mais suave para a mensagem
  },
});
