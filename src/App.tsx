
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/routes';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main className='container'>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
