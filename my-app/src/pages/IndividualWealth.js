import { Container } from 'react-bootstrap';
import React from 'react';
import WealthChart from '../components/WealthChart';


const Home = () => {
    return (
        <div style={{background: "#191a1b"}} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Container>
                <WealthChart/>
            </Container>
        </div>
    );
};

export default Home;
