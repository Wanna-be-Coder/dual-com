import { useState } from "react";
import "./App.css";
import Buttonmap from "./Buttonmap";
import InfoRender from "./InfoRender";

const btn = [
  {
    name: "User Info",
    selected: true,
    decription: "This is the User Info",
  },
  {
    name: "Create Account",
    selected: false,
    decription: "This is the Create Account",
  },
  {
    name: "Bank Details",
    selected: false,
    decription: "This is the Bank Detail",
  },
];

function App() {
  const [selected, setSelected] = useState(btn[0]);

  return (
    <div className='App'>
      {/* <h1>Hello</h1> */}
      <InfoRender data={selected} />
      <div>
        <Buttonmap
          buttonArray={btn}
          selected={selected}
          setSelect={setSelected}
        />
      </div>
    </div>
  );
}

export default App;
