import React from "react";
import ProductForm from "../components/ProductForm/ProductForm";

function CreateProduct(props) {
  return (
    <div>
      <ProductForm isEdit={false} />
    </div>
  );
}

export default CreateProduct;
