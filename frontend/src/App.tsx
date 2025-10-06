import "./App.css";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <>
      <SearchBar placeholder="Search" whenChangeLayoutWidth={800}></SearchBar>
    </>
  );
}

export default App;
