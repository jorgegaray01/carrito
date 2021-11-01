import './App.css';
import NavBar from './components/navbar/navbar';
import List from './components/list/list';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'


function App() {  
  return (
    <div className="App">
      <NavBar/>
      <List/>
      <ItemListContainer/>
     
    </div>
  );
}

export default App;