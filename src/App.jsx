import {react} from "react"
import Head from "./components/Head"
import Body from "./components/Body"
import {Provider} from "react-redux";
import store from "./utils/store"
import SearchPage from "./components/SearchPage";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<MainContainer />} /> {/* Default route for "/" */}
            <Route path="/watch" element={<WatchPage />} /> {/* Watch page route */}
            <Route path="/results" element={<SearchPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
