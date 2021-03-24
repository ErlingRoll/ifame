import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useSelector } from 'react-redux';
import selectors from './store/selectors';

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

const history = createBrowserHistory();

function App() {
    let isLoggedIn = useSelector(selectors.user.isLoggedIn);
    isLoggedIn = true;

    return (
        <div>
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
                    </React.Fragment>
                ) : (
                    <Route exact path={ROUTES.LOGIN} component={Login} />
                )}
            </Router>
        </div>
    );
}

export default App;
