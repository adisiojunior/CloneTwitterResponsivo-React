import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Adísio Fialho Jr</h1>
        <h2>@adisio_fialhojr</h2>

        <p>
          Desenvolvedor em <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Campina Grande, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 22 de janeiro de 1995
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>104</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;