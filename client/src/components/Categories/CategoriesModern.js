import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Modern from '../../images/Modern.jpg';

import '../../styles/sass/layout/_categories.scss'

class CategoriesModern extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <img src={Modern} alt="modern-philosopher" height="200px" width="250px" />
            <h5 className="category-header">Modern</h5>
            <p>/ˈmɒd.ən/</p>
            <p>adjective</p>
            <p>1. Designed and made using the most recent ideas and methods.</p>
            <p>2. of the present or recent times, especially the period of history since around 1500.</p>
            <h5 className="category-header">Overview</h5>
            <p>Modernity, is both a historical period (the modern era), as well as the ensemble of particular socio-cultural norms, attitudes and practices that arose in the wake of the Renaissance—in the "Age of Reason" of 17th-century thought and the 18th-century "Enlightenment". Some commentators consider the era of modernity to have ended by 1930, with World War II in 1945, or the 1980s or 1990s; the following era is called postmodernity.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CategoriesModern;