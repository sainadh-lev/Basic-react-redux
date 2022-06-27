import { Navbar, Container, Nav } from "react-bootstrap";
function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" >
        <Container>
          <Navbar.Brand href="/">ReactBasic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/documents">Documents</Nav.Link>
            <Nav.Link href="/question">StartQuestions</Nav.Link>
            <Nav.Link href="/userinfo">UsersInfo</Nav.Link>
            <Nav.Link href="/counter">Counter</Nav.Link>
            <Nav.Link href="/cityweather">CityWeather</Nav.Link>
            <Nav.Link href="/joke">Joke</Nav.Link>
            <Nav.Link href="/phenotypes">Phenotypes</Nav.Link>
            <Nav.Link href="/login">SignIn</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
