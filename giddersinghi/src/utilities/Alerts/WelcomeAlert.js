import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomeAlert() {
  const [show, setShow] = React.useState(true);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Hi There! This is you very own space</Alert.Heading>
        <p>
          This tours you through this site, on how to use various components. Disclaimers, if any. Ah! nevermind!
        </p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}

export default WelcomeAlert;
