import React, { PropTypes } from 'react';
import { Grid, Col, Row } from 'react-app-flexbox-grid/lib';
import './Section.css';

const Section = ({ title, children, styling }) => (
  <section className={`Section ${styling}`}>
    <Grid fluid>
      <Col>
        <div className="Section-Header">
          <h1 className="Section-Header-Title">{title}</h1>
        </div>
        <Row center="xs">
          <Col type="row" xs={12} sm={12} md={10} lg={10}>
            {children}
          </Col>
        </Row>
      </Col>
    </Grid>
  </section>
  );

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styling: PropTypes.string,
};

Section.defaultProps = {
  styling: 'pale',
};

export default Section;
