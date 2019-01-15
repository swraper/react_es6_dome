import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import refreshTitle from '../utils/refreshTitle';

import { Home } from '../Pages';

export default () => (
    <div>
        <Switch>
            <RouterProxy exact path="/home" component={Home} title='myReact' />
            <Redirect to='/home' />
        </Switch>
    </div>
);

const RouterProxy = ({ component: Component, ...rest }) => {
    console.log(rest);
    rest.title && refreshTitle(rest.title);

    let JoinPgae = false;

    if (
        rest.path == '/home'
    ) {
        JoinPgae = true;
    }

    return <Route {...rest}
        render={(props) =>
            JoinPgae
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/respond',
                        state: { to: rest }
                    }}
                />
        }
    />;
};
