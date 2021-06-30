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
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// reactstrap components

import Waveform from "views/examples/waveform";
import ReactAudioPlayer from 'react-audio-player';
//D:\TestProjectReact\argon-dashboard-react\src\views\examples\waveform.js
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter

} from "reactstrap";
// import Wavesurfer from 'react-wavesurfer';
const AdminNavbar = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [fName, setfName] = useState('');
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [src, setSrc] = useState();
  const [displayaudio, setDisplayaudio] = useState(false);
  const submitValue = () => {
    const frmdetails = {
      'filename': fName
    }

    console.log('fffffffff' + fName);
  }
  const inputFileRef = useRef(null);
  const onFilechange = (e) => { /*Selected files data can be collected here.*/
    console.log(e.target.files);
    setfName(e.target.value)
    setSrc(URL.createObjectURL(e.target.files[0]))
    setDisplayaudio(true)
  }
  const handleBtnClick = () => { /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  }

  return (

    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container >
          {/* <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link> */}

          <Button // color="primary"
            className="p-2 m-1"

            onClick={
              (e) => e.preventDefault()
            }
            size="sm">
            <i className="far fa-folder-open text-blue mr-3" />
            Open
          </Button>
          <Button // color="primary"
            className="p-2 m-1"
            onClick={
              (e) => e.preventDefault()
            }
            size="sm">
            <i class="far fa-save text-blue mr-3" />

            Save
          </Button>
          <Button // color="primary"
            className="p-2 m-1"
            onClick={
              (e) => e.preventDefault()
            }
            size="sm">
            <i className="fas fa-video text-blue mr-3" />
            Vedios
          </Button>
          <form className="some-container">
            <input type="file" accept="audio/mp3"
              ref={inputFileRef}
              onChange={onFilechange}
              hidden={true} />

            <div class="d-flex align-self-center">
              <Button // color="primary"
                className="p-2 m-1"
                onClick={
                  (e) => e.preventDefault()
                }
                // onClick={toggle}
                size="sm"
                onClick={handleBtnClick}>
                <i className="fas fa-microphone-alt text-blue mr-3" />
                Upload Audio
              </Button>
               {displayaudio && 
              <ReactAudioPlayer
                className="m-1"
                src={src}
                autoPlay
                controls
              />
               }
            </div>



          </form>


          <Nav className="align-items-center d-none d-md-flex" navbar>
            <Button // color="primary"
              className="p-2"
              onClick={
                (e) => e.preventDefault()
              }
              size="sm">

              <i className="far fa-folder-open text-blue mr-3" />
              Generate Vedio
            </Button>


            {/* <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/team-4-800x800.jpg")
                          .default
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Jessica Jonesssssssss
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
           */} </Nav>
        </Container>
        {/* <Modal isOpen={modal}
                    toggle={toggle}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader> 
                    <ModalBody>
                        <Input type="file" name="file" id="exampleFile" accept="audio/mp3"
                            onChange={
                                e => setfName(e.target.value)
                        }></Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                            onClick={submitValue}>Upload</Button>
                        {' '}
                        <Button color="secondary"
                            onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal> */}


      </Navbar>
    </>
  );
};

export default AdminNavbar;
