import logo from './logo22.jpeg';
import './App.css';

function formatName(user){
  return user.firstName+' '+user.lastName
}

const user1 = {
  firstName: "Lina",
  lastName : "Haque"
}

function workHard(play){
  return play.morning+ ' '+play.evening
}

const play1 = {
  morning: "first-step",
  evening: "last-step"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Bismillahir Rahmanir Rahim</h1> */}
        <h1 id={user1.firstName}>Bonjour, {formatName(user1)}</h1>
        <h3 >Hello, {workHard(play1)}</h3>
        <h2>React Learn From Class</h2>
        <p>
          Lina is Good Girl
        </p>

      </header>
    </div>
  );
}

export default App;
