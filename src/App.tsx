import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import style from "./App.module.scss";
import MasterDataContainer from "./container/MasterDataContainer";

const About = () => {
  // 使用 hook
  const location = useLocation();
  const { search, pathname } = location;

  return (
    <div>
      router {pathname}，search= {search}
    </div>
  );
};

let App = () => {
  const [token, setToken] = useState<string>("");

  const fakeAuth = (): Promise<string> =>
    new Promise<string>((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
  };
  return (
    <div className={style.App}>
      <div>Header</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterDataContainer onLogin={handleLogin} />} />
          <Route path="/masterdata" element={<MasterDataContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <div className={style.App}>
    //   <header className="App-header">
    //     <p>this is App header</p>
    //   </header>
    //   <MasterDataContainer></MasterDataContainer>
    // </div>
  );
};

export default App;
