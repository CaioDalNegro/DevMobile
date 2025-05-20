// JS + JSX
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});

  const handlePlayPause = () => {
    if (status.isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };

//   return (
//     <View style={styles.container}>
//       <Video
//         ref={videoRef}
//         style={styles.video}
//         source={{
//           uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
//         }}
//         useNativeControls={false}
//         resizeMode="contain"
//         isLooping
//         onPlaybackStatusUpdate={status => setStatus(() => status)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
//         <Text style={styles.buttonText}>
//           {status.isPlaying ? 'Pause' : 'Play'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

 return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={
          require('./assets/videoplayback.mp4')}
        useNativeControls={false}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
        <Text style={styles.buttonText}>
          {status.isPlaying ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// CSS via StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: 300,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1e90ff',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
