import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ song, goBack }) {
  const [playing, setPlaying] = useState(false);

  return (
    <View style={styles.page}>
      <View style={styles.container}>

        <Pressable style={styles.backButton} onPress={goBack}>
          <Text style={styles.backText}>‹</Text>
        </Pressable>

        <Text style={styles.header}>Now Playing</Text>

        <View style={[styles.album, { backgroundColor: song.color || "#1DB954" }]}>
          <Text style={styles.note}>♪</Text>
        </View>

        <View style={styles.songInfo}>
          <View>
            <Text style={styles.song}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <Text style={styles.heart}>♡</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        <View style={styles.timeRow}>
          <Text style={styles.time}>0:42</Text>
          <Text style={styles.time}>3:58</Text>
        </View>

        <View style={styles.controls}>
          <Text style={styles.controlIcon}>⏮</Text>

          <Pressable
            style={styles.playButton}
            onPress={() => setPlaying(!playing)}
          >
            <Text style={styles.playText}>{playing ? "Ⅱ" : "▶"}</Text>
          </Pressable>

          <Text style={styles.controlIcon}>⏭</Text>
        </View>

      </View>
    </View>
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
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 90
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center"
  },

  backText: {
    color: "white",
    fontSize: 34,
    marginTop: -4
  },

  header: {
    color: "#b3b3b3",
    fontSize: 14,
    textAlign: "center",
    marginTop: -40,
    marginBottom: 35,
    letterSpacing: 1
  },

  album: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35
  },

  note: {
    color: "white",
    fontSize: 120,
    fontWeight: "bold"
  },

  songInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  song: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold"
  },

  artist: {
    color: "#b3b3b3",
    fontSize: 17,
    marginTop: 6
  },

  heart: {
    color: "#1DB954",
    fontSize: 34
  },

  progressBar: {
    height: 5,
    backgroundColor: "#444",
    borderRadius: 5,
    marginTop: 35
  },

  progressFill: {
    width: "35%",
    height: 5,
    backgroundColor: "white",
    borderRadius: 5
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8
  },

  time: {
    color: "#999",
    fontSize: 12
  },

  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
    marginTop: 35
  },

  controlIcon: {
    color: "white",
    fontSize: 32
  },

  playButton: {
    width: 78,
    height: 78,
    backgroundColor: "#1DB954",
    borderRadius: 39,
    justifyContent: "center",
    alignItems: "center"
  },

  playText: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold"
  }
});