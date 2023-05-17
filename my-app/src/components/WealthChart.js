import { Col, Row, Card, Container, Image } from "react-bootstrap";
import PieChart from "./PieChart";
import MeanMedianChart from "./MeanMedianChart";

const WealthChart = () => {
  return (
    <div style={{ background: "#191a1b" }} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Container>
        <br />
        <br />
        <br />
        <Card style={{ background: "#5c3f9e", borderRadius: "40px", paddingLeft: "15px" }}>
          <Row className="align-items-center viewport-height">
            <Col md={7}>
              <br></br>
              <MeanMedianChart />
            </Col>
            <Col md={5}>
              <h4 style={{ color: "#e7c06b", padding: "0.5em", paddingRight: "15px", paddingTop: "80px" }} className="fw-light text-break">
                The stacked bar chart represents the average total individual wealth over time periods ranging from July 2010 to March 2020. The chart consists of two bars for each time period, one representing the mean and the other representing the median. The x-axis shows the time period and the y-axis represents the average wealth. The bar chart shows that both the mean and median wealth increased steadily over time, with the mean wealth being consistently higher than the median. The chart also highlights the increase in wealth from the period of April 2016 to March 2018, during which both the mean and median wealth saw a significant rise. Overall, the chart gives an idea of the average wealth trends over the past decade.
              </h4>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row className="align-items-center viewport-height mb-3">
            <Col md={7}>
              <PieChart />
              <br></br>
            </Col>
            <Col md={5}>
              <h3 style={{ color: "#e7c06b", padding: "0.5em", paddingTop: "30px" }} className='fw-light text-break'>
                The pie chart shows the distribution of mean and median values for the average total individual wealth from July 2010 to March 2020. The chart consists of two slices, one for mean and one for median, each representing the percentage of the total value contributed by that measure. The chart indicates that mean values account for a greater portion of the total value compared to median values. The chart also includes a legend indicating which slice represents mean and which represents median.
              </h3>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  )
}

export default WealthChart;
