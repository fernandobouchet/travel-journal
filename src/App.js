import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./Data";

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Header />
      <div className="cards--container">{cards}</div>
    </div>
  );
}

export default App;
