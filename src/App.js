import React from "react";
import Header from "./components/Header";
import WorkSpace from "./components/WorkSpace";

import s from "./App.module.scss";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <WorkSpace />
    </div>
  );
}

export default App;
