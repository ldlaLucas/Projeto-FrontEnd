import { createRoot } from 'react-dom/client'
import "primereact/resources/themes/lara-light-pink/theme.css";
import App from './App.jsx'
import Paths from './routes/Paths.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductListingPage from './pages/ProductListinPage.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductViewPage from './components/BuyBox.jsx';


createRoot(document.getElementById('root')).render(
      <Paths />
)
