import { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import TopBar from "./topbar/TopBar";

function App() {
  const [page, setPage] = useState("null");

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setPage(data));
  }, []);

  return (
    <>
    <TopBar/>
    <Home/>
    </>
  );
}

export default App;