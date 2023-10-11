import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BackgroundImage = ({ source, children }) => {
  return <ImageBackground source={source} resizeMode='cover' style={styles.image}>{children}</ImageBackground>;
};

export default BackgroundImage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});