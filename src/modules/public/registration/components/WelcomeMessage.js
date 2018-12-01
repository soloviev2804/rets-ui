import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  heading: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: theme.margin * 2,
  },
  logo: {
    width: 250,
    heading: 250,
    objectFit: 'cover',
    paddingBottom: '10px',
  },
});

const WelcomeMessage = ({ classes }) => {
  return (
    <Fragment>
      <img src="/images/logo.png" alt="app logo" className={classes.logo} />
      <Typography variant="display1" gutterBottom className={classes.heading}>
        Регистрация
      </Typography>
    </Fragment>
  );
};

WelcomeMessage.propTypes = {
  classes: PropTypes.object, // Material UI Injected
};

export default withStyles(styles)(WelcomeMessage);
