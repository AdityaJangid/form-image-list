{/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */}


import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, TextInput, AsyncStorage, ListView, } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from 'form_image_list/styles/SliderEntry.style';
import SliderEntry from 'form_image_list/components/SliderEntry';
import styles from 'form_image_list/styles/index.style';
import { ENTRIES1, ENTRIES2 } from 'form_image_list/static/entries';
import { AppRegistry, StyleSheet, Button, Alert} from 'react-native';
import { Form, Separator,InputField, LinkField,  } from 'react-native-form-generator';
import ImageSlider from 'react-native-image-slider';
/* import {
 *   StackNavigator,
 * } from 'react-navigation'; */
import { DrawerNavigator, TabNavigator } from 'react-navigation';




class MyListView extends Component {
	static navigationOptions = {
		tabBarLabel: 'List',
	};
	getData() {
		console.log("hello 123")
		fetch('http://34.209.178.2:3000/student/all', {
			method: 'GET'
			}).then(function(response) {
					return response.json();
			}).then(function(json) {
					var arr=[];
					for( x in json){
							arr.push([json[x].FullName,json[x].Age]);
						/* console.log("array =", arr) */
						}
						const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				console.log("arr = ", arr)
						this.setState(  {
						dataSource: ds.cloneWithRows(arr),
					})
			}.bind(this));
			}
	componentDidMount() {
	this.getData();
	}
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([]),
		};
	}
	render() {
		return (
			<ListView
				style={styles.container}
				dataSource={this.state.dataSource}
				/* renderRow={(data) => <View><Text>{data+" "}</Text></View>} */
				renderRow={(data) => <View><Text>{data+" "}</Text></View>}
			/>);
	}
}


class form_image_list extends Component {
	static navigationOptions = {
		tabBarLabel: 'Form',
	};
	constructor(props){
		super(props)
		this.state = {
				FullName: '',
				Age: '',
		}
	}
	componentDidMount = () => AsyncStorage.getItem('FullName').then((value) => this.setState({ 'FullName': value }))
	setName = (value) => {
		AsyncStorage.setItem('FullName', value);
		this.setState({ 'FullName': value });
	}
	componentDidMount = () => AsyncStorage.getItem('Age').then((value) => this.setState({ 'Age': value }))
	setEmployee= (value) => {
		AsyncStorage.setItem('Age', value);
		this.setState({ 'Age': value });
	}
onButtonPress = () => {
	console.log(this.state.name)
	fetch('http://34.209.178.2:3000/student/', {  
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			FullName: this.state.FullName,
			Age: this.state.Age,
		})
	}).then(function(response) {
		Alert.alert("Data Saved");
		})
};
	render() {
		return (
			<View>
				<Text style={styles.welcome}>
				Enter your Name and Age !
				</Text>
				<Form>
					<TextInput style = {styles.textInput} placeholder="Enter full Name" autoCapitalize = 'none' onChangeText = {this.setName}/>
					<TextInput style = {styles.textInput} placeholder="Age" autoCapitalize = 'none' onChangeText = {this.setEmployee}/>
					<Text>
						{this.state.address}
					</Text>
					<Button  onPress={this.onButtonPress } title="submit" color="#91D9D6">
					</Button>
				</Form>
			</View>
		);
	}
}










class Gallery extends Component {
	static navigationOptions = {
		tabBarLabel: 'gallery',
	};
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
				<Text style={styles.title}> Example 1</Text>
				<Text style={styles.subtitle}>No momentum | Scale | Opacity</Text>
				{ this.example1 }
				</ScrollView>
			</View>
		);
	}
}

const MyApp = TabNavigator({
	List: {
		screen: MyListView,
	},
	gallery: {
		screen: Gallery,
	},
	Form: {
		screen: form_image_list,
	},
	}, {
	tabBarOptions: {
		activeTintColor: '#e91e63',
	},
	}
);

AppRegistry.registerComponent('form_image_list', () => MyApp);
