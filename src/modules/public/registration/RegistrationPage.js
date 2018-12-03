import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import get from 'lodash.get';

// Material UI
import Snackbar from '@material-ui/core/Snackbar';

// API
import { APP_TOKEN } from '../../../api/Constants';
// Components
import RegistrationForm, { DECLINE_RETS } from './components/RegistrationForm';
import WelcomeMessage from './components/WelcomeMessage';
import AuthenticationAPI from '../../../api/AuthenticationAPI';

const Container = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: scroll;
`;

class RegistrationPage extends Component {
  isTokenSource = axios.CancelToken.source();

  state = {
    form: {
      company: '',
      address: '',
      phone: '+7(  )   -  -  ',
      link: '',
      contact: '',
      // contactPhone: '',
      contactEmail: '',
      sector: '',
      // service: '', // TODO хз
      // brand: '',
      // products: '', // TODO
      // countries: '',
      // revenue: '',
      // employersCount: '',
      // exportPeriod: '',
      needRetcHelp: '',
    },
    isLoading: false,
    isSnackbarOpen: false,
    snackbarMessage: '',
  };

  componentDidMount() {
    console.log('!!!!', this.props);
    this.setState(get(this.props, 'location.state.registration') || this.state);
  }

  onHandleChangeForm = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    console.log('form', form);
    this.setState({ form });
  };

  onHandleSubmitForm = async event => {
    event.preventDefault();

    const { history } = this.props;
    const { form } = this.state;

    const isFormEmpty = Object.values(form).every(item => item === '');
    if (isFormEmpty) {
      return;
    }
    try {
      if (form.needRetcHelp === DECLINE_RETS) {
        history.push('/end', { registration: form });
        return;
      }
      history.push('/questionnaire', { registration: form });
    } catch (error) {
      if (axios.isCancel(error)) {
        // console.log('Request canceled', error.message);
      } else {
        const { message, errorCode } = error.response.data;
        if (errorCode === '401') {
          this.onToggleSnackbar({ message });
        }
        this.setState({ isLoading: false });
      }
    }
  };

  onToggleSnackbar = ({ message = 'Error' }) => {
    this.setState(state => ({
      isSnackbarOpen: !state.isSnackbarOpen,
      snackbarMessage: message,
    }));
  };

  render() {
    const { form, isLoading, isSnackbarOpen, snackbarMessage } = this.state;
    return (
      <Container>
        <WelcomeMessage />
        <RegistrationForm
          value={form}
          isLoading={isLoading}
          onChange={this.onHandleChangeForm}
          onSubmit={this.onHandleSubmitForm}
        />

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.onToggleSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{snackbarMessage}</span>}
        />
      </Container>
    );
  }
}

RegistrationPage.propTypes = {
  history: PropTypes.object, // React Router Injected
};

export default RegistrationPage;
