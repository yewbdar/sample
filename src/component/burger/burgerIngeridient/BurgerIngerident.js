import React, { Component } from "react";
import "./BurgerIngerident.css";
import propsType from "prop-types";

class BurgerIngerident extends Component {
  render() {
    let ingerdent = null;

    switch (this.props.type) {
      case "bread-bottem":
        ingerdent = <div className="BreadBottom"></div>;
        break;
      case "bread-top":
        ingerdent = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ingerdent = <div className="Meat"></div>;
        break;
      case "cheese":
        ingerdent = <div className="Cheese"></div>;
        break;
      case "salad":
        ingerdent = <div className="Salad"></div>;
        break;
      case "bacon":
        ingerdent = <div className="Bacon"></div>;
        break;
      default:
        ingerdent = null;
    }
    return ingerdent;
  }
}

BurgerIngerident.propTypes = {
  type: propsType.string.isRequired
};

export default BurgerIngerident;
