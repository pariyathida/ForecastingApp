import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#031b26',
    paddingTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#f9f9f9',
  },
  textInput: {
    width: '50%',
    textAlign: 'center',
    color: '#F5FCFF',
  },
  weatherIcon: {
    width:80,
    height:80,
  },
  dayForecast: {
    flex:1, 
    flexDirection: "row",
    width: '100%',
  },
  textForecast: {
    paddingTop: 20,
    flex:1,
    textAlign:'center',
    color: '#d9ecfc',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button :{
    backgroundColor: '#c9dae8',
  },
  changeTheme: {
    color: '#b9bcbf',
    backgroundColor: '#031b26',
    padding: 20, fontWeight: 'bold', 
  },
  
});


  module.exports = styles;