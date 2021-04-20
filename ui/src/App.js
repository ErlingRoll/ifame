import React from 'react';
import { Route, HashRouter as Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useSelector } from 'react-redux';
import selectors from './store/selectors';
import './App.module.css';

// Assets
import ROUTES from './routes';

// Components
import Dashboard from './views/dashboard/dashboard';
import Navbar from './views/navbar/navbar';
import Login from './views/login/login';
import Cookbook from './views/cookbook/cookbook';
import Recipes from './views/cookbook/views/recipes/recipes';
import Statistics from './views/statistics/statistics';
import Competition from './views/competition/competition';
import Tutorial from './views/tutorial/tutorial';

const history = createBrowserHistory();

function App() {
    let isLoggedIn = useSelector(selectors.user.isLoggedIn);

    return (
        <div className={'h-full pt-16 bg-gray-100'}>
            <Navbar />
            <Router history={history}>
                {isLoggedIn ? (
                    <React.Fragment>
                        <Route
                            exact
                            path={ROUTES.DASHBOARD}
                            component={Dashboard}
                        />
                        <Route
                            exact
                            path={ROUTES.COOKBOOK}
                            component={Cookbook}
                        />
                        <Route
                            exact
                            path={ROUTES.RECIPES}
                            component={Recipes}
                        />
                        <Route
                            exact
                            path={ROUTES.STATISTICS}
                            component={Statistics}
                        />
                        <Route
                            exact
                            path={ROUTES.COMPETITION}
                            component={Competition}
                        />
                        <Route
                            exact
                            path={ROUTES.TUTORIAL}
                            component={Tutorial}
                        />
                        <Route exact path={ROUTES.LOGIN}>
                            <Redirect to={ROUTES.DASHBOARD} />
                        </Route>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Redirect from={'*'} to={ROUTES.LOGIN} />
                        <Route exact path={ROUTES.LOGIN} component={Login} />
                    </React.Fragment>
                )}
            </Router>
        </div>
    );
}

export default App;
