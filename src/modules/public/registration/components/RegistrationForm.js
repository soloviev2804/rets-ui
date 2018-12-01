import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/es/Input/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormattedInputs, { TextMaskCustom } from './FormattedInputs';

const SECTORS = [
  {
    value: '1',
    label: 'Компания-экспортёр',
  },
  {
    value: '2',
    label: 'Компания-партнер',
  },
  {
    value: '3',
    label: 'Министерство',
  },
  {
    value: '4',
    label: 'Учебное заведение',
  },
  {
    value: '5',
    label: 'Консалтинговая компания',
  },
  {
    value: '6',
    label: 'Финансовая организация',
  },
  {
    value: '7',
    label: 'Другое',
  },
];

const styles = theme => ({
  container: {
    backgroundColor: '#fff',
    padding: `${theme.margin * 1.5}px ${theme.margin}px`,
    width: window.screen.availWidth < 780 ? '95%' : 450,
    borderRadius: 6,
    margin: '0 auto',
  },
  button: {
    borderColor: theme.palette.primary.main,
    marginTop: theme.margin,
  },
  forgotContainer: {
    textAlign: 'center',
    marginTop: theme.margin * 2,
  },
  phone: {
    paddingTop: '10px',
  },
  contactPhone: {
    paddingTop: '35px',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  sector: {
    marginTop: '15px',
    width: '100%',
  },
});

const RegistrationForm = ({ value, isLoading, onChange, onSubmit, classes }) => {
  const isFormEnabled = Object.values(value).every(item => item !== '');
  return (
    <form className={classes.container} onSubmit={onSubmit}>
      <TextField
        label="Название компании"
        value={value.company}
        name="company"
        onChange={onChange}
        margin="normal"
        fullWidth
        autoFocus
        autoComplete="off"
      />
      <TextField
        label="Адрес"
        value={value.address}
        name="address"
        onChange={onChange}
        margin="normal"
        fullWidth
        type="text"
      />

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="formatted-text-mask-input">Телефон</InputLabel>
        <Input
          value={value.phone}
          onChange={onChange}
          id="formatted-text-mask-input"
          name="phone"
          inputComponent={TextMaskCustom}
          className={classes.phone}
        />
      </FormControl>
      <TextField
        label="Веб-сайт компании"
        value={value.link}
        name="link"
        onChange={onChange}
        margin="normal"
        fullWidth
        type="text"
      />
      <TextField
        label="Контактное лицо"
        value={value.contact}
        name="contact"
        onChange={onChange}
        margin="normal"
        fullWidth
        type="text"
      />
      <FormControl className={classes.formControl}>
        <InputLabel>Номер телефона</InputLabel>
        <Input
          value={value.contactPhone}
          onChange={onChange}
          id="contact-phone-input"
          name="contactPhone"
          inputComponent={TextMaskCustom}
          className={classes.contactPhone}
        />
      </FormControl>
      <TextField
        label="Email"
        value={value.contactEmail}
        name="contactEmail"
        onChange={onChange}
        margin="normal"
        fullWidth
        type="text"
      />

      <TextField
        select
        className={classNames(classes.sector)}
        variant="outlined"
        label="Направление деятельности организации"
        name="sector"
        value={value.sector}
        onChange={onChange}
      >
        {SECTORS.map(option => (
          <MenuItem key={option.value} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Основной бренд(-ы)"
        value={value.brand}
        name="brand"
        onChange={onChange}
        margin="normal"
        fullWidth
        type="text"
      />
      <Button
        onClick={onSubmit}
        variant="outlined"
        color="primary"
        fullWidth
        className={classes.button}
        disabled={!isFormEnabled}
        type="submit"
      >
        {isLoading ? <CircularProgress size={20} /> : 'Зарегистрироваться'}
      </Button>
      {/* <p className={classes.forgotContainer}>
        <Link to="/" >Forgot Password?</Link>
      </p> */}
    </form>
  );
};

RegistrationForm.propTypes = {
  value: PropTypes.object,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  classes: PropTypes.object, // Material UI Injected
};

export default withStyles(styles)(RegistrationForm);
