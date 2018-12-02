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

const Container = styled.section`
  flex-direction: column;
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
    width: window.screen.availWidth < 780 ? '95%' : 600,
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

const FinalPage = ({ classes }) => {
  return (
    <Container>
      <Fragment>
        <img src="/images/logo.png" alt="app logo" className={classes.logo} />
        <Typography variant="display1" gutterBottom className={classes.heading}>
          Благодарим Вас за участие в анкетировании
        </Typography>
      </Fragment>
      <form className={classes.container}>
        <Typography>
          Полученная от Вас информация свидетельствует о том, что Ваш бизнес обладает потенциалом
          роста на внутреннем рынке. Сфокусировавшись на российском рынке, Вы сможете сформировать
          достаточный объём ресурсов для выхода на зарубежный рынок.
        </Typography>
        <Typography>
          На текущей стации развития бизнеса Вам целесообразно использовать электронные торговые
          площадки в качестве простых и низкозатратных вариантов экспорта Вашей продукции и оценки
          её востребованности на соответствующих рынках.
        </Typography>
      </form>
    </Container>
  );
};

export default withStyles(styles)(FinalPage);
