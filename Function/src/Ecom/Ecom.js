import React from "react";
import logo from "./Asserts/logo.jpg";
import "./Ecom.css";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";

function Ecom() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-4">
        <Navbar.Brand href="#home"><img src={logo} widt="50" height="50"></img></Navbar.Brand>
          
          <label className="fonty1">E-comm</label>
        </div>

        <div className="col-12 col-md-8">
          <div>

              <div className="fonty1">
                <Navbar bg="border-none outline-none " expand="lg">
                  <Container>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto ">
                      <NavDropdown title="HOME" id="basic-nav-dropdown">
                         <div className="d-flex backgro"> 
                          <NavDropdown.Item href="/Category1">
                            <div className="catlog">   Category 1</div>
                          

                            <div className="d-flex ">
                                <div className="font1">
                                <div className="mt-4"> 
                                <div className="hovering"> Coporate Shoes</div>   </div> 
                              <div className="mt-4">
                                <div className="hovering">Sneakers</div></div> 
                              <div className="mt-4"> 
                              <div className="hovering">Sandals</div>    </div>  
                              <div className="mt-4"> <div className="hovering"> Sport Shoe</div></div>  
                              <div className="mt-4"> <div className="hovering">Trainers</div> </div>  
                                </div>


                                <div className="ms-5 font1">
                                <div className="mt-4">  <div className="hovering"> Coporate Shoes</div> </div> 
                              <div className="mt-4">  <div className="hovering">Sneakers</div></div> 
                              <div className="mt-4">  <div className="hovering">Sandals </div>   </div>  
                              <div className="mt-4">  <div className="hovering"> Sport Shoe </div>   </div>  
                              <div className="mt-4">  <div className="hovering">  Trainers</div>   </div>  
                                </div>




                                
                            </div>
                          </NavDropdown.Item>
                          <NavDropdown.Item href="Category2">
                          <div className="catlog">   Category 2</div>

                            <div className="d-flex">
                                <div className="font2">
                                <div className="mt-4 "> <div className="hovering">HOT DEAL</div>   </div> 
                              <div className="mt-4">  <div className="hovering"> Sunglasses</div></div> 
                              <div className="mt-4">  <div className="hovering">Belts</div>  </div>  
                              <div className="mt-4">  <div className="hovering">Handbags</div>   </div>  
                              <div className="mt-4">  <div className="hovering">Sneakers</div>    </div>  
                                </div>


                                <div className="ms-5 font2">
                                <div className="mt-4">  <div className="hovering"> HOT DEAL</div>  </div> 
                              <div className="mt-4"> <div className="hovering"> Sunglasses</div></div> 
                              <div className="mt-4"> <div className="hovering"> Belts</div>   </div>  
                              <div className="mt-4"> <div className="hovering"> Handbags </div>   </div>  
                              <div className="mt-4">  <div className="hovering"> Sneakers </div>   </div>  
                                </div>




                                
                            </div>

                          </NavDropdown.Item>
                          <NavDropdown.Item href="/Category3">
                          <div className="catlog">   Category 3</div>

                          <div className="font3">
                                <div className="mt-4"> <div className="hovering"> Coporate Shoes</div> </div> 
                              <div className="mt-4"> <div className="hovering">Sneakers</div></div> 
                              <div className="mt-4">  <div className="hovering">Sandals </div>  </div>  
                              <div className="mt-4">   <div className="hovering">Sport Shoe  </div>  </div>  
                              <div className="mt-4"> <div className="hovering"> Trainers   </div>   </div>  
                                </div>
                          </NavDropdown.Item>
                          </div>
                        </NavDropdown>
                        <Nav.Link href="/BAGS" className="ms-5">BAGS</Nav.Link>
                        
                        <Nav.Link href="/SNEAKERS" className="ms-5">SNEAKERS</Nav.Link>

                        <Nav.Link href="/BELT" className="ms-5">BELT</Nav.Link>
                        <Nav.Link href="/CONTACT " className="ms-5">CONTACT</Nav.Link>
                       
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Ecom;
