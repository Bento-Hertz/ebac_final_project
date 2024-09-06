
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/routes';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from 'components/Sidebar';
import StatusMessage from 'components/StatusMessage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <StatusMessage />
      <Header />
      <Sidebar />
      <main className='container'>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
