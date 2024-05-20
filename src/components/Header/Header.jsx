import {Container,Nav,Navbar,Button,Offcanvas} from "react-bootstrap"

// eslint-disable-next-line react/prop-types
export const Header = ({detail}) => {
    return (
        <Navbar key={"md"} expand={"md"} variant="transparent" fixed="top" className="  mb-3 bg-transparent">
            <Container >
                <Navbar.Brand className=" text-white fw-bold fs-3" href="#">Brainly Lingo</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className=" text-white bg-white" />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"

                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            Brainly Lingo
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="off-canvas-bg">

                        <Nav className=" justify-content-end justify-content-lg-center  flex-grow-1 pe-3">
                            <Nav.Link className="nav-link-custom text-white fs-5" href="#action1">Home</Nav.Link>
                            <Nav.Link className="nav-link-custom text-white fs-5" href="#action2">Leadership</Nav.Link>
                            <Nav.Link className="nav-link-custom text-white fs-5" href="#action2">Daily Quiz</Nav.Link>
                            <Nav.Link className=" fs-5 fw-bold " style={{color: "rgb(48, 48, 207)"}} href="#action3">genre</Nav.Link>

                        </Nav>

                        <Button className={`${detail ? "btn-outline-custom-nav" : "btn-custom-gradient"} rounded-5 px-4 py-1`} >{detail ? "Sign Out " : "Sign in"}</Button>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
