import React, { Component } from "react";
import Header from "./HomeComponent/Header";
import Courosel from "./HomeComponent/Courosel";
import Datatable from "./HomeComponent/Datatable";
import Shop from "./HomeComponent/Shop";

export default class Home extends Component {
  render() {
    return (
      <div>
          <Header />
          <Courosel />
          <Datatable />
          <Shop/>
        </div>
    );
  }
}
