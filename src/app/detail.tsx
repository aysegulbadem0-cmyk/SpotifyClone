import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import DetailScreen from "../../screens/DetailScreen";

export default function DetailPage() {
  const router = useRouter();
  const { title, artist } = useLocalSearchParams();

  return (
    <DetailScreen
      song={{
        title: String(title),
        artist: String(artist)
      }}
      goBack={() => router.back()}
    />
  );
}