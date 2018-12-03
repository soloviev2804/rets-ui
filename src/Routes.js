import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_TOKEN } from './api/Constants';
// Utils
import PageLoader from './modules/common/PageLoader';
import FinalPage from './modules/final/FinalPage';
import CheckInProgressPage from './modules/check-in-progress/CheckInProgressPage';

// Routes
const QuestionnairePage = lazy(() => import('./modules/questionnaire/QuestionnairePage'));
const LoginPage = lazy(() => import('./modules/public/registration/RegistrationPage'));
const NoMatchPage = lazy(() => import('./modules/not-found/NoMatchPage'));

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/registration"/>}/>
        <Route
          exact
          path="/registration"
          render={props => {
            return <LoginPage {...props} />;
          }}
        />
        <Route
          path="/questionnaire"
          render={props => {
            console.log('props', props);
            return <QuestionnairePage {...props} />;
          }}
        />
        <Route
          path="/end"
          render={props => {
            return <FinalPage {...props} />;
          }}
        />
        <Route
          path="/check-in-progress"
          render={props => {
            return <CheckInProgressPage {...props} />;
          }}
        />
        <Route component={NoMatchPage}/>
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
