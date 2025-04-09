// Importa o React e o componente SafeAreaView da biblioteca React Native
import React from "react";
import { SafeAreaView } from "react-native";

// Importa o componente SectionListComponent de um caminho relativo
import SectionListComponent from "/components/SectionList.jsx";

// Componente principal do app
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Renderiza o componente SectionListComponent dentro da área segura */}
      <SectionListComponent />
    </SafeAreaView>
  );
}
