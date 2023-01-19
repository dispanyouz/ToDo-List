import React from "react";
import { SnackbarProvider } from "notistack";
import Header from "./components/Header";
import WorkSpace from "./components/WorkSpace";

import s from "./App.module.scss";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className={s.app}>
        <Header />
        <WorkSpace />
      </div>
    </SnackbarProvider>
  );
}

export default App;
