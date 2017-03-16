import React from 'react';
import { Grid, Col, Row } from 'react-app-flexbox-grid/lib';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={6}>
              <p>Made with 💓 in Stockholm</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </footer>
  );

export default Footer;
