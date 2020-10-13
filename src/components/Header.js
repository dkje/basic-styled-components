import React from "react";
import styled, { css } from "styled-components";

const ThemeSwitchBtn = styled.button`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
      font-size: ${theme.fonts.size.base};
      border-radius: 2px;
    `;
  }}
`;

const CustomHeader = styled.div`
  ${({ theme }) => {
    return css`
      padding: 1rem;
      display: flex;
      justify-content: center;
      background-color: ${theme.colors.secondary};
    `;
  }}
`;

const Header = ({ switchTheme }) => {
  return (
    <CustomHeader>
      <ThemeSwitchBtn
        onClick={() => {
          switchTheme();
        }}
      >
        Change Theme
      </ThemeSwitchBtn>
    </CustomHeader>
  );
};

export default Header;
