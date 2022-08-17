import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --primary-color: #1C658C;
    --secondary-color: #D8D2CB;
    --light-primary-color: #398AB9;
    --alert: #F32424;
    --warning: #EAC100;
    --success: #0B8457;
    --bg-color: #111111;
    --bg-color-accent: #E7F6F2;
    --page-horizontal-padding: 20px;
    --header-height: 50px;
    --font-family: 'Unica One', sans-serif;
    --font-color: #E7F6F2;
  }

  @font-face {
    font-family: 'Unica One';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/unica-one-v13-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('../fonts/unica-one-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../fonts/unica-one-v13-latin-regular.svg#UnicaOne') format('svg'); /* Legacy iOS */
  }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p, svg,
    text, a {
        font-family: var(--font-family);
        color: var(--font-color);
    }

    html, body, div,
    input, button, select, option,
    p, text {
        font-size: 1em;
        line-height: 1em;
    }
    h1 {
        font-size: 2em;
        line-height: 1em;
    } 
    h2 {
        font-size: 1.5em;
        line-height: 1.5em;
    } 
    h3 {
        font-size: 1em;
        line-height: 1em;
    } 
    h4 {
        font-size: 1em;
        line-height: 1em;
    }

    html, body {
        max-width: 100vw;
    }


    /* http://meyerweb.com/eric/tools/css/reset/
        v2.0 | 20110126
        License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    button {
        border:none;
        background: transparent;
        outline : 1px solid var(--font-color);
        margin: 5px;

        :hover {
            cursor: pointer;
            background: white;
            color: black;
        }
    }

    a {
        color: var(--font-family);
        text-decoration: none;
        :hover {
            cursor: pointer;
        text-decoration: underline;

        }
    }

    input {
        color: black;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: var(--bg-color);
    }
    
    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
    }
`;
