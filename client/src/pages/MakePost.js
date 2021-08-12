import { ButtonGroup } from '@material-ui/core';
import React from 'react';
import InfoSection from '../components/InfoSection/InfoSection';
import {Link} from 'react-router-dom'
import "./MakePost.css";
function MakePost() {
  return (
    <>
      <div className="cont">
          <div className="center">
          <p className="idk">Which one of the following roles describes you best?</p>
          <Link className="links" to="/offer">
              <button className="choice">Company</button>
          </Link>
            <Link className="links" to="/request">
                <button className="choice">Student</button>
            </Link>
            </div>
      </div>
     
    </>
  );
}

export default MakePost;