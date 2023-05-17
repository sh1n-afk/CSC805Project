import { Container} from 'react-bootstrap';
import React from 'react';
import IncomeChart from '../components/MedianIncomeChart.js';


const Home = () => {
    return (
        <div style={{background: "#191a1b"}} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Container>
                <IncomeChart/>
            </Container>
        </div>
    );
};

export default Home;