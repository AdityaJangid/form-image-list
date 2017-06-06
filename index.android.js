{/*
  *
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */}

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	Button,
  View,
} from 'react-native';

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

import ImageSlider from 'react-native-image-slider';


export default class SliderText extends Component {
render() {
    return (
	   

<View style={{ flex:1, justifyContent:'center', backgroundColor:'rgba(43, 48, 62, 0.57)'}}>
    <ImageSlider images={[

        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any'
    ]}/>

<ImageSlider images={[

        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any'
    ]}/>
<ImageSlider images={[

        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any'
    ]}/>
   </View> 






    );
}
	
}






class form_image_list extends Component {


  render() {
    return (
      <View>
	<Text style={styles.welcome}>
		  welcome to react native!
        </Text>
	<Form>
	<InputField ref='first_name'  placeholder='First Name'/>
        <InputField ref='last_name' placeholder='Last Name'/>
	<InputField ref='Address' placeholder='Address'/>
	 <Button title="Submit" color="#91D9D6"/>
	</Form>
      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('form_image_list', () => SliderText);
