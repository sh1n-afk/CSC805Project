import {Nav, Navbar, Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link, HashRouter} from 'react-router-dom';
import Home from '../pages/HomePage.js';
import HousingAffordability from '../pages/HousingAffordability.js';
import IndividualWealth from '../pages/IndividualWealth.js'
import IndividualIncome from '../pages/IndividualIncome.js';
import Disposable from '../pages/DisposableIncome.js';
// import ProjectsComp from './ProjectsPage.js';


const NavbarComp = () => {
  return (
    <HashRouter>
      <Navbar collapseOnSelect={true} style={{backgroundColor: "#191a1b"}} variant="dark" expand="sm" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>CSC 805: Final Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Link style={{color: "#e7c06b"}} as={Link} to={"/IndividualWealth"}>Individual Wealth</Nav.Link>
              <Nav.Link style={{color: "#e7c06b"}} as={Link} to={"/IndividualIncome"}>Individual Income</Nav.Link>
              <Nav.Link style={{color: "#e7c06b"}} as={Link} to={"/HousingAffordability"}>Housing Affordability</Nav.Link>
              <Nav.Link style={{color: "#e7c06b"}} as={Link} to={"/DisposableIncome"}>Disposable Income</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/HousingAffordability' element={<HousingAffordability/>}/>
        <Route path='/IndividualWealth' element={<IndividualWealth/>}/>
        <Route path='/IndividualIncome' element={<IndividualIncome/>}/>
        <Route path='/DisposableIncome' element={<Disposable/>}/>
        {/* <Route path='/projects' element={<ProjectsComp/>}/> */}
      </Routes>
    </HashRouter>
  );
}

export default NavbarComp;