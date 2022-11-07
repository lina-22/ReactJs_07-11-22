// import logo from './logo22.jpeg';
import './App.css';

import { formatName, random } from './utils';
import Welcome from './Welcome';
import RequireAuth from './RequireAuth';
import Clock from './Clock';
import Toggle from './Toggle';

const user1 = {
  firstName: "Lina",
  lastName : "Haque"
}



function App() {

  // const [random, setRandom] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
      <Toggle/>
       <Clock message ='horlog'/>

        <Clock message='horlog'/> 
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>Bismillahir Rahmanir Rahim</h1> */}
        <h1 id={user1.firstName}>Bonjour, {formatName(user1)}</h1>
        <RequireAuth isAuthenticated={true}> 
        <Welcome name = "Sara" age = "28"/>
        <Welcome />
        <Welcome name = "Paul" age = "28"/>
        <Welcome name='Kiki' age='5mois' address='kkkkkk'/>
       </RequireAuth>   
      </header>
    </div>
  );
}
// props = {name:undefined}
export default App;


