import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route, BrowserRouter} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import NavBar from './Components/ NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer'

function App() {
  return (
     <div className="App">
      <BrowserRouter>
      <NavBar />
      
      <Routes>
                <Route exact path="/" element={<ItemListContainer greeting='Bienvenidos'/>} />
                <Route path="/category/:nombreCategoria" element={<ItemListContainer greeting='Categorias'/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer greeting='Detalle'/>} />
  
      </Routes>
      
    </BrowserRouter>
     </div>
  );
}

export default App;
