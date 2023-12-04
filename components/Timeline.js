import { View, Dimensions } from "react-native";

export default () => {

  return (
    <View style={{
      width: 1,
      // height: 100,
      // height: Dimensions.get('window').height,
      backgroundColor: 'white',
      position: 'relative',
      marginHorizontal: 10,
      left: -2,
      top: 6,
    }} />
  );

}