import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Col, Row } from 'react-app-flexbox-grid/lib';
import FontIcon from 'material-ui/FontIcon';
import MessengerPlugin from 'react-messenger-plugin';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Chip from 'material-ui/Chip';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <Hero title="Earlycorn" subtitle="Make early corns pop" />
      <Section title="What is Earlycorn?" styling="lightning">
        <p>{'We are a user-centric accelerator and are rockstars at delivering fast. We know how much you love your idea and we know that you have a world domination vision. We\'re here to help you to kickstart.'}</p>
      </Section>
      <Grid fluid>
        <Row between="xs">
          <Col type="row" xs={12} sm={6} md={6} lg={5}>
            <Section title="What we do" styling="lightning">
              <p>{'We do technical implementations of your idea'}</p>
                <Chip
                  style={{margin: 4}}
                >
                  App Development
                </Chip>
                <Chip
                  style={{margin: 4}}
                >
                  React Native
                </Chip>
            </Section>
          </Col>
          <Col type="row" xs={12} sm={6} md={6} lg={5}>
            <Section title="Are you the next unicorn?" styling="unicorn">
              <p>{'Pitch your idea for us in an email and we\'ll evaluate it.'}</p>
              <RaisedButton
                href="mailto:hello@earlycorn.com"
                label="Email pitch"
                secondary
                icon={<FontIcon className="material-icons">mail_outline</FontIcon>}
              />
              <h3>Any questions?</h3>
              <MessengerPlugin
                appId="1964214173862478"
                pageId="164378407408838"
                type="message-us"
                color="blue"
                size="xlarge"
              />
            </Section>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </div>
  </MuiThemeProvider>
  );

export default App;
