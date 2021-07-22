# State management

## Context API

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.


```JavaScript
// How to create a new context
const ThemeContext = React.createContext('light'); // 'light' is default value

// How to use
class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

```


**Links**:
* [reactjs.org/docs/context.html](https://reactjs.org/docs/context.html)
* [Using Context API in React (Hooks and Classes)](https://www.taniarascia.com/using-context-api-in-react/)

## Redux

#### Concepts

1. actions
2. reducers
3. store
4. dispatch
5. middleware

**Links**:
* [Redux Tutorial: An Overview and Walkthrough](https://www.taniarascia.com/redux-react-guide/)
