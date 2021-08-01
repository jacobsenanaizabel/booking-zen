import styled from 'styled-components';
 import { media, colors } from '@styles/index';

export const Container = styled.div`

`;

export const ButtonStyled = styled.button`
  background: ${colors.purple};
  border-radius: 24px;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  height: 48px;
  line-height: 24px;
  margin-right: 40px;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  width: 170px;
  justify-content: center;

  :active,
  :focus,
  :hover {
    background: #5e41c3;
    box-shadow: 0 4px 8px rgba(0, 17, 41, .45) !important;
  }

  ${media.xs`
    width: 100%;
    margin-bottom: 20px;
    margin-right: 0px;
    min-height: 48px;
  `}
`;
