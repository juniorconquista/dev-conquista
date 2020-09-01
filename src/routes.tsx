import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

export default memo(() => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
    </Switch>
));