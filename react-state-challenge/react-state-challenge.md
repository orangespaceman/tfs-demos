# React state challenge

We are going to integrate shared state into the app you built in the previous challenge

We will create a new list view that loads data from an API and allows users to mark items as favourites

The shared state should use one of three options (your choice):

- React Context with `useReducer` for structure
- Redux Toolkit with `react-redux`
- Zustand with a small store

---

### Task 1

Add your chosen state library to the app

- [React Context](https://react.dev/learn/passing-data-deeply-with-context)
- [Redux Toolkit (with react-redux)](https://redux-toolkit.js.org/tutorials/quick-start)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)


---

### Task 2

_Fetch data from a public API_

Requirements:
- Pick a public API to retrieve data from
- Create a list view that fetches an array of items from the API
- Each item should show a title or name and at least one other piece of information such as a description or date
- Each item should include a 'star' or 'favourite' button (this will link to your state in the next task)
- Show a visible loading state while fetching
- Show an error message if the API request fails

---

### Task 3

_State shape and actions_

Requirements:
- Decide on a simple state shape for favourites, for example an array of ids
- Implement actions for:
  - toggling a star by id
  - clearing all stars

---

### Task 4

_Store favourites_

Requirements:
- Maintain a list of starred item ids in shared state
- Provide a function to toggle a star for a given id
- Allow read access to the current list anywhere in the app
- Avoid prop drilling through intermediate components
- Ensure the UI updates immediately when a star is toggled
- Handle loading and error states cleanly if they occur after toggling

---

### Task 5

_Persistence_

Requirements:
- Save the starred ids locally so they survive a refresh (for example using `localStorage`)
- Rehydrate the state when the app starts

---

## Stretch goals

- Pagination on the list view
- Add a input field for entering a search parameter, and pass this value to the API when making the request
- Create an item details route with additional fields that aren't displayed in the initial list view
