import { createGlobalStyle } from 'styled-components';
import BigBG from '../assets/bg-intro-desktop.png';

export const Reset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
body, input, button, textarea {
    text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        background-image: url(${BigBG});
        background-color: hsl(0, 100%, 74%);
    }
button {
    cursor: pointer;
}
`;
