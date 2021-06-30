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
  ButtonGroup
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Canvas from "views/examples/Canvas.js"

const Text = () => {
  const [copiedText, setCopiedText] = useState();
  const [text, setText] = useState();
  return (
    <>
      <Header />
      <Container className="" height="100%" style={{ padding: '0px', margin: '0px' }}>
        <Row>
          <Col lg="3" md="6" style={{ paddingLeft: '15px' }}  >

            <Card className="shadow" >
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Text</h3>
              </CardHeader>
              <CardBody>
                <Col className="icon-examples">
                  <div className="text-center list-unstyled">
                      <Button block 
                        className=" mb-3"
                        
                        ocolor="secondary" type="button"
                        onClick={(e) => e.preventDefault()}
                        style={{ fontStyle: "headline" }}
                        onChange={(e) => { 
                          setText(e.target.value)
                        }}
                      >
                        <span className="btn-inner--text">Headline</span>
                      </Button>

                      <Button block 
                        className=" mb-3"
                        color="secondary"
                        
                        onClick={(e) => e.preventDefault()}
                        onChange={(e) => {
                          setText(e.target.value)
                        }}
                        
                      >


                        <span className="btn-inner--text" style={{ fontStyle: "regular" }}>Regular</span>
                      </Button>
                      <Button block 
                        className="mb-3"
                        color="secondary"
                        
                        onClick={(e) => e.preventDefault()}
                        style={{ fontStyle: "Handwritten" }}
                        onChange={(e) => {
                          setText(e.target.value)
                        }}
                      >

                        <span className="btn-inner--text">Handwritten</span>
                      </Button>
                    {/* </ButtonGroup> */}
                  </div>
                </Col>
              </CardBody>
            </Card>

          </Col>
          {/* Table */}
          <Col>

            <Canvas text={text} ></Canvas>

          </Col>

        </Row>
      </Container>



    </>
  );
};

export default Text;
