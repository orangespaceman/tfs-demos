# React guide

> _These notes are not intended as a comprehensive guide to the topic. Their purpose is to guide you through the main areas you should learn about, with resources provided for further exploration. The goal is for you to learn enough to complete the associated challenge._

## Introducing Single Page Applications (SPAs)

- Traditional websites load a new HTML page from the server every time the user navigates
- Single Page Applications load one main HTML page and dynamically update the content using JavaScript
- This makes navigation faster and allows for a smoother, more app-like experience
- SPAs often communicate with APIs to load or update data without a full page reload
- Frameworks like React, Vue, and Angular are commonly used to build SPAs efficiently

### Further Learning
- [MDN Web Docs: Single Page Applications](https://developer.mozilla.org/en-US/docs/Glossary/SPA)
- [FreeCodeCamp: What is a Single Page Application?](https://www.freecodecamp.org/news/single-page-apps-introduction/)


---

## Introducing React

- React is a JavaScript library for building user interfaces.
- It focuses on components, which are small, reusable pieces of UI that combine to form an application
- React can be used on its own or with additional tools such as routers, state management libraries, and build tools

### Further Learning
- [React Official Documentation (react.dev)](https://react.dev/learn)
- [React: Thinking in React](https://react.dev/learn/thinking-in-react)
- [MDN: React Overview](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)


---

## Installing Node.js and npm

### What is it?
- Node.js is a JavaScript runtime
- We’re used to using JavaScript in a browser
- Node.js allows us to run JavaScript outside the browser
- npm (Node Package Manager) is included with Node.js
- It is used to install and manage packages (also known as dependencies). This is third-party code that we can incorporate into our projects
- We can use it to install React, and other tools

### Why do we need it?
- We need a way to compile code
- We also need a way to manage our third-party dependencies
- Node.js lets us run these tools on our computers
- npm provides access to the open-source libraries

### How do we use it?
1. Visit [https://nodejs.org](https://nodejs.org)
2. Install the **LTS version** of Node
3. Run these commands to check that it has worked:
   ```bash
   node -v
   npm -v
   ```
4. Create a test folder and initialise npm:
   ```bash
   mkdir test-project
   cd test-project
   npm init -y
   ```
5. Check that a `package.json` file has been created

### Further Learning
- [Node.js Official Website](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [npm Docs: About npm](https://docs.npmjs.com/about-npm)
- [MDN: Introduction to Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)


---

## Installing React with Vite, and create a “hello world” app

### What is it?
- Vite is a modern build tool that we can use to set up a new project
- It is faster and simpler than older tools like Webpack and Create React App

### Why do we need it?
- Vite is quick to get running
- We can use it to compile our code during development
- It also creates optimised builds for production
- It abstracts away complex configuration

### How do we use it?
1. Create a new Vite app:
   ```bash
   npm create vite@latest my-react-app
   ```
2. Choose **React**
3. Move into the new folder and install dependencies:
   ```bash
   cd my-react-app
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open the local server URL (shown in terminal, e.g. `http://localhost:5173/`) and confirm the React starter page loads
6. Edit `src/App.jsx` and check the browser updates accordingly

### Further Learning
- [Vite Official Guide](https://vite.dev/guide/)
- [React: Getting Started Tutorial](https://react.dev/learn/start-a-new-react-project)
- [MDN: Setting up a modern front-end build pipeline](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Build_tools)


---

## JSX

### What is it?
- JSX stands for JavaScript XML
- It allows us to write HTML-like syntax inside JavaScript files
- JSX is not HTML, React converts it into JavaScript function calls


### Why do we need it?
- It provides a cleaner, more readable way to describe the structure of UI components
- JSX allows developers to mix markup with logic, keeping related code together
- It helps React update only the parts of the DOM that change

### How do we use it?
1. Write JSX inside a React component file, usually with a `.jsx` file extension (or `.tsx` if it's TypeScript)
2. Each component returns a single root element
3. Embed JavaScript within JSX using `{}` braces.
   ```jsx
   function Greeting({ name }) {
     return <h1 className="title">Hello, {name}</h1>
   }

   export default Greeting
   ```

### Further Learning
- [React Docs: Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React Docs: JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [MDN: JSX in React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components#using_jsx)

---

## Components

### What is it?
- Components are the building blocks of a React application
- Each component is a small, reusable piece of UI that can contain its own structure and logic
- Every React app starts with a main component (usually `App`) which renders other components inside it

### Why do we need it?
- Components make code more modular and easier to maintain
- They allow developers to reuse UI patterns across multiple parts of an application
- Each component can handle its own state and logic, keeping responsibilities clear and separate

### How do we use it?
1. Create a new file in the `src` folder, for example `Header.jsx`
2. Define a function that returns JSX
   ```jsx
   function Header() {
     return (
       <header>
         <h1>My React App</h1>
       </header>
     )
   }

   export default Header
   ```
3. Import and use the component inside another file, such as `App.jsx`
   ```jsx
   import Header from './Header'

   function App() {
     return (
       <div>
         <Header />
         <p>Welcome to the site</p>
       </div>
     )
   }

   export default App
   ```
4. Components must begin with a capital letter to be recognised by React

### Further Learning
- [React Docs: Your First Component](https://react.dev/learn/your-first-component)
- [React Docs: Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)
- [MDN: Introduction to Components](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)

---

## Props

### What is it?
- Props are short for **properties**
- They allow data to be passed from a parent component to a child component
- Props make components reusable by giving them configurable values
- In React, props are read-only, meaning a component cannot change the props it receives

### Why do we need it?
- Props let components communicate with each other
- They make components flexible and adaptable to different data
- They allow you to separate layout from content so one component can display many variations

### How do we use it?
1. Create a new file called `Welcome.jsx`
2. Define a component that accepts props
   ```jsx
   function Welcome({ name }) {
     return <h2>Hello, {name}</h2>
   }

   export default Welcome
   ```
3. Import and use it inside `App.jsx`
   ```jsx
   import Welcome from './Welcome'

   function App() {
     return (
       <div>
         <Welcome name="Alice" />
         <Welcome name="Bob" />
       </div>
     )
   }

   export default App
   ```
4. Confirm each instance displays a different greeting

### Further Learning
- [React Docs: Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [React Docs: Props vs State](https://react.dev/learn/state-a-components-memory#comparing-props-and-state)
- [MDN: Props in React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components#passing_data_using_props)

---

## Handling Events

### What is it?
- Handling events means responding to user actions such as clicks, typing, or submitting a form
- React uses a consistent system for events that works across all browsers
- Event names use camelCase, and event handlers are passed as functions

### Why do we need it?
- Interactivity in a React app depends on responding to user input
- Events let you trigger updates to state, display messages, or control navigation
- Understanding event handling is key to creating dynamic, responsive components

### How do we use it?
1. Create a new file `ButtonExample.jsx`
2. Define a component with a button and an event handler
   ```jsx
   function ButtonExample() {
     function handleClick() {
       alert('Button clicked')
     }

     return <button onClick={handleClick}>Click me</button>
   }

   export default ButtonExample
   ```
3. Import and render the component inside `App.jsx`
4. Test that clicking the button shows an alert
5. Try using other events such as `onChange`, `onMouseEnter`, or `onSubmit`

### Further Learning
- [React Docs: Responding to Events](https://react.dev/learn/responding-to-events)
- [MDN: Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [React Docs: State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)

---

## Hooks

### What is it?
- Hooks are special functions that let React components use features such as state and lifecycle logic
- They were introduced to replace the need for class components
- Common Hooks include `useState`, `useEffect`, `useContext`, and `useRef`
- All Hooks start with the word `use`

### Why do we need it?
- Hooks make components simpler and more reusable
- They allow you to share logic between components without rewriting code
- They remove the need to learn class syntax or lifecycle methods

### How do we use it?
1. Import the Hook you need from React
2. Call the Hook inside your component’s function (never in loops, conditions, or nested functions)
   ```jsx
   import { useState } from 'react'

   function Example() {
     const [text, setText] = useState('Hello')
     return <p>{text}</p>
   }

   export default Example
   ```

### Further Learning
- [React Docs: Using Hooks](https://react.dev/reference/react)
- [React Docs: Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- [MDN: Introducing Hooks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_Hooks)

---

## useState

### What is it?
- `useState` is a Hook that lets you store and update data inside a component
- State represents information that can change while the app is running
- Each time state changes, the component re-renders with the new value

### Why do we need it?
- Without state, components would be static and unable to react to user input
- State lets components keep track of changing values like form inputs or counts
- It helps manage interactive behaviour and dynamic updates

### How do we use it?
1. Import `useState` from React
2. Create a state variable and a function to update it
   ```jsx
   import { useState } from 'react'

   function Counter() {
     const [count, setCount] = useState(0)

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increase</button>
       </div>
     )
   }

   export default Counter
   ```
3. Add more controls to decrease or reset the count
4. Each state update triggers a re-render

### Further Learning
- [React Docs: useState](https://react.dev/reference/react/useState)
- [React Docs: State - A Component’s Memory](https://react.dev/learn/state-a-components-memory)
- [MDN: Managing State in React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_state)

---

## useEffect

### What is it?
- `useEffect` is a Hook for running side effects in components
- Side effects are actions that affect something outside the component, such as fetching data or interacting with the browser
- It runs after the component renders

### Why do we need it?
- Components often need to synchronise with external data or systems
- `useEffect` helps manage effects like network requests, event listeners, or updating the document title

### How do we use it?
1. Import `useEffect` from React
2. Write an effect that runs after render
   ```jsx
   import { useEffect, useState } from 'react'

   function Timer() {
     const [count, setCount] = useState(0)

     useEffect(() => {
       const interval = setInterval(() => setCount(c => c + 1), 1000)
       return () => clearInterval(interval)
     }, [])

     return <p>Seconds: {count}</p>
   }

   export default Timer
   ```
3. The empty array `[]` ensures the effect only runs once when the component mounts

### Further Learning
- [React Docs: useEffect](https://react.dev/reference/react/useEffect)
- [React Docs: Synchronising with Effects](https://react.dev/learn/synchronizing-with-effects)
- [MDN: Side Effects in React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_lifecycle#using_the_useeffect_hook)

---

## Conditional Rendering

### What is it?
- Conditional rendering means showing or hiding parts of the UI based on certain conditions
- In React, this is done using JavaScript expressions inside JSX

### Why do we need it?
- Real apps often need to display different content depending on state or props
- Conditional rendering helps create responsive, context-aware interfaces

### How do we use it?
```jsx
function Message({ loggedIn }) {
  return (
    <div>
      {loggedIn ? <p>Welcome back</p> : <p>Please log in</p>}
    </div>
  )
}

export default Message
```
- Use `&&` for short conditions and ternary operators for two outcomes

### Further Learning
- [React Docs: Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [MDN: Conditional Statements in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

---

## Loops with .map

### What is it?
- `.map()` is a JavaScript method that transforms arrays
- In React, it is used to create lists of elements dynamically

### Why do we need it?
- Data often comes as arrays, and we need to render each item as a component or HTML element
- `.map()` helps render dynamic lists efficiently

### How do we use it?
```jsx
function List() {
  const items = ['Apple', 'Banana', 'Cherry']

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default List
```
- Always include a `key` prop for each list item to help React track updates

### Further Learning
- [React Docs: Rendering Lists](https://react.dev/learn/rendering-lists)
- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

## Using Forms

### What is it?
- Forms let users enter and submit data
- In React, form inputs are controlled by state so that React manages the value

### Why do we need it?
- Forms allow interaction and data input in almost every web app
- Controlled components make it easier to validate and manage input

### How do we use it?
```jsx
import { useState } from 'react'

function FormExample() {
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Hello ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormExample
```

### Further Learning
- [React Docs: Forms](https://react.dev/learn/forms)
- [MDN: Working with Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)

---

## Prop Drilling and Lifting State

### What is it?
- **Prop drilling** happens when data is passed through multiple layers of components unnecessarily
- **Lifting state** means moving shared state up to a common ancestor component

### Why do we need it?
- These techniques help manage data flow between components
- They ensure that state lives where it logically belongs and can be accessed where needed

### How do we use it?
```jsx
function Parent() {
  const [message, setMessage] = useState('Hello')

  return <Child message={message} />
}

function Child({ message }) {
  return <p>{message}</p>
}
```
- Move state to the nearest common parent of all components that use it

### Further Learning
- [React Docs: Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [React Docs: Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

---

## useContext

### What is it?
- `useContext` provides a way to share data without passing props manually through every level
- It uses a Context object created with `React.createContext()`

### Why do we need it?
- It prevents repetitive prop drilling
- Useful for global data like themes, user settings, or authentication

### How do we use it?
```jsx
import { createContext, useContext } from 'react'

const ThemeContext = createContext('light')

function Child() {
  const theme = useContext(ThemeContext)
  return <p>Theme: {theme}</p>
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  )
}

export default App
```

### Further Learning
- [React Docs: useContext](https://react.dev/reference/react/useContext)
- [React Docs: Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

---

## Async Data Fetching

### What is it?
- Fetching data means requesting information from an external source such as an API
- React uses `useEffect` with `fetch` or libraries like `axios` to load data

### Why do we need it?
- Most apps rely on remote data
- Understanding how to fetch and display data is essential for building real-world apps

### How do we use it?
```jsx
import { useEffect, useState } from 'react'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}

export default Users
```

### Further Learning
- [React Docs: Fetching Data](https://react.dev/learn/synchronizing-with-effects#fetching-data)
- [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---

## Using third party packages

Small, focused packages can save time and reduce bugs. Add them when they clearly improve readability or remove boilerplate. Keep the number small and review them regularly

### A simple example to add now

Format dates with `date-fns`

1. Install
   ```bash
   npm install date-fns
   ```

2. Create a tiny helper so your components stay clean
   `src/lib/formatDate.js`
   ```js
   import { parseISO, format } from 'date-fns'

   export function formatDate(isoString) {
     try {
       return format(parseISO(isoString), 'd LLL yyyy')
     } catch {
       return isoString
     }
   }
   ```

3. Use it in any component that shows a date
   `src/components/Users/Users.jsx`
   ```jsx
   import { useEffect, useState } from 'react'
   import { formatDate } from '../../lib/formatDate'

   export default function Users() {
     const [users, setUsers] = useState([])

     useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
         .then(r => r.json())
         .then(setUsers)
     }, [])

     return (
       <ul>
         {users.map(u => (
           <li key={u.id}>
             <strong>{u.name}</strong>
             <span> joined {formatDate('2020-05-01')}</span>
           </li>
         ))}
       </ul>
     )
   }
   ```

### Where it goes

- Put small, reusable helpers in one location in your codebase, e.g. `src/lib` or similar
- Keep third party usage behind your own helper when possible. It makes swapping or upgrading easier

### Good habits with packages

- Read the project's README and check its popularity on GitHub
- Ensure the new package is added to the `package.json` file (this should happen automatically when you install it)
- Remove any packages you no longer use
- Run `npm audit` occasionally to check you don't have any dangerous dependencies, you may need to update them if so

---

## Routing

### What is it?
- Routing controls navigation between different parts of a React app
- It is commonly handled by libraries such as React Router

### Why do we need it?
- SPAs use routing to change views without reloading the page
- It makes the app behave more like a traditional website

### How do we use it?
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

### Further Learning
- [React Router Docs](https://reactrouter.com/en/main/start/tutorial)
- [React Docs: Adding Interactivity](https://react.dev/learn/adding-interactivity)

---

## Styling Approaches

### What is it?
- React supports multiple ways to style components
- Common options include CSS files, CSS Modules, inline styles, and libraries such as Tailwind or styled-components

### Why do we need it?
- Styling gives structure and visual clarity to an application
- Choosing a consistent method makes code easier to maintain

### How do we use it?
```jsx
import './App.css'

function App() {
  return <h1 className="title">Hello React</h1>
}

export default App
```

### Further Learning
- [React Docs: Styling](https://react.dev/learn/styling)
- [MDN: CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)

---

## Debugging with React Dev Tools

### What is it?
- React Dev Tools is a browser extension for inspecting React components and state
- It shows the component hierarchy and current prop and state values

### Why do we need it?
- Debugging helps you understand what is happening in your app
- Dev Tools make it easier to find logic or state errors

### How do we use it?
1. Install React Developer Tools for your browser
2. Open the React tab in DevTools while your app is running
3. Select a component to inspect its props, state, and rendered output

### Further Learning
- [React Docs: Developer Tools](https://react.dev/tools/react-developer-tools)
- [MDN: Browser DevTools Overview](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)

---

## Deploying to Netlify

### What is it?
- Netlify is a hosting platform for static front-end projects
- It connects directly to GitHub or other git providers for continuous deployment

### Why do we need it?
- Deployment makes your app accessible on the web
- Netlify simplifies the process with minimal setup

### How do we use it?
1. Push your project to a GitHub repository
2. Go to [Netlify](https://www.netlify.com/) and connect your repository
3. Choose the Vite build command: `npm run build` and publish directory: `dist`
4. Netlify builds and deploys automatically

### Further Learning
- [Netlify Docs: Deploy a React App](https://docs.netlify.com/integrations/frameworks/react/)
- [Vite Docs: Deploying a Vite App](https://vite.dev/guide/static-deploy.html)


---

## State Management (Redux Toolkit or Zustand)

### What is it?
- State management libraries handle shared or complex application state
- Redux Toolkit provides a standard way to write Redux logic
- Zustand is a lightweight alternative for simpler use cases

### Why do we need it?
- Some state must be accessed by many components
- Centralised state management simplifies updates and reduces prop drilling

### How do we use it?
```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch } from 'react-redux'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 }
  }
})

const store = configureStore({ reducer: { counter: counterSlice.reducer } })

function Counter() {
  const count = useSelector(s => s.counter.value)
  const dispatch = useDispatch()
  return <button onClick={() => dispatch(counterSlice.actions.increment())}>{count}</button>
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
```

### Further Learning
- [Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

---

## Thunks

### What is it?
- A thunk is a function that allows you to handle asynchronous logic in Redux
- It enables you to dispatch actions after async operations like data fetching

### Why do we need it?
- Apps often need to load data before updating state
- Thunks help manage async state updates cleanly

### How do we use it?
```jsx
import { createAsyncThunk, createSlice, configureStore } from '@reduxjs/toolkit'

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
})

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => action.payload)
  }
})

const store = configureStore({ reducer: { users: usersSlice.reducer } })
```

### Further Learning
- [Redux Toolkit: createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)
- [MDN: Async Programming Concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

---

## Auth

### What is it?
- Authentication manages user identity and access control
- It can involve login forms, tokens, and secure routes

### Why do we need it?
- Many apps restrict access to certain areas or data
- Auth ensures that only authorised users can view or modify protected resources

### How do we use it?
- Protect routes using React Router and conditional rendering
- Store auth tokens securely
- Avoid localStorage for sensitive data, HTTP only tokens can help

### Further Learning
- [React Router: Protected Routes](https://reactrouter.com/en/main/start/tutorial#protecting-routes)

---

## Environment variables

APIs often need keys. Do not hard code secrets in your codebase. Instead you can keep them in an `.env` file that you ***don't*** commit to git

Instead you can create an example `.env.example` file that you ***do*** commit to git. This file contains the names of environmental variables you use in your app, but not their values

If you don't already have one, add a `.gitignore` file in the root of your repo, and add the following line:

```
.env
```

Next, create a `.env` file at the project root and add any important values, such as:

```
VITE_API_BASE=https://api.example.com
```

Note that when using Vite, environmental variable names must start with `VITE_API_`

You can then read it in your JavaScript code with `import.meta.env.VITE_API_BASE` when using Vite:

```
const apiUrl = import.meta.env.VITE_API_BASE;
```

**Further learning**
- [Vite environment variables guide](https://vite.dev/guide/env-and-mode.html)

---


## Error boundaries

Catch render errors and show a friendly message rather than a blank screen

- Add one near the top of the component tree and another around risky areas like routes or data-heavy pages

**Further learning**
- [React Docs: Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

---

## Testing the UI

Add one or two tests to prove behaviour

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) focuses on what the user sees
- Start with a test that renders a component and asserts that text is on screen

Example:
```js
import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

test('renders greeting', () => {
  render(<Greeting name="Alice" />)
  expect(screen.getByText(/Alice/)).toBeInTheDocument()
})
```
