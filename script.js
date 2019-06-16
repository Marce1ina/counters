const Counter = React.createClass({
    getDeafultProps: () => {
        console.log("Setting default prop values in order to avoid errors");
    },

    getInitialState: () => {
        console.log("Setting initial state value");
        return { counter: 0 };
    },

    componentWillMount: () => {
        console.log(
            "Performing operations on props and/or state to prepare for the first render, should be used only in root component"
        );
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        console.log("Rendering component in the DOM");

        const style = { marginLeft: "10px", fontSize: "24px" };

        return React.createElement(
            "div",
            {},
            React.createElement("span", {}, "Licznik " + this.state.counter),
            React.createElement("span", { onClick: this.increment, style: style }, "+"),
            React.createElement("span", { onClick: this.decrement, style: style }, "-")
        );
    },

    componentDidMount: () => {
        console.log(
            "Initializing functionalities that require DOM nodes; adding event listeners; performing operations that depend on elements dimensions; initializing API calls"
        );
    },

    componentWillReceiveProps: () => {
        console.log("Acting on particular prop changes to trigger state transitions");
    },

    shouldComponentUpdate: () => {
        console.log(
            "Deciding whether changing of certain prop or state should cause re-rendering; improving performance"
        );
        return true;
    },

    componentWillUpdate: () => {
        console.log("Used instead of componentWillReceiveProps on a component that also has shouldComponentUpdate");
    },

    componentDidUpdate: () => {
        console.log("Updating the DOM in response to prop or state changes");
    },

    componentWillUnmount: () => {
        console.log("Unsubscribing from events, clearing timers, cancelling api calls");
    }
});

const App = React.createClass({
    render: () =>
        React.createElement(
            "div",
            {},
            React.createElement(Counter, { key: 1 }),
            React.createElement(Counter, { key: 2 }),
            React.createElement(Counter, { key: 3 })
        )
});

window.addEventListener("DOMContentLoaded", function() {
    const appContainer = document.getElementById("app");
    const app = React.createElement(App);
    ReactDOM.render(app, appContainer);
});
