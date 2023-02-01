import { createGlobalStyle } from 'styled-components';
import { color } from './styles/colors';

export const GlobalStyle = createGlobalStyle`
 
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 *:before,
 *:after {
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
 }
 
 button{
   cursor: pointer;
 }

 ul li {
   list-style: none;
   cursor: pointer;
 }

 a, a:visited {
   text-decoration: none;
   cursor: pointer;
 }
 
 
 html, body {
   width: 100%;
   height: 100%;
   font-family: 'Poppins', sans-serif;
 }
 
 h1,h2,h3,h4,h5,h6 {
   font-family: 'Poppins', sans-serif;
 }
 
 #root {
   width: 100%;
   min-height: 100%;
   overflow: hidden;
   overflow-y: scroll;
   background-color: ${color.bgPrimary};
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -ms-flex-direction: column;
   flex-direction: column;
 }
`;

export default GlobalStyle;
