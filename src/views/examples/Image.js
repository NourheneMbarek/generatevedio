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
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
  ButtonGroup,
  Input
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Canvas from "views/examples/Canvas.js"

const Image = () => {
  const [fName, setfName] = useState('');
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
   
      <Container className="" height="100%" style={{ padding: '0px', margin: '0px' }}>
        <Row>
          <Col lg="3" md="6" style={{ paddingLeft: '15px' }}  >

            <Card className="shadow" >
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Image</h3>
              </CardHeader>
              <CardBody>
                <Col className="icon-examples">
                  <div className="text-center list-unstyled">
                      <Button block 
                        className=" mb-3"
                        
                        ocolor="secondary" type="button"
                        onClick={(e) => e.preventDefault()}
                        style={{ fontStyle: "headline" }}
                      >
                        <Input type="file" name="file" id="exampleFile" accept="audio/mp3" onChange={e => setfName(e.target.value)}></Input>
                        <span className="btn-inner--text">Upload Image</span>
                      </Button>

                      
                   
                  </div>
                </Col>
              </CardBody>
            </Card>

          </Col>
          {/* Table */}
          <Col>

            <Canvas  ></Canvas>

          </Col>

        </Row>
      </Container>

    </>
  );
};

export default Image;
