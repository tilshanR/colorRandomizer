# RandomizeColor

##  Description  
`RandomizeColor` is a React component that changes the background color of the page and button when clicked. Each click generates a new random color.

##  Features  
 Changes background color of the page.  
 Changes button color dynamically.  
 Uses a simple random color generator.

##  Installation  
1. Clone this repository or copy `RandomizeColor.js` into your React project.  
2. Make sure React is installed in your project.  
3. Import and use `RandomizeColor` in your app.

##  Usage  
Import and include the component in your React app:  

```jsx
import React from 'react';
import RandomizeColor from './RandomizeColor';

function App() {
  return (
    <div>
      <RandomizeColor />
    </div>
  );
}

export default App;
