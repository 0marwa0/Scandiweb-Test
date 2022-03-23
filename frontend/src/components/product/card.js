import React from "react";
import "./index.css";
import cartIcon from "../../assets/Icons/cartIcon.svg";
import Hoc from "../Hoc";
import { getPrice } from "../../UtilityFunctions";
import LazyLoading from "../LazyLoading";
class index extends React.Component {
  render() {
    let { name, gallery, prices, id } = this.props.product;
    let currency = this.props.selectedCurrency;
    let price = currency + " " + getPrice(prices, currency);
    return (
      <div className="card-holder">
        <div className="card-image">
          <LazyLoading src={gallery[0]} item={this.props.product} />
        </div>
        <div
          className="icon-cart-holder"
          onClick={() => {
            this.props.history(`/product/${id}`);
          }}
        >
          <div className="icon-cart">
            <img src={cartIcon} alt="0" height="22px" />
          </div>
        </div>
        <p className="text">{name}</p>
        <div className="bold-text">{price}</div>
      </div>
    );
  }
}
export default Hoc(index);
