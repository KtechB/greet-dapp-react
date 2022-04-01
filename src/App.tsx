import "./App.css";
import GreetForm from "./components/GreetForm";
import { useGreet } from "./useGreet";

function App() {
  const { greet, setGreeting } = useGreet();
  return (
    <>
      <header>
        <h1>Greet DAO</h1>
      </header>
      <div>
        <GreetForm
          message={greet}
          updateMessage={(m) => {
            setGreeting(m);
          }}
        />
      </div>
    </>
  );
}

export default App;
