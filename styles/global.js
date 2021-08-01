import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    margin: 0px;
    border-style: none;
    background-color: #fbfbfb;
  }

  @font-face {
    font-family: Fira Sans,sans-serif;
    font-style: normal;
    font-weight: 400;
    src:
      local('Rubik'),
      local('Rubik'),
      url('/fonts/Rubik.ttf') format('ttf');
    font-display: swap;
  }

  @font-face {
    font-family: Fira Sans,sans-serif;
    font-style: normal;
    font-weight: 600;
    src:
      local('Rubik'),
      local('Rubik'),
      url('/fonts/Rubik.ttf') format('ttf');
    font-display: swap;
  }

  @font-face {
    font-family: Fira Sans,sans-serif;
    font-style: normal;
    font-weight: 700;
    src:
      local('Rubik'),
      local('Rubik'),
      url('/fonts/Rubik.ttf') format('ttf');
    font-display: swap;
  }

  @font-face {
    font-family: Fira Sans,sans-serif;
    font-style: normal;
    font-weight: 800;
    src:
      local('Rubik'),
      local('Rubik'),
      url('/fonts/Rubik.ttf') format('ttf');
    font-display: swap;
  }

  input::-webkit-contacts-auto-fill-button,
  input::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
  }

  body::-webkit-scrollbar {
      background-color: #fff;
      width: 16px;
  }

  body::-webkit-scrollbar-track {
      background-color: #fff;
  }

  body::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 4px solid #fff;
  }

  body::-webkit-scrollbar-button {
      display:none;
  }
`;

export default GlobalStyle;
