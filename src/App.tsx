import style from "./App.module.scss";
import MasterDataContainer from "./container/MasterDataContainer";

function App() {
  return (
    <div className={style.App}>
      <header className="App-header">
        <p>this is header</p>
      </header>
      <MasterDataContainer></MasterDataContainer>
    </div>
  );
}

export default App;
