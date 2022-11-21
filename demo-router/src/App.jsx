import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Bookkeeper</h1>
          <nav
            style={{
              borderBottom: "solid 1px", paddingBottom: "1rem"
            }} >
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link> </nav>
        </div>
      </header>
    </div>
  );
}

