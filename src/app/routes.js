import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from '../Pages';

export default () => (
    <div>
        <Switch>
            <RouterProxy exact path="/home" component={Home} title='myReact' />
            <Redirect to='/home' />
        </Switch>
    </div>
);

// eslint-disable-next-line react/prop-types
const RouterProxy = ({ component: Component, ...rest }) => {
    console.log(rest);
    if(rest.title ) document.title = rest.title;

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
