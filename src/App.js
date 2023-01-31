import "./App.css";
import { SideBare } from "./sideBare/SideBare";
import { Main } from "./main/Main";
import { Menu } from "./menu/Menu";
import { useState } from "react";
import { UserContext } from "./hock";
function App() {
  const [showMenu, setshowMenu] = useState(true);
  return (
    <UserContext.Provider value={{ showMenu, setshowMenu }}>
      <div className="App">
        <header className="App-content">
          <div className="side-bare">
            <SideBare></SideBare>
          </div>
          {showMenu && (
            <div className="menu">
              <Menu></Menu>
            </div>
          )}
          <div className={showMenu ? "main" : "main-toggle"}>
            <Main></Main>
          </div>
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
