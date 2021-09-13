import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const ColourList = ['White - 300303364', 'Black - 300303191', 'Blue - 300303341', 'Grey - 300303343', 'Brown - 300303342'];

function App() {
  const [zoneTwo, setZoneTwo] = useState('Select colour for Zone Two');
  const [zoneThree, setZoneThree] = useState('Select colour Zone Three');
  const [zoneFour, setZoneFour] = useState('Select colour Zone Four');

  const handleZoneTwo = (e) => {
    console.log(e);
    setZoneTwo(e);
  }

  const handleZoneThree = (e) => {
    console.log(e);
    setZoneThree(e);
  }

  const handleZoneFour = (e) => {
    console.log(e);
    setZoneFour(e);
  }

  const emptySelectionMsg = "No colour selected yet"

  return (
    <>
      <Container style={{ width: "60%"}}>
        <Row>
          <h1 className="mb-4 mt-4">Colour Picker Sample</h1>
          <p>Select colours from the dropdown menu below.</p>
          <hr />
          <Row className="mb-4 mt-4 align-items-center">
            <Col sm={2}>
              Zone 2
            </Col>
            <Col sm={10}>
              <DropdownButton align="end" title={zoneTwo} onSelect={handleZoneTwo}>
              { ColourList.map((colour) => (<Dropdown.Item eventKey={colour} key={colour}>{colour}</Dropdown.Item>))}
              </DropdownButton>
            </Col>
          </Row>
          <Row className="mb-4 align-items-center">
            <Col sm={2}>
              Zone 3
            </Col>
            <Col sm={10}>
              <DropdownButton align="end" title={zoneThree} onSelect={handleZoneThree}>
              { ColourList.map((colour) => (<Dropdown.Item eventKey={colour} key={colour}>{colour}</Dropdown.Item>))}
              </DropdownButton>
            </Col>
          </Row>
          <Row className="mb-4 align-items-center">
            <Col sm={2}>
              Zone 4
            </Col>
            <Col sm={10}>
              <DropdownButton align="end" title={zoneFour} onSelect={handleZoneFour}>
              { ColourList.map((colour) => (<Dropdown.Item eventKey={colour} key={colour}>{colour}</Dropdown.Item>))}
              </DropdownButton>
            </Col>
          </Row>
        </Row>
        <hr />
        <Row className="mt-4">
          <Row className="mb-4 align-items-center">
            <Col sm={2}>Cuff in 2:</Col>
            <Col sm={10}>
              <div className="square border rounded-3 py-2 px-4 w-50">{zoneThree.includes('Select') ? emptySelectionMsg : zoneThree.split(' - ')[1]}</div>
            </Col>
          </Row>
          <Row className="mb-4 align-items-center">
            <Col sm={2}>Cuff in 3:</Col>
            <Col sm={10}>
              <div className="square border rounded-3 py-2 px-4 w-50">{zoneTwo.includes('Select') ? emptySelectionMsg : zoneTwo.split(' - ')[1]}</div>
            </Col>
          </Row>
          <Row className="mb-4 align-items-center">
            <Col sm={2}>Cuff in 4:</Col>
            <Col sm={10}>
              <div className="square border rounded-3 py-2 px-4 w-50">{zoneThree.includes('Select') ? emptySelectionMsg : zoneThree.split(' - ')[1]}</div>
            </Col>
          </Row>
          <Row className="mb-4 align-items-center">
            <Col sm={2}>Cuff in 5:</Col>
            <Col sm={10}>
              <div className="square border rounded-3 py-2 px-4 w-50">{zoneTwo.includes('Select') ? emptySelectionMsg : zoneTwo.split(' - ')[1]}</div>
            </Col>
          </Row>
          <Row className="mb-4 align-items-center">
            <Col sm={2}>Cuff in 6:</Col>
            <Col sm={10}>
              <div className="square border rounded-3 py-2 px-4 w-50">{zoneFour.includes('Select') ? emptySelectionMsg : zoneFour.split(' - ')[1]}</div>
            </Col>
          </Row>
        </Row>

      </Container>
    </>
  );
}

export default App;