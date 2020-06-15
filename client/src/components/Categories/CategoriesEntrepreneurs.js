import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Entrepreneurs from '../../images/Entrepreneurs.jpg';

import '../../styles/sass/layout/_categories.scss'

class CategoriesEntrepreneurs extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <img src={Entrepreneurs} alt="entrepreneurs-philosopher" height="200px" width="250px" />
            <h5 className="header">Entrepreneurs</h5>
            <p>/ˌɒntrəprəˈnəː/</p>
            <p>noun</p>
            <p>1. A person who sets up a business or businesses, taking on financial risks in the hope of profit.</p>
            <h5 className="header">Overview</h5>
            <p>Entrepreneurship can broadly be defined as the creation or extraction of value. With this definition, entrepreneurship is viewed as change, which may include other values than simply economic ones. A somewhat broader definition of the term is sometimes used, especially in the field of economics. In this usage, an entrepreneur is an entity which has the ability to find and act upon opportunities to translate inventions or technologies into products and services. In this sense, the term entrepreneurship also captures innovative activities on the part of established firms, in addition to similar activities on the part of new businesses. Yet, the definition is still narrow in the sense that it still focus on the creation of economic (commercial) value.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CategoriesEntrepreneurs;