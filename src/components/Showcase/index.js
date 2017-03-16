import React from 'react';
import { Grid, Col, Row } from 'react-app-flexbox-grid/lib';
import CaseCard from './CaseCard';
import './Showcase.css';
import welcome from './welcome.jpg';
import dine from './dine.jpg';
import ooak from './ooak.jpg';

const Showcase = () => (
  <section className="Showcase">
    <Grid fluid>
      <Row between="xs">
        <Col xs={12} sm={6} md={4} lg={4}><CaseCard image={welcome} /></Col>
        <Col xs={12} sm={6} md={4} lg={4}><CaseCard image={dine} /></Col>
        <Col xs={12} sm={6} md={4} lg={4}><CaseCard image={ooak} /></Col>
      </Row>
    </Grid>
  </section>
  );

export default Showcase;
