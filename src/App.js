import logo from './logo.svg';
import './App.css';
import 'remixicon/fonts/remixicon.css'
import NavBar from './Components/ NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting='Bienvenidos' /> */}
      <ItemDetailContainer />

    </div>
  );
}

export default App;
