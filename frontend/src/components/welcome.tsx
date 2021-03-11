import React from 'react';
import './welcome.scss';

const Welcome = () => {
    return (
        <div className="sp-container">
        <div className="sp-content">
          <div className="sp-globe"></div>
          <h2 className="frame-1">WELCOME</h2>
          <h2 className="frame-2">PROSHOP</h2>
          <h2 className="frame-5">
            <span>DO</span>
            <span>NGOC</span>
            <span>THANH.</span>
          </h2>
          {/* <a className="sp-circle-link" href="https://nick.mkrtchyan.ga">by Nick</a> */}
        </div>
      </div>
    )
}
export default Welcome;