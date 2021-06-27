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
  ButtonDropdown
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Settings = () => {
  const [copiedText, setCopiedText] = useState();
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <>
      <Header />

      {/* Page content */}
      <Container className="" height="100%">
        <Row>
          <Col lg="3" md="6" style={{ paddingLeft: '0px' }}  >

            <Card className="shadow" >
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Settings</h3>
              </CardHeader>
              <CardBody>
                <Col className="icon-examples">
                  <label>Size</label>
                  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                      Button Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>

                  {/* <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"ni ni-ui-04"}
                        onCopy={() => setCopiedText("ni ni-ui-04")}
                      >
                        <button
                          className="btn-icon-clipboard"
                          data-clipboard-text="ui-04"
                          id="tooltip9332484"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-ui-04" />
                            <span>ui-04</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip9332484"
                      >
                        {copiedText === "ni ni-ui-04"
                          ? "This was Copied!"
                          : "Copy To Clipbord"}
                      </UncontrolledTooltip>
                    </Col>
                  
                   */}

                </Col>
              </CardBody>
            </Card>

          </Col>
          {/* Table */}
          <Col>

            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Icons</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">

                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ui-04"}
                      onCopy={() => setCopiedText("ni ni-ui-04")}
                    >
                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="ui-04"
                        id="tooltip9332484"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ui-04" />
                          <span>ui-04</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip9332484"
                    >
                      {copiedText === "ni ni-ui-04"
                        ? "This was Copied!"
                        : "Copy To Clipbord"}
                    </UncontrolledTooltip>
                  </Col>
                </Row>
              </CardBody>
            </Card>

          </Col>

        </Row>
      </Container>



    </>
  );
};

export default Settings;
