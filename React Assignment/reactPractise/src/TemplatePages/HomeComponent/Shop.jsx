import React, { Component } from "react";
import products from "./product.json";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import './product.css'
import { ArrowDown } from "react-feather";

export default class Shop extends Component {
  render() {
    let sortedProduct = products.slice(0,9);
    return (
      <div className="my-5">
        <div className="row g-5 mb-5">
            
          {sortedProduct.map((e,i) => {
            return (
              <div className="col-md-4" key={i}>
                <Card
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <span className="avaibleornot" style={{backgroundColor: !e?.isAvailable ? 'red' : 'green'}}>{!e?.isAvailable ? 'Not available' : 'Available'}</span>
                    <CardTitle tag="h5">{e?.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {e?.brand}
                    </CardSubtitle>
                    <CardText>
                        {e?.description}
                        <br />
                        RS. {e?.price}
                    </CardText>                    
                    <Button>Add to cart <i class="bi bi-bag"></i></Button>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="text-center">
            <Button className="btn btn-lg">Load More <i class="bi bi-arrow-down"></i>   </Button>
            <ArrowDown/>
        </div>
      </div>
    );
  }
}
