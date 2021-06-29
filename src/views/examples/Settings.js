/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Input,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Dropdown,
  ButtonDropdown,
  Button
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Canvas from "views/examples/Canvas.js"
import { SketchPicker } from 'react-color'
const Settings = () => {
  const [copiedText, setCopiedText] = useState();
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const [size, setSize] = useState("Square  1:1");
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [displayp, setDisplayp] = useState(false);
  const listsize = [
    {
      "name": "Portrait 4:5",
      "width": 566,//1080,
      "height": 836,//1350
    },
    {
      "name": "Landscape 5:4",
      "width": 536,//1350,
      "height": 300///1080
    },
    {
      "name": "Landscape 16:9",
      "width": 400,//1920,
      "height": 300//1080
    },
    {
      "name": "Portrait 9:16",
      "width":500, //1080,
      "height":300 //1920
    },
    {
      "name": "Square  1:1",
      "width": 500,//1080,
      "height": 500//1080
    }
  ]
  const [colorHexCode, setColorHexCode] = useState('#000000');
  function handleChange(e) {
    setSize(e.target.value)
    // console.log(listsize.find(t=>t.name ===e.target.value).width)
    setWidth(listsize.find(t => t.name === e.target.value).width)
    setHeight(listsize.find(t => t.name === e.target.value).height)
  }
  function dispalyPlatteColor() {
    setDisplayp(!displayp)
  }
  return (
    <>
      <Header />

      {/* Page content */}
      <Container className="navbar-vertical  h-100 bg-white"  style={{ padding: '0px', margin: '0px', height:"100%" , backgroundColor: 'blue'}} >
        <Row>
          <Col lg="3" md="6" style={{ paddingLeft: '15px' }}  >

            <Card className="shadow navbar-vertical fixed-left navbar-light bg-white" style={{height:"100%"}} >
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Settings</h3>
              </CardHeader>
              <CardBody>
                <Col className="icon-examples" >
                  <Row>
                    <label>Size</label>
                  </Row>
                  <Row>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} block>
                      <DropdownToggle >
                        {size}
                      </DropdownToggle>
                      <DropdownMenu>
                        {listsize.map((listsize, i) => <DropdownItem key={i} onClick={handleChange} value={listsize.name}>{listsize.name}</DropdownItem>)}

                      </DropdownMenu>
                    </ButtonDropdown>



                  </Row>
                  <Row className="mt-2">
                    <label >Background Color</label>
                  </Row>
                  <Row >

                    <div className="align-items-center d-none d-md-flex block-example border border-light">
                      <Input
                        placeholder="Color"
                        type="email"

                        value={colorHexCode}
                        style={{ border: 'none' }}

                      />

                      <Button color={colorHexCode}/* {colorHexCode} */ onClick={dispalyPlatteColor}></Button>

                    </div>
                    {displayp ? <SketchPicker
                      color={colorHexCode}
                      onChange={e => setColorHexCode(e.hex)} /> : ''

                    }


                  </Row>

                </Col>
              </CardBody>
            </Card>

          </Col>
          {/* Table */}
          <Col>

            <Canvas width={width} height={height} color={colorHexCode} ></Canvas>

          </Col>

        </Row>
      </Container>



    </>
  );
};

export default Settings;