import React from 'react';

function ProductCategoryRow() {
  const { category } = this.props;
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}
export default ProductCategoryRow;
