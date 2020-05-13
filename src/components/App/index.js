import React, { Component } from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

class App extends Component {
  render() {
    return (
      <main className="app">
        <section className="app__header">
          <Header />
        </section>
        <section className="app__main">
          <Main />
        </section>
        <section className="app__footer">
          <Footer />
        </section>
      </main>
    );
  }
}

export default App;
