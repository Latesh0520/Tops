import { CardImg, Table } from "reactstrap";
import axios from "axios";
import React, { Component } from "react";

export default class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productId: 0,
      productData: [],
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products/",
    }).then((res) => {
      console.log("🚀 ~ LifeCycle ~ componentDidMount ~ res:", res.data);
      this.setState({ productData: res.data });
    });
  }
  render() {
    return <div>
               <div className="container">
         <Table>
           <thead>
             <tr>
               <th>#</th>
               <th>Product Name</th>
               <th>Product Desc</th>
               <th>Image</th>
             </tr>
           </thead>
           {this.state.productData.map((e, i) => {
             return (
               <tbody>
                 <tr>
                   <th scope="row">{i + 1}</th>
                   <td>{e?.title}</td>
                   <td>{e?.description}</td>
                   <td style={{width:'150px'}}>
                     <CardImg
                       alt="Card image cap"
                       src={e.image}
                       style={{
                         height: 180,
                       }}
                       top
                       width="100%"
                     />
                   </td>
                 </tr>
               </tbody>
             );
           })}
         </Table>
       </div>  </div>;
  }
}
