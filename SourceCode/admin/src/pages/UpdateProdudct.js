import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm/ProductForm";
function UpdateProduct(props) {
  const id = useParams().id;
  useEffect(() => {}, []);

  return (
    <div>
      <ProductForm isEdit={true} />
    </div>
  );
}

export default UpdateProduct;
