import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import SongCard from "../components/SongCard";

const songs = [
  {
    id: "1",
    title: "Bir Derdim Var",
    artist: "Mor ve Ötesi",
    color: "#7B1E1E"
  },
  {
    id: "2",
    title: "Dönence",
    artist: "Barış Manço",
    color: "#123C69"
  },
  {
    id: "3",
    title: "Aşkın Olayım",
    artist: "Simge",
    color: "#2B2D42"
  },
  {
    id: "4",
    title: "Kufi",
    artist: "Duman",
    color: "#3A0CA3"
  },
  {
    id: "5",
    title: "Hayat Bayram Olsa",
    artist: "Barış Manço",
    color: "#1B4332"
  }
];
export default function HomeScreen({ onSongPress }) {
  return (
    <ScrollView
style={styles.page}
contentContainerStyle={styles.container}
showsVerticalScrollIndicator={false}
>
      <Text style={styles.greeting}>Good evening</Text>

      <View style={styles.quickGrid}>
        <View style={styles.quickCard}>
          <View style={styles.quickImage} />
          <Text style={styles.quickText}>Liked Songs</Text>
        </View>

        <View style={styles.quickCard}>
          <View style={styles.quickImageDark} />
          <Text style={styles.quickText}>Rock Mix</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Made For You</Text>

      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <SongCard song={item} onPress={() => onSongPress(item)} />
        )}
      />

      <View style={styles.miniPlayer}>
        <View style={styles.miniCover}>
          <Text style={styles.note}>♪</Text>
        </View>

        <View style={styles.miniInfo}>
          <Text style={styles.miniTitle}>Sonne</Text>
          <Text style={styles.miniArtist}>Rammstein</Text>
        </View>

        <Text style={styles.playIcon}>▶</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
  flex: 1,
  backgroundColor: "#121212"
},

container: {
  width: "100%",
  maxWidth: 520,
  alignSelf: "center",
  paddingTop: 55,
  paddingHorizontal: 18,
  paddingBottom: 30
},

  greeting: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20
  },

  quickGrid:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:30
},
quickCard:{
width:"48%",
height:70,
    backgroundColor: "#282828",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden"
  },

  quickImage: {
    width: 70,
    height: 70,
    backgroundColor: "#1DB954"
  },

  quickImageDark: {
    width: 70,
    height: 70,
    backgroundColor: "#444"
  },

  quickText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 12
  },

  sectionTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15
  },

  miniPlayer: {
    height: 58,
    backgroundColor: "#252525",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    marginBottom: 30
  },

  miniCover: {
    width: 42,
    height: 42,
    backgroundColor: "#1DB954",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },

  note: {
    color: "white",
    fontSize: 24
  },

  miniInfo: {
    flex: 1,
    marginLeft: 12
  },

  miniTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  },

  miniArtist: {
    color: "#aaa",
    fontSize: 13
  },

  playIcon: {
    color: "white",
    fontSize: 24,
    marginRight: 8
  }
});