import logo from './logo22.jpeg';
import './App.css';

import { formatName } from './utils';
import Welcome from './Welcome';
import RequireAuth from './RequireAuth';

const user1 = {
  firstName: "Lina",
  lastName : "Haque"
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Bismillahir Rahmanir Rahim</h1> */}
        <h1 id={user1.firstName}>Bonjour, {formatName(user1)}</h1>
        <RequireAuth isAuthenticated={true}> 
        
        <Welcome name = "Sara" age = "28"/>
        <Welcome />
        <Welcome name = "Paul" age = "28"/>
        <Welcome name='Kiki' age='5mois' address='kkkkkk'/>


        <h2>React Learn From Class</h2>
        <p>
          Lina is Good Girl
        </p>
       </RequireAuth>   
      </header>
    </div>
  );
}
// props = {name:undefined}
export default App;


