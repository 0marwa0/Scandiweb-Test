import React from "react";
import { getPrice } from "../../UtilityFunctions";

import TrashIcon from "../../assets/Icons/trash-icon.png";
class index extends React.Component {
  render() {
    let { name, brand, attributes, prices, id } = this.props.item;
    let currency = this.props.currency;
    let price = currency + " " + getPrice(prices, currency);
    return (
      <>
        <div className="item-cart-info">
          <div className="bold-text">{brand}</div>
          <div className="flex">
            {name}
            <img
              src={TrashIcon}
              alt="icon"
              onClick={() => this.props.remove(id)}
              className="trash_icon"
            />
          </div>
          <div className="bold-text">{price}</div>
          {attributes.map((item) => (
            <div className="attr-holder">
              <span> {item.name}</span>
              <div className="flex">
                {item.items.map((value) => (
                  <div
                    className={
                      value.value === item.selected
                        ? "box-selected selected-item"
                        : "box-container"
                    }
                    style={{
                      background: item.type === "swatch" ? value.value : "",
                    }}
                  >
                    {item.type === "text" ? value.value : ""}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default index;
