import React, { Component } from 'react';
import propTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

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
    });
  }
  render() {
    const { stars } = this.state;
    const user = this.props.route.params.user;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          data={stars}
          keyExtractor={(star) => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}
