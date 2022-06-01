  import React from 'react';
import { StyleSheet, Text, View , Button,Image } from 'react-native';
import Task from './components/Task';
import * as ImagePicker from 'expo-image-picker';
import {launchCamera , launchImageLibrary} from 'react-native-image-picker';


// const [imageUri, setimageUri]=useState('');
const opencamera=()=>{
  const options={
    storageOption:{
      path:'images',
      mediatype:'photo',
    },
    includeBase64:true,
  };
  launchCamera(options,response =>{
    console.log('Response =',response);
    if(response.didCancel){
      console.log('user cancelled image picker');

    }
    else if(response.error) {
      console.log('ImagePicker Error:',response.error);
    }
    else if(response.customButton){
      console.log('user tapped custom button:',response.custombutton);
    }
    else {
      const source={uri:'data:image/jpeg;base64'+respone.base64};
    }
  });
};

export default function App() {
  return (

    
    <View style ={{justifyContent:'center' , alignItems:'center' , alignSelf:'center' , flex:1}}>
   <Button title={'Open Camera'} onPress={()=>{
     opencamera()
   }}/>
   {/* <Image source={imageUri} style ={{height:100 , width:100 , borderRadius:100, borderWidth2, borderColor:'black'}}
   /> */}
    </View>
  
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30,

  },
});
