import { View, Dimensions } from "react-native";

export default () => {

  return (
    <View style={{
      width: 1,
      height: 100,
      // height: Dimensions.get('window').height,
      backgroundColor: 'white',
      position: 'relative',
      left: 0,
      top: 6,
    }} />
  );

}