import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Ancient from '../../images/Ancient.jpg';

import '../../styles/CategoriesAncient.css'

class CategoriesAncient extends Component {
  render() {
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol>
          <img src={Ancient} alt="ancient-philosopher" height="200px" width="250px" />
          <h5 className="header">Ancient</h5>
          <p>/ˈeɪnʃ(ə)nt/</p>
          <p>adjective</p>
          <p>1. of or from a long time ago, having lasted for a very long time</p>
          <p>2. used to refer to the period in European history from the earliest known societies to the end of the Roman Empire</p>
          <h5 className="header">Overview</h5>
          <p> In Western philosophy, the spread of Christianity in the Roman Empire marked the ending of Hellenistic philosophy and ushered in the beginnings of medieval philosophy, whereas in Eastern philosophy, the spread of Islam through the Arab Empire marked the end of Old Iranian philosophy and ushered in the beginnings of early Islamic philosophy.</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default CategoriesAncient;