## Hooks


### How to use componentWillMount() in React Hooks?
```JavaScript
// componentWillUnmount is use for cleanup (like removing event listeners, cancel the timer etc). Say you are adding a event listener in componentDidMount and removing it in componentWillUnmount as below.

componentDidMount() {
  window.addEventListener('mousemove', () => {})
}

componentWillUnmount() {
  window.removeEventListener('mousemove', () => {})
}

// Hook equivalent of above code will be as follows

useEffect(() => {
  window.addEventListener('mousemove', () => {});

  // returned function will be called on component unmount 
  return () => {
    window.removeEventListener('mousemove', () => {})
  }
}, [])

```