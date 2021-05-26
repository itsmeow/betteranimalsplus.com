import { Container, Row, Col } from "react-bootstrap"
import Footer from "./footer"

const Layout = ({ eventkey, children }) => (
  <>
    <Container fluid className="px-0 main" id={`page-${eventkey}`}>
      <Row noGutters>
        <Col>{children}</Col>
      </Row>
    </Container>
    <Container fluid className="px-0" id={`page-footer-${eventkey}`}>
      <Row noGutters>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  </>
)

export default Layout
