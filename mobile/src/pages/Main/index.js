import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';

export default class Main extends Component {
  state = {
    newBox: '',
    loading: true,
  };

  async componentDidMount() {
    const box = await AsyncStorage.getItem('@RocketBox:box');

    if (box) {
      const response = await api.get(`/boxes/${box}`);

      if (response.data === null) {
        await AsyncStorage.removeItem('@RocketBox:box', (error, response) => {
          if (error) console.error(error);
        });
        this.setState({loading: false});
        return;
      }

      this.setState({loading: false});

      this.props.navigation.navigate('Box');
    } else {
      this.setState({loading: false});
    }
  }

  handleSignIn = async () => {
    try {
      console.log(api.defaults);
      const response = await api.post('boxes', {
        title: this.state.newBox,
      });

      await AsyncStorage.setItem('@RocketBox:box', response.data._id);

      this.props.navigation.navigate('Box');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <ActivityIndicator
          size={30}
          color="#00000"
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />

        <TextInput
          style={styles.input}
          placeholder="Crie um box"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.newBox}
          onChangeText={text => this.setState({newBox: text})}
        />

        <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
