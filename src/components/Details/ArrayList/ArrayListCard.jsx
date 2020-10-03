import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ArrayListFunciton from './ArrayListFunctions';
import Boiler from './ArrayListBoiler';
import Copy from '../../Coppied/Coppied';
import '../../styling/functionsContainer.css';
// import SeeCode from '../../SeeSourceCode/SeeCode';
 

class Card extends React.Component {
  constructor(){
    super();
    this.state = {
      coppied: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      coppied: true
  })
    setTimeout(() => {
      this.setState({coppied: false});
  }, 1500);
  }

  render() {
    return (
      <div>
        {this.state.coppied && <Copy />}
        {
          Boiler.map(e => (
            <div key={e.dataStructure} className="boilerContainer">
              <div className="boilerHeading">
                <h1>{e.dataStructure} basic template</h1>
              </div>
              <div className="boilerCode">
                <pre>
                  <code>
                    {e.working}
                  </code>
                </pre>
              </div>
              <div className="boilerButton">
                <CopyToClipboard text={e.working}
                onCopy={() => this.setState({copied: true})}>
                <button onClick={this.handleClick}>&lt;\<span>Copy code</span>&gt;</button>
                </CopyToClipboard>
              </div>
            </div>
          ))
        }
        <br />
        <div className="functionHeading"><h2>Array list functions</h2></div>
        <div className="cardContainer">
          {
            ArrayListFunciton.map(e => (
              <div className="card" key={e.funName}>
                <div className="cardHeading">
                  <h2>{e.funName}</h2>
                </div>
                <div className="cardCode">
                    <pre>
                        <code>
                          {e.working}
                        </code>
                    </pre>
                </div>
                <div className="cardCopy">
                  <CopyToClipboard text={e.working}
                    onCopy={() => this.setState({copied: true})}>
                    <button onClick={this.handleClick}>&lt;<span>Copy code</span>&gt;</button>
                  </CopyToClipboard>
                </div>        
            </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Card;