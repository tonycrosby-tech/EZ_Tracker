// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const ProtectedRoute = ({ component: Comp, LoggedIn, path, ...rest }) => {
//     return (
//       <Route
//         path={path}
//         {...rest}
//         render={(props) => {
//           return LoggedIn ? (
//             <Comp {...props} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: {
//                   prevLocation: path,
//                   error: "You need to login first!",
//                 },
//               }}
//             />
//           );
//         }}
//       />
//     );
//   };

// export default ProtectedRoute;
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Subscription from "../pages/Subscription";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        console.log(props),
            props.location.loggedIn === true
            ? <Route path="/subscription" component={Subscription} />
            : <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
    )} />
);

export default PrivateRoute;