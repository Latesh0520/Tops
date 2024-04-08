import axios from "axios";
import React, { Component } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      productId: 1,
      productData: [],
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${this.state.productId}`,
    }).then((res) => {
    //   console.log("🚀 ~ LifeCycle ~ componentDidMount ~ res:", res.data);

      this.setState({ productData: res.data });
    });
  }
  nextProduct(){
    this.setState({productId: this.state.productId + 1});
    // console.log("🚀 ~ ProductSlider ~ nextProduct ~ this.state.productId:", this.state.productId)
  }
  componentDidUpdate(oldProps,oldState){
    if (oldState.productId !== this.state.productId) {
        console.log("-----------  componentDidUpdate----------->");
        
        axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${oldState.productId}`,
      }).then((res) => {
          // console.log("🚀 ~ LifeCycle ~ componentDidMount ~ res:", res.data);
        if(res.data){
            this.setState({ productData: res.data });
        }else{
            this.setState({productId: 1});
        }
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <ArrowLeft style={{ width: "50px", height: "50px" }} />
          </div>
          <div onClick={() => this.nextProduct()}>
            <ArrowRight style={{ width: "50px", height: "50px" }}/>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Card
            style={{
              width: "500px",
              textAlign:"center"

            }}
          >
            <img alt="Sample" src={this.state.productData?.image} width={'200px'} style={{margin:'auto'}}/>
            <CardBody>
              <CardTitle tag="h5">{this.state.productData?.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Rs. {this.state.productData?.price}
              </CardSubtitle>
              <CardText>
              {this.state.productData?.description}
              </CardText>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
