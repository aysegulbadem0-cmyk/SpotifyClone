import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import SongCard from "../components/SongCard";

const songs = [
  { id:"1", title:"Bir Derdim Var", artist:"Mor ve Ötesi", color:"#7B1E1E" },
  { id:"2", title:"Dönence", artist:"Barış Manço", color:"#123C69" },
  { id:"3", title:"Aşkın Olayım", artist:"Simge", color:"#2B2D42" },
  { id:"4", title:"Kufi", artist:"Duman", color:"#3A0CA3" },
  { id:"5", title:"Hayat Bayram Olsa", artist:"Barış Manço", color:"#1B4332" },
  { id:"6", title:"Cambaz", artist:"Mor ve Ötesi", color:"#5A189A" },
  { id:"7", title:"Belki Alışman Lazım", artist:"Dolu Kadehi Ters Tut", color:"#264653" },
  { id:"8", title:"Seni Kendime Sakladım", artist:"Duman", color:"#8B0000" },
  { id:"9", title:"Bu Aşk Fazla Sana", artist:"Şebnem Ferah", color:"#3D405B" },
  { id:"10", title:"Gönül Sayfam", artist:"Manga", color:"#1D3557" },
  { id:"11", title:"Sar Başa", artist:"Gripin", color:"#6A040F" },
  { id:"12", title:"Pembe Mezarlık", artist:"Model", color:"#4361EE" },
];

export default function HomeScreen({ onSongPress }) {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.greeting}>İyi akşamlar</Text>

      <View style={styles.quickGrid}>
        <View style={styles.quickCard}>
          <View style={styles.quickImage} />
          <Text style={styles.quickText}>Beğenilen Şarkılar</Text>
        </View>

        <View style={styles.quickCard}>
          <View style={styles.quickImageDark} />
          <Text style={styles.quickText}>Türkçe Rock Mix</Text>
        </View>
      </View>

      {activeTab === "home" && (
        <>
          <Text style={styles.sectionTitle}>Senin İçin</Text>

          <FlatList
            data={songs}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <SongCard
                song={item}
                onPress={() => onSongPress(item)}
              />
            )}
          />
        </>
      )}

      {activeTab === "search" && (
        <View style={styles.fakeScreen}>
          <Text style={styles.fakeTitle}>Müzik Ara</Text>
          <Text style={styles.fakeDescription}>
            Şarkı, sanatçı veya albüm ara.
          </Text>
        </View>
      )}

      {activeTab === "library" && (
        <View style={styles.fakeScreen}>
          <Text style={styles.fakeTitle}>Kitaplığın</Text>
          <Text style={styles.fakeDescription}>
            Kaydedilen şarkılar, çalma listeleri ve albümler.
          </Text>
        </View>
      )}

      <View style={styles.miniPlayer}>
        <View style={styles.miniCover}>
          <Text style={styles.note}>♪</Text>
        </View>

        <View style={styles.miniInfo}>
          <Text style={styles.miniTitle}>Bir Derdim Var</Text>
          <Text style={styles.miniArtist}>Mor ve Ötesi</Text>
        </View>

        <Text style={styles.playIcon}>▶</Text>
      </View>

      <View style={styles.bottomNav}>
        <Pressable
          style={styles.navItem}
          onPress={() => setActiveTab("home")}
        >
          <Text style={styles.navIcon}>⌂</Text>
          <Text
            style={
              activeTab === "home"
                ? styles.navTextActive
                : styles.navText
            }
          >
            Ana Sayfa
          </Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => setActiveTab("search")}
        >
          <Text style={styles.navIcon}>⌕</Text>
          <Text
            style={
              activeTab === "search"
                ? styles.navTextActive
                : styles.navText
            }
          >
            Ara
          </Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => setActiveTab("library")}
        >
          <Text style={styles.navIcon}>▦</Text>
          <Text
            style={
              activeTab === "library"
                ? styles.navTextActive
                : styles.navText
            }
          >
            Kitaplığın
          </Text>
        </Pressable>
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
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    marginBottom: 22
  },

  quickGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32
  },

  quickCard: {
    width: "48%",
    height: 72,
    backgroundColor: "#282828",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden"
  },

  quickImage: {
    width: 70,
    height: 72,
    backgroundColor: "#1DB954"
  },

  quickImageDark: {
    width: 70,
    height: 72,
    backgroundColor: "#444"
  },

  quickText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 12,
    flex: 1
  },

  sectionTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16
  },

  fakeScreen: {
    backgroundColor: "#181818",
    padding: 22,
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#252525"
  },

  fakeTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10
  },

  fakeDescription: {
    color: "#b3b3b3",
    fontSize: 15,
    lineHeight: 22
  },

  miniPlayer: {
    height: 58,
    backgroundColor: "#252525",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    marginTop: 18,
    marginBottom: 14
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
    fontSize: 22
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
  },

  bottomNav: {
    height: 70,
    backgroundColor: "#000",
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20
  },

  navItem: {
    alignItems: "center"
  },

  navIcon: {
    color: "white",
    fontSize: 22
  },

  navTextActive: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 4
  },

  navText: {
    color: "#999",
    fontSize: 12,
    marginTop: 4
  }
});