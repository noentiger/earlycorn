import React, { PropTypes } from 'react';
import './Hero.css';

const Hero = ({ title, subtitle }) => (
  <div className="Hero">
    <h1 className="Hero_Title">{title}</h1>
    <h3 className="Hero_SubTitle">{subtitle}</h3>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
