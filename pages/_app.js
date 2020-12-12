import '@styles/globals.css';
import { TodosProvider } from '../contexts/TodosContext.js';
import '../styles/index.css';



function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
