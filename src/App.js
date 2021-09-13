import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const colours = [
  {
    colour: 'White',
    code: 300303364
  },
  {
    colour: 'Black',
    code: 300303191
  },
  {
    colour: 'Blue',
    code: 300303341
  },
  {
    colour: 'Grey',
    code: 300303343
  },
  {
    colour: 'Brown',
    code: 300303342
  },
]

const DropdownMenu = ({ zone, zoneState, onSelect }) => {
  return (
    <Row className="mb-4 mt-4 align-items-center">
      <Col sm={2}>
        {zone}
      </Col>
      <Col sm={10}>
        <DropdownButton align="end" title={zoneState.colour.length === 0 ? 'Select a colour' : `${zoneState.colour} - ${zoneState.code}`} onSelect={onSelect}>
          { colours.map(({ colour, code }) => (<Dropdown.Item eventKey={[colour, code]} key={code}>{colour} - {code}</Dropdown.Item>))}
        </DropdownButton>
      </Col>
    </Row>
  );
};

const ColourSelection = ({ cuffNum, zoneState }) => {

  const emptySelectionMsg = "No colour selected yet";

  return (
    <Row className="mb-4 align-items-center">
    <Col sm={2}>Cuff in {cuffNum}:</Col>
    <Col sm={10}>
      <div className="square border rounded-3 py-2 px-4 w-50">{zoneState.colour.length === 0 ? emptySelectionMsg : `${zoneState.code}`}</div>
    </Col>
  </Row>
  );
}

function App() {
  // const [zoneTwo, setZoneTwo] = useState('Select colour for Zone Two');
  const [zoneTwo, setZoneTwo] = useState({ colour: '', code: '' });
  const [zoneThree, setZoneThree] = useState({ colour: '', code: '' });
  const [zoneFour, setZoneFour] = useState({ colour: '', code: '' });
  // const [zoneThree, setZoneThree] = useState('Select colour for Zone Three');
  // const [zoneFour, setZoneFour] = useState('Select colour for Zone Four');

  const handleZoneTwo = (e) => {
    let newColour = e.split(',')[0];
    let newCode = e.split(',')[1];
    let newPair = { colour: newColour, code: newCode }
    setZoneTwo(newPair);
  }

  const handleZoneThree = (e) => {
    let newColour = e.split(',')[0];
    let newCode = e.split(',')[1];
    let newPair = { colour: newColour, code: newCode }
    setZoneThree(newPair);
  }

  const handleZoneFour = (e) => {
    let newColour = e.split(',')[0];
    let newCode = e.split(',')[1];
    let newPair = { colour: newColour, code: newCode }
    setZoneFour(newPair);
  }

  return (
    <>
      <Container style={{ width: "60%"}}>
        <Row>
          <h1 className="mb-4 mt-4">Colour Picker Sample</h1>
          <p>Select colours from the dropdown menu below.</p>
          <hr />
        </Row>
        <DropdownMenu zone="Zone 2" zoneState={zoneTwo} onSelect={handleZoneTwo} />
        <DropdownMenu zone="Zone 3" zoneState={zoneThree} onSelect={handleZoneThree} />
        <DropdownMenu zone="Zone 4" zoneState={zoneFour} onSelect={handleZoneFour} />

        <hr />

        <Row className="mt-4 mb-4">
          <ColourSelection cuffNum="2" zoneState={zoneThree} />
          <ColourSelection cuffNum="3" zoneState={zoneTwo} />
          <ColourSelection cuffNum="4" zoneState={zoneThree} />
          <ColourSelection cuffNum="5" zoneState={zoneTwo} />
          <ColourSelection cuffNum="6" zoneState={zoneFour} />
        </Row>
      </Container>
    </>
  );
}

export default App;