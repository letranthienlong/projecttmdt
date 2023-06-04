import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataProduct } from "../api/datadraw"
import ProductDetailsShow from "../components/ProductDetailsShow"
import "@Assets/css/productDetailsShow.css";
export default function PageProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const findProduct = (id) => {
    const res = dataProduct.products.filter(i => i.id == id)
    console.log('res', res);
    if (res.length > 0) {
      setProduct(res[[0]])
    }
  }
  useEffect(() => {
    console.log('id', id);
    findProduct(id)
  }, [id]);
console.log('product', product)
  return (
    <>
      <h2>Details Product</h2>
      {!product ?
        <h2>Not found product!</h2>
        :
        <h2>Name Product: <span>{product?.title}</span></h2>
      }
      <ProductDetailsShow/>
    </>
  )
}