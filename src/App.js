import Footer from "./components/Footer";
import Mainpage from "./pages/Mainpage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom";
import OurCoffeeMain from "./pages/OurCoffeeMain";
import MainAboutOneCoffee from "./pages/MainAboutOneCoffeeBest";
import MainForPleasure from "./pages/MainForPleasure";
import MainOurCoffee from "./pages/MainOurCoffee";
import MainGood from "./pages/MainGood";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>

          <Route path="/ourcoffee">
            <OurCoffeeMain />
          </Route>

          <Route path="/about/:id">
            <MainAboutOneCoffee />
          </Route>

          <Route path="/coffeshop/:id">
            <MainOurCoffee />
          </Route>

          <Route path="/good/:id">
            <MainGood />
          </Route>

          <Route path="/pleaure">
            <MainForPleasure />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
