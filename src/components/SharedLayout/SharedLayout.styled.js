import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-weight: 500;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const MainMenuLink = styled(NavLink)`
  &.active {
    color: #d5506b;
  }
`;
