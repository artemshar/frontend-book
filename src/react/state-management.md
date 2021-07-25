# State management

## Redux

#### Concepts

1. **Actions**

An action sends data from your application to the Redux store. An action is conventionally an object with two properties: type and (optional) payload. The type is generally an uppercase string (assigned to a constant) that describes the action. The payload is additional data that may be passed.

``` js
// Action Type
const DELETE_TODO = 'DELETE_TODO'
```

Action creator is a function that returns an **action**.
``` js
const deleteTodo = (id) => {
  // Action
  return {
    type: DELETE_TODO, 
    payload: id
  }
}
```

2. **Reducers**

A reducer is a function that takes two parameters: state and action. A reducer is immutable and always returns a copy of the entire state. A reducer typically consists of a switch statement that goes through all the possible action types.

``` js
const initialState = {
  todos: [
    {id: 1, text: 'Eat'},
    {id: 2, text: 'Sleep'},
  ],
  loading: false,
  hasErrors: false,
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    default:
      return state
  }
}
```

3. **Store**

The Redux application state lives in the store, which is initialized with a reducer. When used with React, a <Provider> exists to wrap the application, and anything within the Provider can have access to Redux.

``` js
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
```
4. **Dispatch**

Dispatch is a method available on the store object that accepts an object which is used to update the Redux state. Usually, this object is the result of invoking an action creator.

``` js
const Component = ({dispatch}) => {
  useEffect(() => {
    dispatch(deleteTodo())
  }, [dispatch])
}
```
5. **Connect**

The ```connect()``` function is one typical way to connect React to Redux. A connected component is sometimes referred to as a container.

**Links**:
* [Redux Tutorial: An Overview and Walkthrough](https://www.taniarascia.com/redux-react-guide/)


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

