import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Form2 from "./Components/UsingFormik/Form2";

function App() {
  const [view, setView] = useState("one");

  return (
    <div className="App">
      <nav>
        <h3 className="mt-3" onClick={() => {setView('one')}}>Form 1</h3>
        <h3 className="mt-3" onClick={() => {setView('two')}}>Form 2</h3>
      </nav>
    { view === 'one' ? <Form /> : <Form2 />}
      
    </div>
  );
}

export default App;
