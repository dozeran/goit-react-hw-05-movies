import { Outlet } from 'react-router-dom';
import { Header, MainMenuLink } from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <MainMenuLink to="/">Home</MainMenuLink>
        <MainMenuLink to="/movies">Movies</MainMenuLink>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
