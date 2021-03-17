import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { HeaderContainer, HeaderReturn, HeaderTitle } from './Header.style';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <HeaderContainer>
      {location.pathname !== '/' &&
        <HeaderReturn onClick={() => history.goBack()} className="material-icons">
          arrow_back_ios
        </HeaderReturn>
      }
      <HeaderTitle>Game Of Thrones Books</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header;