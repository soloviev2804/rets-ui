import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuestionnaireForm from './components/QuestionnaireForm';

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
    questionnaire: [],
  };

  onHandleChangeForm = (id,option) => {
    const { questionnaire } = this.state;
    questionnaire[id] = option;
    console.log('form', questionnaire);
    this.setState({ questionnaire });
  };

  render() {
    const { questionnaire } = this.state;
    return (
      <Container>
        <QuestionnaireForm
          value={questionnaire}
          onChange={this.onHandleChangeForm}
        />
      </Container>
    );
  }
};

QuestionnairePage.propTypes = {
  history: PropTypes.object, // React Router Injected
};

export default QuestionnairePage;
