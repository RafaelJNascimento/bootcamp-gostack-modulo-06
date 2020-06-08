import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';
import api from '../../services/api';

export default class User extends Component {
  static propTypes = {
    route: propTypes.shape({
      params: propTypes.shape({
        user: propTypes.shape(),
      }).isRequired,
    }).isRequired,
  };

  state = { stars: [] };

  async componentDidMount() {
    const user = this.props.route.params.user;
    this.props.navigation.setOptions({ title: user.name });
    await api.get(`/users/${user.login}/starred`).then((response) => {
      this.setState({ stars: response.data });
      console.log(response.data);
    });
  }
  render() {
    const { stars } = this.state;

    return <View />;
  }
}
