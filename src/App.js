import './App.css';
import NavbarSimple from './components/navbar'
import CardGrid from './components/cardGrid';

function App() {
  return (
    <div className="App" >


<div style={{display: "flex"}}>
<NavbarSimple/>

<div style={{display: "flex" , justifyContent: "space-between"}}>
<CardGrid/>
<CardGrid/>
</div>

</div>
    </div>
  );
}

export default App;
