import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuestionnaireForm from './components/QuestionnaireForm';
import AuthenticationAPI from '../../api/AuthenticationAPI';
import { APP_TOKEN } from '../../api/Constants';

const Container = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #607d8b;
  width: 100%;
  overflow: scroll;
`;

class QuestionnairePage extends Component {
  state = {
    questionnaire: {},
  };

  onHandleChangeForm = (id, option) => {
    const { questionnaire } = this.state;
    questionnaire[id] = option;
    console.log('form', questionnaire);
    this.setState({ questionnaire });
  };

  onHandleSubmitForm = async event => {
    event.preventDefault();
    const { history } = this.props;
    const { registration } = this.props.location.state;
    const { questionnaire } = this.state;

    const result = await AuthenticationAPI.onLogin({
      companyName: registration.company,
      address: registration.address,
      phone: registration.phone,
      website: registration.link,
      contactPersonName: registration.contact,
      sector: registration.sector,
      supportRequest: registration.needRetcHelp,
      profilePresenceLevel: questionnaire.q1,
      profileCustomerBase: questionnaire.q2,
    });
    console.log('result', result);
    history.push('/check-in-progress', { process: result });
  };

  render() {
    const { questionnaire } = this.state;
    return (
      <Container>
        <QuestionnaireForm
          value={questionnaire}
          onChange={this.onHandleChangeForm}
          onSubmit={this.onHandleSubmitForm}
        />
      </Container>
    );
  }
}

QuestionnairePage.propTypes = {
  history: PropTypes.object, // React Router Injected
  location: PropTypes.object, // React Router Injected
};

export default QuestionnairePage;
