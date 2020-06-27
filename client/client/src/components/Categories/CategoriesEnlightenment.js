import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Enlightenment from '../../images/Enlightenment.jpg';

import '../../styles/sass/layout/_categories.scss'

class CategoriesEnlightenment extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <img src={Enlightenment} alt="enlightenment-philosopher" height="200px" width="250px" />
            <h5 className="category-header">Enlightenment</h5>
            <p>/ɪnˈlaɪ.tən.mən/</p>
            <p>noun</p>
            <p>1. The state of understanding something.</p>
            <p>2. In Hinduism and Buddhism, the highest spiritual state that can be achieved.</p>
            <p>3. The period in the 18th century in Europe when many people began to emphasize the importance of science and reason, rather than religion and tradition.</p>
            <h5 className="category-header">Overview</h5>
            <p>The heart of the eighteenth century Enlightenment is the loosely organized activity of prominent French thinkers of the mid-decades of the eighteenth century, the so-called “philosophes”(e.g., Voltaire, D’Alembert, Diderot, Montesquieu). The philosophes constituted an informal society of men of letters who collaborated on a loosely defined project of Enlightenment exemplified by the project of the Encyclopedia. However, there are noteworthy centers of Enlightenment outside of France as well. There is a renowned Scottish Enlightenment (key figures are Frances Hutcheson, Adam Smith, David Hume, Thomas Reid), a German Enlightenment (die Aufklärung, key figures of which include Christian Wolff, Moses Mendelssohn, G.E. Lessing and Immanuel Kant), and there are also other hubs of Enlightenment and Enlightenment thinkers scattered throughout Europe and America in the eighteenth century.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CategoriesEnlightenment;