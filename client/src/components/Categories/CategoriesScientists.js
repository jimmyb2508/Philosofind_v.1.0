import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Scientists from '../../images/Scientists.jpg';

import '../../styles/sass/layout/_categories.scss'

class CategoriesScientsts extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <img src={Scientists} alt="scientist-philosopher" height="200px" width="190px" />
            <h5 className="header">Scientists</h5>
            <p>/ˈsaɪən.tɪst/</p>
            <p>noun</p>
            <p>1. An expert who studies or works in one of the sciences.</p>
            <p>2. An expert in science.</p>
            <h5 className="header">Overview</h5>
            <p>A scientist is someone who conducts scientific research to advance knowledge in an area of interest.In classical antiquity, there was no real ancient analog of a modern scientist. Instead, philosophers engaged in the philosophical study of nature called natural philosophy, a precursor of natural science. It was not until the 19th century that the term scientist came into regular use after it was coined by the theologian, philosopher, and historian of science William Whewell in 1833.In modern times, many scientists have advanced degrees in an area of science and pursue careers in various sectors of the economy such as academia, industry, government, and nonprofit environments.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CategoriesScientsts;