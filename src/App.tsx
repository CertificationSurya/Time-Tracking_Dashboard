import { useState } from "react";

import Events from "./components/Events";
import Person from "./components/Person";

import './css/customClasses.css'

const App = () => {
  const [active, setActive] = useState("weekly");
  return (
    <div className="container b">

      <div className="container_main br-lg">
        <Person active={active} setActive={setActive} />
      </div>

      <div className="container_details flex-wrapper">
        <Events active={active}/>
      </div>
      
    </div>
  );
};

export default App;
