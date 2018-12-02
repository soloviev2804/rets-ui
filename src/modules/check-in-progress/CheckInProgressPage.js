import { withStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #607d8b;
  width: 100%;
  overflow: scroll;
`;

const styles = theme => ({
  container: {
    backgroundColor: '#fff',
    padding: `${theme.margin * 1.5}px ${theme.margin}px`,
    width: window.screen.availWidth < 780 ? '95%' : 300,
    borderRadius: 6,
    margin: '0 auto',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  logo: {
    width: 250,
    heading: 250,
    objectFit: 'cover',
    paddingBottom: '10px',
  },
  formControl: {
    marginTop: '15px',
  },
  heading: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: theme.margin * 2,
  },
});

const CheckInProgressPage = ({ classes }) => {
  return (
    <Container>
      <Fragment>
        <img src="/images/logo.png" alt="app logo" className={classes.logo} />
      </Fragment>
      <form className={classes.container}>
        <Typography variant="subtitle1">Ожидайте решение клиентского менеджера</Typography>
        <TextField
          id="outlined-read-only-input"
          label="Вы заполнили анкету"
          defaultValue={moment().format('DD.MM.YYYY')}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          fullWidth
        />
        <Typography color={'textSecondary'}>
          Клиентский менеджер проведёт оценку результатов Вашего анкетирования в срок не более 5
          рабочих дней
        </Typography>
      </form>
    </Container>
  );
};

export default withStyles(styles)(CheckInProgressPage);
