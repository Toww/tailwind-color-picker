import React from "react";
import Palette from "./components/Palette";

function App() {
  return (
    <div className="App">
      <header className="max-w-screen-xl text-center my-12  px-12 mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">
          Tailwind Css Color Picker
        </h1>
      </header>
      <main className="max-w-screen-xl text-center my-8 px-12 mx-auto">
          <Palette color="gray"/>
      </main>
    </div>
  );
}

export default App;
