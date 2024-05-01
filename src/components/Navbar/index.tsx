import React, { useState, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import { ARTEM_ROUTE, MAGAMED_ROUTE, VALERA_ROUTE, TABLE_PAGINATION_ROUTE } from '../../app/routes/config';

interface INavbarProps {
  toggleTheme: () => void;
  theme: {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      backgroundLight?: string;
      backgroundDark?: string;
      textLight?: string;
      textDark?: string;
    };
  };
}

interface IAuthContextType {
  loginButtonText: string;
  toggleLogin: () => void;
}

const defaultValue: IAuthContextType = {
  loginButtonText: '',
  toggleLogin: () => {},
};

const AuthContext = createContext<IAuthContextType>(defaultValue);

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 20px;
  font-size: 16px;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

interface IStyledButtonWrapper {
  background: string;
}

const StyledButtonWrapper = styled.div<IStyledButtonWrapper>`
  padding: 5px;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  border: 2px solid black;
  background: ${({ background }) => (background === '#000' ? '#8eff72' : '#FF5733')};
`;

const StyledToggleButton = styled.button`
  padding: 5px;
  border-radius: 20px;
  margin: 6px;
  border: 2px solid black;
  background-color: white;
  color: black;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Navbar: React.FC<INavbarProps> = ({ toggleTheme, theme }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginButtonText = isAuthenticated ? 'Выйти' : 'Войти';

  const toggleLogin = () => {
    setIsAuthenticated((prevState) => !prevState);
  };

  const updatedTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      backgroundLight: '#FFF',
      backgroundDark: '#000',
    },
  };

  return (
    <ThemeProvider theme={updatedTheme}>
      <div>
        <DivWrapper>
          <div>
            <StyledLink to={ARTEM_ROUTE} className="routeLink">
              Артём
            </StyledLink>
            <StyledLink to={VALERA_ROUTE} className="routeLink">
              Валера
            </StyledLink>

            {!isAuthenticated && (
              <StyledLink to={MAGAMED_ROUTE} className="routeLink">
                Магамед
              </StyledLink>
            )}
            {isAuthenticated && (
              <StyledLink to={TABLE_PAGINATION_ROUTE} className="routeLink">
                Таблицы
              </StyledLink>
            )}
          </div>
          <AuthContext.Provider value={{ loginButtonText, toggleLogin }}>
            <StyledDiv>
              <StyledButtonWrapper
                background={isAuthenticated ? updatedTheme.colors.backgroundDark : updatedTheme.colors.backgroundLight}
                onClick={toggleLogin}
              >
                {loginButtonText}
              </StyledButtonWrapper>
              <StyledToggleButton onClick={toggleTheme}>Toggle Theme</StyledToggleButton>
            </StyledDiv>
          </AuthContext.Provider>
        </DivWrapper>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
