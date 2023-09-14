import { View, Dimensions } from "react-native";

export default () => {

  return (
    <View style={{
      width: 1,
      height: Dimensions.get('window').height,
      backgroundColor: 'white',
      position: 'absolute',
      left: -17,
      top: 6,
    }} />
  );

}