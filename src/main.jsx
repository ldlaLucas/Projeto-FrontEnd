import { createRoot } from 'react-dom/client'
import "primereact/resources/themes/lara-light-pink/theme.css";
import Paths from './routes/Paths.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductViewPage from './pages/ProductViewPage.jsx';


createRoot(document.getElementById('root')).render(
      // <ProductViewPage />
      <Paths />
)
