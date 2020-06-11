import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Artists from '../../images/Artists.jpg';

import '../../styles/CategoriesAncient.css'

class CategoriesAncient extends Component {
  render() {
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol>
          <img src={Artists} alt="artist-philosopher" height="200px" width="250px" />
          <h5 className="header">Artists</h5>
          <p>/ˈɑː.tɪst/</p>
          <p>noun</p>
          <p>1. Someone who paints, draws, or makes sculptures.</p>
          <p>2. Someone who creates things with great skill and imagination:</p>
          <h5 className="header">Overview</h5>
          <p>An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art. The common usage in both everyday speech and academic discourse is a practitioner in the visual arts only. The term is often used in the entertainment business, especially in a business context, for musicians and other performers (less often for actors). "Artiste" (the French for artist) is a variant used in English only in this context; this use has become rare. Use of the term to describe writers, for example, is valid, but less common, and mostly restricted to contexts like criticism.</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default CategoriesAncient;