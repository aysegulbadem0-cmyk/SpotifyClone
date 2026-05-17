import React from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";

export default function SongCard({ song, onPress }) {
  return (

<Pressable
style={styles.card}
onPress={onPress}
>

<View style={[styles.cover,{backgroundColor:song.color}]}>

  <View style={styles.coverOverlay}/>

  <Text style={styles.coverTitle}>
    {song.artist.split(" ")[0].charAt(0)}
  </Text>

  <Text style={styles.albumName}>
    {song.artist}
  </Text>

</View>

<View style={styles.info}>

<Text style={styles.title}>
{song.title}
</Text>

<Text style={styles.artist}>
{song.artist}
</Text>

<Text style={styles.subtitle}>
Türkçe Rock Mix
</Text>

</View>

<View style={styles.rightSide}>

<Text style={styles.more}>
•••
</Text>

<View style={styles.playCircle}>
<Text style={styles.playIcon}>▶</Text>
</View>

</View>

</Pressable>

  );
}

const styles = StyleSheet.create({
cover:{
width:80,
height:80,
borderRadius:12,
justifyContent:"flex-end",
padding:10,
overflow:"hidden"
},

coverOverlay:{
position:"absolute",
width:120,
height:120,
backgroundColor:"rgba(255,255,255,0.10)",
borderRadius:60,
top:-50,
right:-40
},

coverTitle:{
color:"white",
fontSize:34,
fontWeight:"bold"
},

albumName:{
 color:"rgba(255,255,255,0.8)",
 fontSize:9,
 marginTop:2
},

card:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#181818",
padding:12,
borderRadius:16,
marginBottom:14,
height:92,
borderWidth:1,
borderColor:"#222"
},

cover:{
width:80,
height:80,
borderRadius:12,
justifyContent:"flex-end",
padding:10,
overflow:"hidden"
},

coverOverlay:{
position:"absolute",
width:120,
height:120,
backgroundColor:"rgba(255,255,255,0.10)",
borderRadius:60,
top:-50,
right:-40
},

coverTitle:{
color:"white",
fontSize:28,
fontWeight:"bold"
},

albumName:{
color:"rgba(255,255,255,0.8)",
fontSize:10
},
info:{
 flex:1,
 marginLeft:14
},

title:{
fontSize:18,
fontWeight:"bold",
color:"white"
},

artist:{
fontSize:14,
color:"#cfcfcf",
marginTop:4
},

subtitle:{
fontSize:12,
color:"#1DB954",
marginTop:6,
fontWeight:"600"
},

more:{
color:"#999",
fontSize:24
},
more:{
color:"#999",
fontSize:24
},

rightSide:{
alignItems:"center",
gap:8
},

playCircle:{
width:34,
height:34,
backgroundColor:"#1DB954",
borderRadius:17,
justifyContent:"center",
alignItems:"center"
},

playIcon:{
color:"black",
fontSize:14,
fontWeight:"bold",
marginLeft:2
}

});