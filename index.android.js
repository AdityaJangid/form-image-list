{/*
  *
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */}
import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from 'form_image_list/styles/SliderEntry.style';
import SliderEntry from 'form_image_list/components/SliderEntry';
import styles from 'form_image_list/styles/index.style';
import { ENTRIES1, ENTRIES2 } from 'form_image_list/static/entries';


import {
  AppRegistry,
  StyleSheet,
	Button,
} from 'react-native';

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

import ImageSlider from 'react-native-image-slider';



export default class example extends Component {

    getSlides (entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <SliderEntry
		  key={`carousel-entry-${index}` }
                  even={(index + 1) % 2 === 0}
                  {...entry}
                />
            );
        });
    }

    get example1 () {
        return (
            <Carousel
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={1}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.6}
              enableMomentum={false}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContainer}
              showsHorizontalScrollIndicator={false}
              snapOnAndroid={true}
              removeClippedSubviews={false}
            >
                { this.getSlides(ENTRIES1) }
            </Carousel>
        );
    }

    

    render () {
        return (
            <View style={styles.container}>
                <StatusBar
                  translucent={true}
                  backgroundColor={'rgba(0, 0, 0, 0.3)'}
                  barStyle={'light-content'}
                />
                <View style={styles.colorsContainer}>
                    <View style={styles.color1} />
                    <View style={styles.color2} />
                </View>
                <ScrollView
                  style={styles.scrollview}
                  indicatorStyle={'white'}
                  scrollEventThrottle={200}
                >
                    <Text style={styles.title}>Example 1</Text>
                    <Text style={styles.subtitle}>No momentum | Scale | Opacity</Text>
                    { this.example1 }
                </ScrollView>
            </View>
        );
    }
}




class SliderText extends Component {
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




AppRegistry.registerComponent('form_image_list', () => example);
