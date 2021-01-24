import './style.scss';
import { useState } from "react"
import Nav from "../../components/nav"
import List from "../../components/list"

function App() {

  const [search , setSearch] = useState("")

function handleCallback (value){
  setSearch(value)
}



  return (
    <div className="App">
      <Nav callback={handleCallback}/>
      <List filter={search}/>
    </div>
  );
}

export default App;
