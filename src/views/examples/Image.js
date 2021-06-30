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
import React, { useState, useRef, useEffect } from "react";
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
  Input,
  CardImg
} from "reactstrap";
import "./image.css"
// core components
import Header from "components/Headers/Header.js";
import Canvas from "views/examples/Canvas.js";
import FilerobotImageEditor from 'filerobot-image-editor';

const testImageURL = 'https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg';
const config = {
  filerobot: {
    uploadkey: 'bf72d18393ea40d5b4fccd9fb83806fa',
    container: 'fpdlhfjm'

  }
}
const Image = () => {
  const [fName, setfName] = useState('');
  const [copiedText, setCopiedText] = useState();

  const inputFileRef = useRef(null);
  const reader  = new FileReader();
  const onFilechange = (e) => { /*Selected files data can be collected here.*/
    console.log(e.target.files[0]);
    console.log(e.target.value)
    setfName(e.target.value)
    
    setSrc(URL.createObjectURL(e.target.files[0]))


  }
  const handleBtnClick = () => { /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  }
  const [src, setSrc] = useState(testImageURL);
  const [show, toggle] = useState(false);
  const showImageEditor = () => { toggle(true); };
  const closeImageEditor = () => { toggle(false); };
  const onComplete = (newUrl) => { setSrc(newUrl); };

  return (
    <>
      <Header />

      <Container className=" h-25"
        style={
          {
            padding: '0px',
            margin: '0px'
          }
        }>
        <Row>
          <Col lg="3" md="6"
          className=""
            style={
              { paddingLeft: '15px',  }
            }>

            <Card className="shadow" style={{height:"100%"}}>
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Image</h3>
              </CardHeader>
              <CardBody>
                <Col className="icon-examples">
                  <form className="some-container">
                    <input type="file" accept="image/gif,image/jpeg,image/png,.gif,.jpeg,.jpg,.png"
                      ref={inputFileRef}
                      onChange={onFilechange}
                      hidden={true} />
                    <Button onClick={handleBtnClick}>Select file</Button>
                  </form>
                  {/* {fName} */}
                  {/* <CardImg top width="100%" src={src} alt="Card image cap" /> */}
                  <img
                    alt="Image placeholder"
                    src={src} onClick={showImageEditor}
                    className="img-fluid img-thumbnail mt-2"
                  />
                  {/* <Col xs={6} md={4}>
      <Image src={src} rounded />
    </Col> */}


                  <FilerobotImageEditor
                    show={show}
                    src={src}
                    // config={config}
                    onComplete={onComplete}
                    onClose={closeImageEditor}
                  />
                </Col>
              </CardBody>
            </Card>

          </Col>
          {/* Table */}
          <Col>

            <Canvas></Canvas>

          </Col>

        </Row>




      </Container>

    </>
  );
};

export default Image;
