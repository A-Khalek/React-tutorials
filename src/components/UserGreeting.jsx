import PropsTypes from 'prop-types'

function UserGreeting(props){
   const welcomeMessage = <h1 className="welcome-message">Well come {props.name}</h1>;
   const loginMessage = <h1 className="login-message">{props.name} Login to continue</h1>;

    return (
        props.isLoggedIn ? welcomeMessage : loginMessage
    );

}
UserGreeting.PropsTypes = {
    isLoggedIn: PropsTypes.bool,
    name: PropsTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: PropsTypes.false,
    name: "User is not logged in",

}

export default UserGreeting

