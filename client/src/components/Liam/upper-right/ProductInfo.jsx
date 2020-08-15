import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?


const ProductInfo = function ({category, name, currStyle}) {
  if (!currStyle) {
    return (
      <div className="product-info">
        <div className="stars-pi">
          STAR PLACE-HOLDER
        </div>
        <div className="category-pi">
          Category: {category}
        </div>
        <div className="prodName-pi">
          {name}
        </div>
        <div>
          Rendering price
        </div>
      </div>
    );
  }

  let onSale = currStyle.sale_price === '0' ? false : true;

  return (
    <div className="product-info">
      <div className="stars-pi">
        STAR PLACE-HOLDER
      </div>
      <div className="category-pi">
        Category: {category}
      </div>
      <div className="prodName-pi">
        {name}
      </div>
      {onSale ? (
        <div className="price-pi-sale">
          <span className="origPrice old">
            ${currStyle.original_price}
          </span>
          <span>
            {'  '}
          </span>
          <span className="salePrice">
            ${currStyle.sale_price}
          </span>
        </div>
      ) : (
        <div className="price-pi">
          <span className="origPrice">
            ${currStyle.original_price}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
