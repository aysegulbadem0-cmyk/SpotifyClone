import React, { useState } from "react";
import DetailScreen from "../../screens/DetailScreen";
import HomeScreen from "../../screens/HomeScreen";

export default function Index() {
  const [selectedSong, setSelectedSong] = useState(null);

  if (selectedSong) {
    return (
      <DetailScreen
        song={selectedSong}
        goBack={() => setSelectedSong(null)}
      />
    );
  }

  return <HomeScreen onSongPress={setSelectedSong} />;
}