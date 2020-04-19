import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TrackingAlert() {
  const [show, setShow] = React.useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Hi There! This is where you can track your stocks</Alert.Heading>
        <p>
          You segregate them as ones bought, ones being sought, or ones you simply forgot!  
        </p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}

export default TrackingAlert;
