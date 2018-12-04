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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

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
    width: window.screen.availWidth < 780 ? '95%' : 400,
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
  heading: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: theme.margin * 2,
  },
});

const RoadmapPage = ({ classes }) => {
  return (
    <Container>
      <Fragment>
        <img src="/images/logo.png" alt="app logo" className={classes.logo} />
      </Fragment>
      <Typography variant="display1" gutterBottom className={classes.heading}>
        Дорожная карта
      </Typography>

      <form className={classes.container}>
        {/*<Typography variant="subtitle1">Дорожная карта</Typography>*/}
        <List className={classes.root}>
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Позиционирование" secondary="выбрать фундаментальное направление" />
          </ListItem>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary="Продукт" secondary="создать устойчивое конкурентное преимущество" />
          </ListItem>
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary="Анализ" secondary="определить целевую аудиторию и конкурентов" />
          </ListItem>
        </List>
      </form>
    </Container>
  );
};

export default withStyles(styles)(RoadmapPage);
