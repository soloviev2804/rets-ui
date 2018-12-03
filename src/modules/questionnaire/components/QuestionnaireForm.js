import { withStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '10px',
  },
  formControl: {
    marginTop: '15px',
  },
  button: {
    borderColor: theme.palette.primary.main,
    marginTop: theme.margin,
  },
  heading: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: theme.margin * 2,
  },
});

const QUESTIONS = [
  {
    id: 'q1',
    question:
      'Как бы Вы оценили масштаб присутствия Вашей компании на внутреннем рынке в Вашем секторе?',
    options: [
      'Мы – лидер на российском рынке в нашем секторе',
      'Наша компания входит в 3-5 ведущих компаний в своем секторе в России',
      'Мы – лидеры в регионе и одни из лидеров в стране',
      'Имеем достаточное присутствие в своем регионе, но не представлены в других регионах России',
      'Пытаемся закрепиться и создать присутствие в нашем секторе',
    ],
  },
  {
    id: 'q2',
    question: 'Как широко Ваша компания охватила внутренний рынок?',
    options: [
      'Имеем большую клиентскую базу по всей России',
      'Имеем большую клиентскую базу в своем регионе и отдельных ключевых регионах страны',
      'Имеем большую клиентскую базу только в своем регионе',
      'Работаем с несколькими региональными/национальными заказчиками',
      'Работаем с небольшим количеством локальных клиентов – еще только формируем клиентскую базу',
    ],
  },
];

const QuestionnaireForm = ({ value, onChange, onSubmit, classes }) => {
  return (
    <div>
      <Fragment>
        <img src="/images/logo.png" alt="app logo" className={classes.logo} />
        <Typography variant="display1" gutterBottom className={classes.heading}>
          Анкета по оценке экспортной готовности
        </Typography>
      </Fragment>
      <form className={classes.container} onSubmit={onSubmit}>
        {QUESTIONS.map(({ id, question, options }) => {
          return (
            <FormControl key={id} component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">{question}</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="question"
                onChange={event => onChange(id, event.target.value)}
                value={value[id]}
              >
                {options.map((option, index) => (
                  <FormControlLabel
                    key={id + index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          );
        })}
        <Button
          onClick={onSubmit}
          variant="outlined"
          color="primary"
          fullWidth
          className={classes.button}
          type="submit"
        >
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(QuestionnaireForm);
