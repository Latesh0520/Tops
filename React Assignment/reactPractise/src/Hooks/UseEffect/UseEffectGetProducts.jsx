import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardImg, Table } from "reactstrap";
export default function UseEffectGetProducts() {
  let [productData, setProductData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products/",
    }).then((res) => {
      setProductData(res.data);
      console.log("🚀 ~ useEffect ~ res.data:", res.data)
    });
  },[]);
  return (
    <div>
      <div className="container">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Review</th>
            </tr>
          </thead>
          {productData.map((e, i) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td style={{ width: "150px" }}>
                    <CardImg alt={e?.title} src={e.image}/>
                  </td>
                  <td>{e?.title}</td>
                  <td>{e?.description}</td>
                  <td>{e?.rating?.rate}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
}
