import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
`;
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp;