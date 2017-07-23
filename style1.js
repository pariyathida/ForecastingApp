import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24, 
    fontWeight: "bold", 
    color: "black",
  },
  textInput: {
    width: '50%',
    textAlign: 'center',
    color: 'black',
    
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
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button :{

  },
  changeTheme: {
      padding: 20, fontWeight: 'bold', 
  }
  });

  module.exports = styles;