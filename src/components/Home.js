import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Fade, Button} from 'react-bootstrap';

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="Home">

    <Jumbotron>
      <h1>My portfolio</h1>
      <p>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
          variant="dark"
        >
          Hello
        </Button>

      <Fade in={open}>
        <div id="example-fade-text">
          Hello, in this page you will find some info about me
        </div>
      </Fade>
      </p>
    </Jumbotron>

    </div>
    
  );
}

export default Home;
