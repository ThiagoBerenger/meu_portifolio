import React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar';

import './Skillbar.modules.css'

const skillBar = () => {
    return (
        <ProgressBar>
          <ProgressBar variant="danger" now={31.55} key={1} label={`HTML5 31%`}/>
          <ProgressBar variant="warning" now={47.43} key={2} label={`Javascript 47%`}/>
          <ProgressBar variant="info" now={21.02} key={3} label={`CSS3 21%`}/>
        </ProgressBar>
      );
    }

export default skillBar