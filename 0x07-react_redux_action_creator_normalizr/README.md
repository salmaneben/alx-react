# 0x07. React Redux Action Creator & Normalizr - Redux Fundamentals

## 📋 Project Description

This module introduces Redux, a predictable state container for JavaScript applications. Learn the fundamentals of Redux architecture, action creators, and data normalization patterns for scalable state management.

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Understand Redux architecture and its core principles
- Create and dispatch Redux actions
- Implement action creators for different scenarios
- Use Normalizr for data normalization
- Structure normalized state for optimal performance
- Handle asynchronous actions with Redux Thunk
- Implement immutable state updates
- Test Redux actions and action creators
- Integrate Redux with React applications

## 🛠️ Technologies Used

- **Redux 4.0.5** - Predictable state container for JavaScript apps
- **Normalizr 3.6.1** - Data normalization library
- **Redux Thunk** - Middleware for async actions
- **Immutable.js** - Immutable data structures
- **Jest** - JavaScript testing framework
- **React 16.14.0** - JavaScript library for building user interfaces
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
0x07-react_redux_action_creator_normalizr/
├── task_0/                 # Basic Redux setup
│   └── dashboard/
│       ├── package.json
│       └── src/
│           ├── schema/
│           │   └── notifications.js
│           ├── actions/
│           │   └── notificationActionCreators.js
│           └── __tests__/
│               └── NotificationActionCreators.test.js
├── task_1/                 # Normalized data schema
│   └── dashboard/
│       └── src/
│           ├── schema/
│           │   └── notifications.js
│           └── __tests__/
│               └── notifications.test.js
├── task_2/                 # Filter action creators
│   └── dashboard/
│       └── src/
│           ├── actions/
│           │   ├── notificationActionCreators.js
│           │   └── notificationActionTypes.js
│           └── __tests__/
│               └── NotificationActionCreators.test.js
├── task_3/                 # Course action creators
│   └── dashboard/
│       └── src/
│           ├── actions/
│           │   ├── courseActionCreators.js
│           │   └── courseActionTypes.js
│           ├── schema/
│           │   └── courses.js
│           └── __tests__/
│               ├── courseActionCreators.test.js
│               └── courses.test.js
├── task_4/                 # UI action creators
│   └── dashboard/
│       └── src/
│           ├── actions/
│           │   ├── uiActionCreators.js
│           │   └── uiActionTypes.js
│           └── __tests__/
│               └── uiActionCreators.test.js
├── task_5/                 # Async action creators
│   └── dashboard/
│       └── src/
│           ├── actions/
│           │   └── uiActionCreators.js
│           └── __tests__/
│               └── uiActionCreators.test.js
└── task_6/                 # Bound action creators
    └── dashboard/
        └── src/
            ├── actions/
            │   └── uiActionCreators.js
            └── __tests__/
                └── uiActionCreators.test.js
```

## 📚 Tasks Overview

### Task 0: Read Data from a JSON
- **Objective**: Set up data reading and normalization
- **Files**: notifications.js schema, action creators
- **Skills**: JSON handling, data structure design

### Task 1: Normalize a Nested JSON
- **Objective**: Implement Normalizr for complex data
- **Features**: Nested data normalization with schemas
- **Skills**: Normalizr usage, entity relationships

### Task 2: Filter a Normalized Schema
- **Objective**: Create action creators for data filtering
- **Features**: Notification filtering actions
- **Skills**: Action creators, action types, filtering logic

### Task 3: Create Actions for the Course List
- **Objective**: Implement course management actions
- **Features**: Course selection/deselection actions
- **Skills**: Entity-specific actions, normalized course data

### Task 4: Create Actions for the UI
- **Objective**: Build UI state management actions
- **Features**: Login, logout, drawer toggle actions
- **Skills**: UI state actions, user authentication

### Task 5: Create Actions for the Notification
- **Objective**: Implement async notification actions
- **Features**: Asynchronous API calls with Redux Thunk
- **Skills**: Async actions, middleware, API integration

### Task 6: Bound the Actions
- **Objective**: Create bound action creators
- **Features**: Pre-bound actions with dispatch
- **Skills**: Action binding, Redux store integration

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Completed 0x05-react_state module

### Installation and Setup

1. Navigate to any task directory:
   ```bash
   cd task_0/dashboard
   ```

2. Install dependencies:
   ```bash
   npm install redux normalizr redux-thunk immutable
   ```

3. Run tests:
   ```bash
   npm test
   ```

## 📖 Key Concepts

### Redux Principles
1. **Single Source of Truth**: One store for entire application state
2. **State is Read-Only**: Only actions can change state
3. **Changes Made with Pure Functions**: Reducers are pure functions

### Action Creators
- **Action**: Plain JavaScript object describing what happened
- **Action Creator**: Function that returns an action
- **Action Types**: Constants defining action identifiers
- **Payload**: Data carried by an action

### Normalizr Benefits
- **Flat State Structure**: Easier to update and access
- **No Duplication**: Each entity stored once
- **Relationship Management**: Clear entity relationships
- **Performance**: Faster lookups and updates

## 🧪 Testing Redux Actions

### Action Creator Testing
```javascript
describe('notification action creators', () => {
  it('should create MARK_AS_READ action', () => {
    const expectedAction = {
      type: 'MARK_AS_READ',
      index: 1
    };
    expect(markAsRead(1)).toEqual(expectedAction);
  });

  it('should create SET_TYPE_FILTER action', () => {
    const expectedAction = {
      type: 'SET_TYPE_FILTER',
      filter: 'URGENT'
    };
    expect(setNotificationFilter('URGENT')).toEqual(expectedAction);
  });
});
```

### Async Action Testing
```javascript
describe('async action creators', () => {
  it('should create login success action', () => {
    const user = { email: 'test@test.com', password: 'password' };
    const expectedAction = {
      type: 'LOGIN_SUCCESS',
      user
    };
    expect(loginSuccess(user)).toEqual(expectedAction);
  });

  it('should handle login request with thunk', () => {
    const store = mockStore({});
    const user = { email: 'test@test.com', password: 'password' };
    
    return store.dispatch(loginRequest(user.email, user.password))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe('LOGIN_SUCCESS');
      });
  });
});
```

## 🎨 Implementation Examples

### Basic Action Creators (Task 0)
```javascript
// notificationActionTypes.js
export const MARK_AS_READ = 'MARK_AS_READ';
export const SET_TYPE_FILTER = 'SET_TYPE_FILTER';

// notificationActionCreators.js
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});
```

### Normalizr Schema (Task 1)
```javascript
// notifications.js
import { normalize, schema } from 'normalizr';

// Define schemas
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize function
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};

// Get all notifications by user
export const getAllNotificationsByUser = (userId) => {
  return notificationsNormalizer(notificationsData)
    .entities.notifications
    .filter(notification => 
      notification.author === userId
    );
};
```

### Course Actions (Task 3)
```javascript
// courseActionTypes.js
export const SELECT_COURSE = 'SELECT_COURSE';
export const UNSELECT_COURSE = 'UNSELECT_COURSE';

// courseActionCreators.js
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index
});

// courses.js schema
import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');

export const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};
```

### UI Actions (Task 4)
```javascript
// uiActionTypes.js
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const DISPLAY_NOTIFICATION_DRAWER = 'DISPLAY_NOTIFICATION_DRAWER';
export const HIDE_NOTIFICATION_DRAWER = 'HIDE_NOTIFICATION_DRAWER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// uiActionCreators.js
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

export const logout = () => ({
  type: LOGOUT
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});
```

### Async Actions with Thunk (Task 5)
```javascript
import fetch from 'node-fetch';

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    
    return fetch('/login-success.json')
      .then(response => response.json())
      .then(data => dispatch(loginSuccess()))
      .catch(error => dispatch(loginFailure()));
  };
};

// Bound action creators (Task 6)
export const boundLoginRequest = (email, password) => (dispatch) => {
  return dispatch(loginRequest(email, password));
};

export const boundLogout = () => (dispatch) => {
  return dispatch(logout());
};

export const boundDisplayNotificationDrawer = () => (dispatch) => {
  return dispatch(displayNotificationDrawer());
};

export const boundHideNotificationDrawer = () => (dispatch) => {
  return dispatch(hideNotificationDrawer());
};
```

### Complex Normalization Example
```javascript
// Complex nested data structure
const notificationsData = [
  {
    id: "5debd76480edafc8af244228",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: {
        first: "Poole",
        last: "Sanders"
      },
      email: "poole.sanders@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 25
    },
    context: {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  }
];

// Normalized structure
const normalizedData = {
  entities: {
    users: {
      "5debd764a7c57c7839d722e9": {
        id: "5debd764a7c57c7839d722e9",
        name: { first: "Poole", last: "Sanders" },
        email: "poole.sanders@holberton.nz",
        picture: "http://placehold.it/32x32",
        age: 25
      }
    },
    messages: {
      "2d8e40be-1c78-4de0-afc9-fcc147afd4d2": {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    },
    notifications: {
      "5debd76480edafc8af244228": {
        id: "5debd76480edafc8af244228",
        author: "5debd764a7c57c7839d722e9",
        context: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2"
      }
    }
  },
  result: ["5debd76480edafc8af244228"]
};
```

## 🔧 Advanced Patterns

### Action Creator Composition
```javascript
// Composite actions
export const markNotificationAsReadAndFilter = (index, filter) => (dispatch) => {
  dispatch(markAsRead(index));
  dispatch(setNotificationFilter(filter));
};

// Conditional actions
export const toggleNotificationDrawer = (isVisible) => {
  return isVisible ? hideNotificationDrawer() : displayNotificationDrawer();
};
```

### Error Handling in Actions
```javascript
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(login(email, password));
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (response.ok) {
        const user = await response.json();
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginFailure('Invalid credentials'));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
```

### Normalized Data Selectors
```javascript
// Selector functions for normalized data
export const getAllNotifications = (state) => {
  const { notifications, users, messages } = state.entities;
  
  return Object.values(notifications).map(notification => ({
    ...notification,
    author: users[notification.author],
    context: messages[notification.context]
  }));
};

export const getNotificationsByUser = (state, userId) => {
  return getAllNotifications(state)
    .filter(notification => notification.author.id === userId);
};

export const getUnreadNotifications = (state) => {
  return getAllNotifications(state)
    .filter(notification => !notification.context.isRead);
};
```

## 🏆 Best Practices

### Action Design
- Use descriptive action type names
- Keep actions simple and focused
- Include minimal necessary data in payloads
- Use action creators consistently

### Normalization
- Normalize nested data structures
- Use consistent entity schemas
- Implement proper ID strategies
- Design for query efficiency

### Async Actions
- Always handle loading states
- Implement proper error handling
- Use meaningful action names for each stage
- Consider cancellation for long-running operations

### Testing
- Test action creators in isolation
- Mock external dependencies
- Test both success and failure scenarios
- Verify action structure and payloads

## 🔍 Common Patterns

### CRUD Action Pattern
```javascript
// Create
export const createNotification = (notification) => ({
  type: 'CREATE_NOTIFICATION',
  payload: notification
});

// Read/Fetch
export const fetchNotifications = () => ({
  type: 'FETCH_NOTIFICATIONS'
});

// Update
export const updateNotification = (id, updates) => ({
  type: 'UPDATE_NOTIFICATION',
  payload: { id, updates }
});

// Delete
export const deleteNotification = (id) => ({
  type: 'DELETE_NOTIFICATION',
  payload: { id }
});
```

### Loading State Pattern
```javascript
export const fetchNotificationsRequest = () => ({
  type: 'FETCH_NOTIFICATIONS_REQUEST'
});

export const fetchNotificationsSuccess = (notifications) => ({
  type: 'FETCH_NOTIFICATIONS_SUCCESS',
  payload: notifications
});

export const fetchNotificationsFailure = (error) => ({
  type: 'FETCH_NOTIFICATIONS_FAILURE',
  payload: error
});
```

## 🎓 Skills Gained

After completing this module, you will have:
- Deep understanding of Redux architecture and principles
- Proficiency in creating and organizing action creators
- Knowledge of data normalization with Normalizr
- Experience with async action handling using Redux Thunk
- Skills in testing Redux actions and async operations
- Understanding of action binding and dispatch patterns
- Ability to design scalable Redux state structures
- Knowledge of Redux best practices and common patterns

## 📚 Additional Resources

- [Redux Documentation](https://redux.js.org/)
- [Normalizr Documentation](https://github.com/paularmstrong/normalizr)
- [Redux Thunk Middleware](https://github.com/reduxjs/redux-thunk)
- [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
- [Redux Testing Patterns](https://redux.js.org/recipes/writing-tests)

---

**Previous Module**: [0x05-react_state](../0x05-react_state/) - Advanced state management  
**Next Module**: [0x08-react_redux_reducer_selector](../0x08-react_redux_reducer_selector/) - Redux reducers and selectors
