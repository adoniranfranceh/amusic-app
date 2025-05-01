import { StyleSheet, Image, Platform, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/needle.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },

});
