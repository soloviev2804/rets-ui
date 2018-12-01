import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_TOKEN } from './api/Constants';
// Utils
import PageLoader from './modules/common/PageLoader';

// Routes
const AuthLayout = lazy(() => import('./modules/auth/layout/MainLayout'));
const LoginPage = lazy(() => import('./modules/public/registration/RegistrationPage'));
const NoMatchPage = lazy(() => import('./modules/not-found/NoMatchPage'));

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/registration" />} />
        <Route
          exact
          path="/registration"
          render={props => {
            return <LoginPage {...props} />;
          }}
        />
        <Route
          path="/auth"
          render={props => {
            // return APP_TOKEN.notEmpty ? <AuthLayout {...props} /> : <Redirect to="/login" />;
            return <AuthLayout {...props} />;
          }}
        />
        <Route component={NoMatchPage} />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
