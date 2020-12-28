import React, { useState} from "react";
import {Jumbotron, Fade, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutMe() {
    const [open, setOpen] = useState(false);


  return (
    <div className="AboutMe">

<Jumbotron>
      <p>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
          variant="dark"
        >
          Uhm..
        </Button>

      <Fade in={open}>
        <div id="example-fade-text">
            Work in progress..
        </div>
      </Fade>
      </p>
    </Jumbotron>

    </div>
    
  );
}

export default AboutMe;
