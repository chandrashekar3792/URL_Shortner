import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Header} from "./header/Header";
import { getOriginalUrl } from "./API/URLShortner";
import Footer from "./footer/Footer"
import Main from "./main/Main";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Main} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
