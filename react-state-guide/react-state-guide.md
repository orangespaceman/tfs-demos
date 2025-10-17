# React State Guide

> _These notes are not intended as a comprehensive guide to the topic. Their purpose is to guide you through the main areas you should learn about, with resources provided for further exploration. The goal is for you to learn enough to complete the associated challenge._

These notes introduce the concept of state in React, the different ways it can be managed, and when each approach makes sense.

They build on the core React concepts you have seen previously - components, props, and hooks.

---

## What is state?

State is data that changes over time and affects what your component renders.

Examples:
- Whether a modal is open
- The text in an input field
- The list of planets fetched from an API
- The current user who is signed in

React re-renders components when state changes, so the user interface always matches the current data.

**Further learning**
- [React Docs: State - A Component’s Memory](https://react.dev/learn/state-a-components-memory)
- [React Docs: Thinking in React](https://react.dev/learn/thinking-in-react)

---

## Local state (inline, component-level)

Each component can hold its own state with the `useState` hook.

### When to use it
- Data only needed within a single component or a small tree
- Examples: toggles, form fields, counters, modals

### Example
```jsx
import { useState } from 'react'

function PlanetSearch() {
  const [query, setQuery] = useState('')

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search planets"
      />
      <p>Searching for: {query}</p>
    </div>
  )
}
```

### Limitations
As your app grows, you might need to share state between distant components.
At first, you can “lift” the state up and pass it down through props.

---

## Lifting state up and passing props

When multiple components need access to the same data, move the state to their nearest common ancestor and pass it down via props.

### Example
```jsx
function PlanetDashboard() {
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  return (
    <>
      <PlanetList onSelect={setSelectedPlanet} />
      <PlanetDetails planet={selectedPlanet} />
    </>
  )
}

function PlanetList({ onSelect }) {
  return (
    <ul>
      <li onClick={() => onSelect('Jupiter')}>Jupiter</li>
      <li onClick={() => onSelect('Saturn')}>Saturn</li>
    </ul>
  )
}

function PlanetDetails({ planet }) {
  if (!planet) return <p>Select a planet to view details</p>
  return <p>Details for {planet}</p>
}
```

### Pros
- Simple and explicit
- Easy to debug and follow data flow

### Cons
- Passing props through many layers (prop drilling) can become messy

**Further learning**
- [React Docs: Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)

---

## Global state with Context

React’s built-in `useContext` hook lets you share state without prop drilling.

### When to use it
- Data that needs to be accessible in many places (e.g. current theme, user session, app settings)
- Lightweight, small-scale global state

### Example
```jsx
import { createContext, useContext, useState } from 'react'

const PlanetContext = createContext()

export function PlanetProvider({ children }) {
  const [planet, setPlanet] = useState('Earth')
  return (
    <PlanetContext.Provider value={{ planet, setPlanet }}>
      {children}
    </PlanetContext.Provider>
  )
}

export function usePlanet() {
  return useContext(PlanetContext)
}

// Example usage
function PlanetName() {
  const { planet, setPlanet } = usePlanet()
  return (
    <div>
      <p>Current planet: {planet}</p>
      <button onClick={() => setPlanet('Mars')}>Go to Mars</button>
    </div>
  )
}
```

### Pros
- No need for prop drilling
- Built into React

### Cons
- Can cause unnecessary re-renders if used for frequently changing data
- Not ideal for large, complex state

**Further learning**
- [React Docs: Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

---

## Scalable state management - Redux Toolkit and Zustand

For larger projects, you may outgrow Context or want more predictable state management.
Two common modern solutions are **Redux Toolkit** and **Zustand**.

---

### Redux Toolkit (RTK)

**Redux Toolkit** is the official, recommended way to use Redux as of 2025.
It simplifies setup and reduces boilerplate compared with older Redux patterns.

### When to use it
- Complex state that needs to be predictable and traceable
- Multiple sources of data that must stay in sync
- Features like caching, persistence, or async logic (thunks)

### Example (Redux Toolkit)
```bash
npm install @reduxjs/toolkit react-redux
```

```jsx
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit'

const planetsSlice = createSlice({
  name: 'planets',
  initialState: [],
  reducers: {
    addPlanet: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addPlanet } = planetsSlice.actions

export const store = configureStore({
  reducer: { planets: planetsSlice.reducer }
})
```

```jsx
// PlanetApp.jsx
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store, addPlanet } from './store'

function PlanetList() {
  const planets = useSelector(state => state.planets)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(addPlanet('Neptune'))}>Add Neptune</button>
      <ul>{planets.map(p => <li key={p}>{p}</li>)}</ul>
    </div>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PlanetList />
    </Provider>
  )
}
```

### Pros
- Centralised, predictable state management
- Time-travel debugging and middleware
- Scales well in large teams

### Cons
- More setup than Context
- May feel heavy for small projects

**Further learning**
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Quick Start](https://react-redux.js.org/tutorials/quick-start)

---

### Zustand

**Zustand** is a lightweight alternative to Redux Toolkit with a simpler API and minimal setup.

### When to use it
- Medium-scale apps needing shared state
- Simpler than Redux but more efficient than Context for frequent updates

### Example
```bash
npm install zustand
```

```jsx
import { create } from 'zustand'

const usePlanetStore = create(set => ({
  planets: ['Earth'],
  addPlanet: planet => set(state => ({ planets: [...state.planets, planet] }))
}))

function PlanetList() {
  const { planets, addPlanet } = usePlanetStore()
  return (
    <div>
      <button onClick={() => addPlanet('Mars')}>Add Mars</button>
      <ul>{planets.map(p => <li key={p}>{p}</li>)}</ul>
    </div>
  )
}
```

### Pros
- Tiny and fast
- Minimal boilerplate
- Supports middlewares for persistence and devtools

### Cons
- Less structure than Redux for very large apps
- Fewer built-in conventions

**Further learning**
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [State Management Comparison Guide](https://react.dev/learn/scaling-up-with-reducer-and-context)

---

## Choosing the right tool

| Scale | Tool | Typical use |
|-------|------|--------------|
| Small | `useState` | Local state within a single component |
| Medium | `useContext` | Global state for simple settings or user info |
| Medium-Large | Zustand | Shared state with minimal setup |
| Large | Redux Toolkit | Predictable, structured global state with middleware and debugging |

---

## Top tips

- Start simple - use `useState` and props for as long as possible
- Lift state up when needed and avoid overusing global state by default
- Use Context for small shared state such as theme or user
- Consider Redux Toolkit or Zustand if you think the app will be complex

**Further reading**
- [React Docs: Managing State](https://react.dev/learn/managing-state)
- [React Docs: Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
