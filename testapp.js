/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableHighlight,
  Scroll,
  Button,
} from 'react-native';
import style1 from './style1.js';
import style2 from './style2.js';

export default class testapp extends Component {
    
    state = {
        cityName: '',
        countryName: '',
        countryCode: '',
        error: '',
        degree: ' \u2109', //Celsius \u2103. Fahrenheit \u2109.
        temp1: '-',
        temp1f: '-',
        temp1c: '-',
        weather1: 'n/a',
        icon1 : 'openweathermap.org/img/w/10d.png',
        temp2: '-',
        temp2f: '-',
        temp2c: '-',
        weather2: 'n/a',
        icon2 : 'openweathermap.org/img/w/10d.png',
        temp3: '-',
        temp3f: '-',
        temp3c: '-',
        weather3: 'n/a',
        icon3 : 'openweathermap.org/img/w/10d.png',
        temp4: '-',
        temp4f: '-',
        temp4c: '-',
        weather4: 'n/a',
        icon4 : 'openweathermap.org/img/w/10d.png',
        temp5: '-',
        temp5f: '-',
        temp5c: '-',
        weather5: 'n/a',
        icon5 : 'openweathermap.org/img/w/10d.png',
        styles: style1,
      }

    _resetWeather(){
      this.setState({
        temp1: '-', temp1f: '-', temp1c: '-',
        weather1: 'n/a', icon1 : 'openweathermap.org/img/w/10d.png',
        temp2: '-', temp2f: '-', temp2c: '-',
        weather2: 'n/a', icon2 : 'openweathermap.org/img/w/10d.png',
        temp3: '-', temp3f: '-', temp3c: '-',
        weather3: 'n/a', icon3 : 'openweathermap.org/img/w/10d.png',
        temp4: '-', temp4f: '-', temp4c: '-',
        weather4: 'n/a', icon4 : 'openweathermap.org/img/w/10d.png',
        temp5: '-', temp5f: '-', temp5c: '-',
        weather5: 'n/a', icon5 : 'openweathermap.org/img/w/10d.png',
      })
    }

    _handleName() {
        var cityName = this.state.cityName;
        var countryCode = this.state.countryCode;
        var appid = 'bf5062643606841f47ab57c50a2af254';
        console.log(this.state);
        //fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+appid)
        fetch('http://api.openweathermap.org/data/2.5/forecast?q='+cityName+','+'&appid='+appid)
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            this.setState({
                cityName: responseJSON.city.name,
                temp1: Number(responseJSON.list[0].main.temp).toFixed(2),
                weather1: responseJSON.list[0].weather[0].main,
                icon1 : 'openweathermap.org/img/w/'+responseJSON.list[0].weather[0].icon+'.png',
                temp2: Number(responseJSON.list[8].main.temp).toFixed(2),
                weather2:  responseJSON.list[8].weather[0].main,
                icon2 : 'openweathermap.org/img/w/'+responseJSON.list[8].weather[0].icon+'.png',
                temp3: Number(responseJSON.list[16].main.temp).toFixed(2),
                weather3:  responseJSON.list[16].weather[0].main,
                icon3 : 'openweathermap.org/img/w/'+responseJSON.list[16].weather[0].icon+'.png',
                temp4: Number(responseJSON.list[24].main.temp).toFixed(2),
                weather4:  responseJSON.list[24].weather[0].main,
                icon4 : 'openweathermap.org/img/w/'+responseJSON.list[24].weather[0].icon+'.png',
                temp5: Number(responseJSON.list[32].main.temp).toFixed(2),
                weather5:  responseJSON.list[32].weather[0].main,
                icon5 : 'openweathermap.org/img/w/'+responseJSON.list[32].weather[0].icon+'.png',
            }),this._calculateTemp();
        })
        .catch((error) => {
            this.setState({
              error: 'City not found',
            },console.warn(error),this._resetWeather());
    
        });
    }

    //calculate the fetched temp to C and F 
    //then show the temp in C or F as the current showed degree
    _calculateTemp(){
      this.setState({
        temp1c : Number(this.state.temp1-273.15).toFixed(2),
        temp1f : Number((this.state.temp1*9/5) -495.67).toFixed(2),
        temp2c : Number(this.state.temp2-273.15).toFixed(2),
        temp2f : Number((this.state.temp2*9/5) -495.67).toFixed(2),
        temp3c : Number(this.state.temp3-273.15).toFixed(2),
        temp3f : Number((this.state.temp3*9/5) -495.67).toFixed(2),
        temp4c : Number(this.state.temp4-273.15).toFixed(2),
        temp4f : Number((this.state.temp4*9/5) -495.67).toFixed(2),
        temp5c : Number(this.state.temp5-273.15).toFixed(2),
        temp5f : Number((this.state.temp5*9/5) -495.67).toFixed(2),
      })
      //check the current prefered degree
      if(this.state.degree== ' \u2103'){
        this._toCelcius();
      }else{
        this._toFahrenheit();
      }
    }

    _toCelcius(){
      this.setState({
        degree: ' \u2103',
        temp1 : this.state.temp1c,
        temp2 : this.state.temp2c,
        temp3 : this.state.temp3c,
        temp4 : this.state.temp4c,
        temp5 : this.state.temp5c,
      })    
    }

    _toFahrenheit(){
      this.setState({
        degree: ' \u2109',
        temp1 : this.state.temp1f,
        temp2 : this.state.temp2f,
        temp3 : this.state.temp3f,
        temp4 : this.state.temp4f,
        temp5 : this.state.temp5f,
      })    
    }

    //A method to serach the country code by country name, but not in used
    _getCountryCode(){
      fetch('https://restcountries.eu/rest/v2/name/'+this.state.countryName)
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            this.setState({
                countryCode: responseJSON[0].alpha2Code,
            });
            console.log(this.state.countryCode);
        })
        .catch((error) => {
           console.warn(error);
        });
    }

    //check empty output, then call the function to fetch the result
    _onSubmit(event){
      console.log(this.state);
      if(this.state.cityName==''){
        this.setState({
          error: 'Please input the city name'
        },console.log(this.state));
      }else{
        this.setState({
          error: ''
        },this._handleName());
      }
    }

    _changeTheme(){
      if(this.state.styles == style1){
        this.setState({
          styles : style2,
        })
      }else{
        this.setState({
          styles : style1,
        })
      }
    }


  render() {
    return (
        <View style={this.state.styles.container}>
            <View style={{flex: 1, flexDirection: "column", width: "80%", alignItems: "center"}}>
                <Text style={this.state.styles.header}>WEATHER FORECAST</Text>
                <TextInput style={this.state.styles.textInput} ref= {(el) => { this.cityName = el; }} 
            onChangeText={(cityName) => this.setState({cityName})} value={this.state.cityName} placeholder="City" placeholderTextColor="grey"/>
                {/*<TextInput style={this.state.styles.textInput}  ref= {(el) => { this.countryName = el; }} 
            onChangeText={(countryName) => this.setState({countryName})} value={this.state.countryName} placeholder="Country"/>*/}
                <Text style={{fontSize: 12, color: "#990000", paddingBottom: 8}}>{this.state.error}</Text>
                <View style={{flexDirection:"row"}}>
                    <Button style={this.state.styles.button} color="#536370" title='Celcius' onPress={() => this._toCelcius()}/>  
                    <Text style={{width:5}}></Text>
                    <Button style={this.state.styles.button} color="#536370" title='Fahrenheit' onPress={() => this._toFahrenheit()}/>  
                    <Text style={{width:5}}></Text>
                    <Button style={this.state.styles.button} color="#536370" title='SUBMIT' onPress={() => this._onSubmit()}/>  
                </View>
                {/*<Text style={this.state.styles.welcome}>Hello, {this.state.name}</Text>*/}
                <View style={{flex: 3, flexDirection: "column"}}>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 1</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weather1}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.temp1}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.icon1}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 2</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weather2}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.temp2}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.icon2}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 3</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weather3}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.temp3}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.icon3}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 4</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weather4}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.temp4}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.icon4}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 5</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weather5}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.temp5}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.icon5}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
              </View>  
            </View>
            <Text style={this.state.styles.changeTheme} onPress={()=>this._changeTheme()}>
                CHANGE THEME
            </Text>
      </View>
    );
  }
}

