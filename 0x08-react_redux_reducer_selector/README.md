# 0x08. React Redux Reducer & Selector - State Shape & Data Access

## 📋 Project Description

This module focuses on Redux reducers and selectors - the core mechanisms for managing state shape and accessing data efficiently. Learn to design optimal state structures, implement pure reducer functions, and create reusable selectors for complex data queries.

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Understand reducer functions and their role in Redux
- Design optimal state shapes for complex applications
- Implement pure reducer functions with immutable updates
- Create and use selector functions for data access
- Handle complex state updates with nested data
- Use Immutable.js for state management
- Implement reducer composition patterns
- Test reducers and selectors effectively
- Optimize performance with memoized selectors

## 🛠️ Technologies Used

- **Redux 4.0.5** - Predictable state container
- **Immutable.js 4.0.0** - Immutable data structures
- **Reselect** - Memoized selector library
- **Normalizr 3.6.1** - Data normalization
- **Jest** - JavaScript testing framework
- **React 16.14.0** - JavaScript library for UI
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
0x08-react_redux_reducer_selector/
├── task_0/                 # Basic reducer implementation
│   └── dashboard/
│       ├── package.json
│       └── src/
│           ├── reducers/
│           │   ├── uiReducer.js
│           │   └── uiReducer.test.js
│           ├── actions/
│           │   ├── uiActionCreators.js
│           │   └── uiActionTypes.js
│           └── schema/
│               └── notifications.js
├── task_1/                 # Course reducer
│   └── dashboard/
│       └── src/
│           ├── reducers/
│           │   ├── courseReducer.js
│           │   └── courseReducer.test.js
│           ├── actions/
│           │   ├── courseActionCreators.js
│           │   └── courseActionTypes.js
│           └── schema/
│               └── courses.js
├── task_2/                 # Notification reducer
│   └── dashboard/
│       └── src/
│           ├── reducers/
│           │   ├── notificationReducer.js
│           │   └── notificationReducer.test.js
│           ├── actions/
│           │   ├── notificationActionCreators.js
│           │   └── notificationActionTypes.js
│           └── schema/
│               └── notifications.js
├── task_3/                 # Immutable state
│   └── dashboard/
│       └── src/
│           ├── reducers/
│           │   ├── courseReducer.js
│           │   └── courseReducer.test.js
│           └── BodySection/
│               └── README.md
├── task_4/                 # Immutable notifications
│   └── dashboard/
│       └── src/
│           ├── reducers/
│           │   ├── notificationReducer.js
│           │   └── notificationReducer.test.js
│           └── selectors/
│               ├── notificationSelector.js
│               └── notificationSelector.test.js
└── task_5/                 # Combined reducers
    └── dashboard/
        └── src/
            ├── reducers/
            │   ├── rootReducer.js
            │   └── rootReducer.test.js
            └── selectors/
                ├── notificationSelector.js
                └── notificationSelector.test.js
```

## 📚 Tasks Overview

### Task 0: Writing a Basic Reducer
- **Objective**: Implement fundamental UI reducer
- **Features**: Login, logout, drawer state management
- **Skills**: Reducer basics, action handling, state updates

### Task 1: Use Immutable for the UI Reducer
- **Objective**: Convert reducer to use Immutable.js
- **Features**: Immutable state management
- **Skills**: Immutable.js API, performance optimization

### Task 2: Create a Reducer for Courses
- **Objective**: Implement course management reducer
- **Features**: Course selection/deselection logic
- **Skills**: Entity management, normalized state handling

### Task 3: Create the Reducer for Notifications
- **Objective**: Build notification state management
- **Features**: Filter notifications, mark as read functionality
- **Skills**: Complex state updates, filtering logic

### Task 4: Normalizr & Immutable
- **Objective**: Combine normalization with immutable state
- **Features**: Normalized immutable notification state
- **Skills**: Normalizr integration, immutable entities

### Task 5: Selectors
- **Objective**: Implement selector functions for data access
- **Features**: Filtered notification selectors
- **Skills**: Selector patterns, data transformation, memoization

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Completed 0x07-react_redux_action_creator_normalizr module

### Installation and Setup

1. Navigate to any task directory:
   ```bash
   cd task_0/dashboard
   ```

2. Install dependencies:
   ```bash
   npm install redux immutable reselect
   ```

3. Run tests:
   ```bash
   npm test
   ```

## 📖 Key Concepts

### Reducer Fundamentals
- **Pure Functions**: Reducers must be pure and predictable
- **Immutability**: Never mutate state directly
- **State Shape**: Design optimal state structure
- **Action Handling**: Process actions to produce new state

### Immutable.js Benefits
- **Performance**: Structural sharing for efficient updates
- **Predictability**: Immutable data prevents accidental mutations
- **Debugging**: Clear state change tracking
- **Memory Efficiency**: Shared structure reduces memory usage

### Selector Patterns
- **Data Access**: Centralized data access logic
- **Transformation**: Convert raw state to component-ready data
- **Memoization**: Cache computed values for performance
- **Composition**: Combine simple selectors into complex ones

## 🧪 Testing Reducers and Selectors

### Reducer Testing
```javascript
describe('uiReducer', () => {
  it('should return initial state', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });
    
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });
    
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});
```

### Selector Testing
```javascript
describe('notificationSelector', () => {
  it('should return filtered notifications', () => {
    const state = {
      notifications: Map({
        filter: 'URGENT',
        entities: Map({
          '1': Map({ id: '1', type: 'default', value: 'New course' }),
          '2': Map({ id: '2', type: 'urgent', value: 'New resume' })
        })
      })
    };
    
    const result = getUnreadNotificationsByType(state);
    expect(result.size).toBe(1);
    expect(result.first().get('type')).toBe('urgent');
  });
});
```

## 🎨 Implementation Examples

### Basic UI Reducer (Task 0)
```javascript
// uiReducer.js
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      };
      
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      };
      
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.user
      };
      
    case LOGIN_FAILURE:
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {}
      };
      
    default:
      return state;
  }
}
```

### Immutable UI Reducer (Task 1)
```javascript
// uiReducer.js with Immutable
import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({})
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
      
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
      
    case LOGIN_SUCCESS:
      return state.merge({
        isUserLoggedIn: true,
        user: Map(action.user)
      });
      
    case LOGIN_FAILURE:
    case LOGOUT:
      return state.merge({
        isUserLoggedIn: false,
        user: Map({})
      });
      
    default:
      return state;
  }
}
```

### Course Reducer (Task 2)
```javascript
// courseReducer.js
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';

const initialState = Map([]);

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return Map(normalizedData.entities.courses).map(course =>
        Map({
          ...course,
          isSelected: false
        })
      );
      
    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true);
      
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);
      
    default:
      return state;
  }
}
```

### Notification Reducer with Normalizr (Task 3 & 4)
```javascript
// notificationReducer.js
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

const initialState = Map({
  filter: 'DEFAULT',
  entities: Map({})
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      const entities = Map(normalizedData.entities.notifications).map(
        notification => Map({
          ...notification,
          isRead: false
        })
      );
      return state.set('entities', entities);
      
    case MARK_AS_READ:
      return state.setIn(
        ['entities', String(action.index), 'isRead'],
        true
      );
      
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
      
    default:
      return state;
  }
}
```

### Root Reducer (Task 5)
```javascript
// rootReducer.js
import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  courses: courseReducer,
  notifications: notificationReducer
});

export default rootReducer;
```

### Notification Selectors (Task 5)
```javascript
// notificationSelector.js
import { createSelector } from 'reselect';
import { Map } from 'immutable';

// Base selectors
const getNotifications = (state) => state.notifications.get('entities', Map());
const getFilter = (state) => state.notifications.get('filter', 'DEFAULT');

// Memoized selectors
export const filterTypeSelected = createSelector(
  [getFilter],
  (filter) => filter
);

export const getNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.valueSeq().toList()
);

export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => 
    notifications.filter(notification => !notification.get('isRead'))
);

export const getUnreadNotificationsByType = createSelector(
  [getUnreadNotifications, getFilter],
  (notifications, filter) => {
    if (filter === 'DEFAULT') {
      return notifications;
    }
    return notifications.filter(
      notification => notification.get('type') === filter
    );
  }
);
```

## 🔧 Advanced Patterns

### Nested State Updates
```javascript
// Deep state updates with Immutable
case UPDATE_NOTIFICATION:
  return state.updateIn(
    ['entities', action.id],
    notification => notification.merge(action.updates)
  );

// Batch updates
case BATCH_UPDATE_NOTIFICATIONS:
  return action.updates.reduce(
    (newState, update) =>
      newState.setIn(['entities', update.id], Map(update.data)),
    state
  );
```

### Conditional Reducers
```javascript
// Higher-order reducer for conditional logic
const createConditionalReducer = (predicate, reducer) => {
  return (state, action) => {
    if (predicate(action)) {
      return reducer(state, action);
    }
    return state;
  };
};

// Usage
const authenticatedReducer = createConditionalReducer(
  action => action.authenticated,
  userReducer
);
```

### Selector Composition
```javascript
// Composing selectors for complex queries
export const getNotificationStats = createSelector(
  [getNotifications],
  (notifications) => ({
    total: notifications.size,
    unread: notifications.filter(n => !n.get('isRead')).size,
    urgent: notifications.filter(n => n.get('type') === 'urgent').size
  })
);

export const getNotificationsByUser = createSelector(
  [getNotifications, (state, userId) => userId],
  (notifications, userId) =>
    notifications.filter(n => n.getIn(['author', 'id']) === userId)
);
```

### Immutable State Normalization
```javascript
// Handling normalized immutable state
const initialState = Map({
  entities: Map({
    users: Map({}),
    notifications: Map({}),
    messages: Map({})
  }),
  ui: Map({
    selectedNotifications: Set(),
    filter: 'ALL'
  })
});

// Adding entities
case ADD_ENTITIES:
  return state.mergeDeepIn(['entities'], Map(action.entities));

// Removing entity
case REMOVE_NOTIFICATION:
  return state
    .deleteIn(['entities', 'notifications', action.id])
    .updateIn(['ui', 'selectedNotifications'], 
      set => set.delete(action.id)
    );
```

## 🏆 Best Practices

### Reducer Design
- Keep reducers pure and predictable
- Use consistent action handling patterns
- Implement proper error handling
- Design optimal state shapes for your use case

### Immutability
- Always return new state objects
- Use Immutable.js for complex state structures
- Implement structural sharing for performance
- Avoid deep mutations in favor of focused updates

### Selector Patterns
- Use selectors for all state access
- Implement memoization with reselect
- Keep selectors focused and composable
- Test selectors independently

### Performance Optimization
- Use shouldComponentUpdate with immutable data
- Implement proper memoization strategies
- Minimize selector recomputation
- Use structural sharing effectively

## 🔍 Common Patterns

### CRUD Reducer Pattern
```javascript
const createCrudReducer = (entityName) => {
  const upperName = entityName.toUpperCase();
  
  return (state = Map({}), action) => {
    switch (action.type) {
      case `CREATE_${upperName}`:
        return state.set(action.entity.id, Map(action.entity));
        
      case `UPDATE_${upperName}`:
        return state.updateIn([action.id], entity =>
          entity.merge(action.updates)
        );
        
      case `DELETE_${upperName}`:
        return state.delete(action.id);
        
      default:
        return state;
    }
  };
};
```

### Loading State Pattern
```javascript
const createAsyncReducer = (actionPrefix) => {
  const initialState = Map({
    loading: false,
    error: null,
    data: Map({})
  });
  
  return (state = initialState, action) => {
    switch (action.type) {
      case `${actionPrefix}_REQUEST`:
        return state.set('loading', true).set('error', null);
        
      case `${actionPrefix}_SUCCESS`:
        return state.merge({
          loading: false,
          data: Map(action.data)
        });
        
      case `${actionPrefix}_FAILURE`:
        return state.merge({
          loading: false,
          error: action.error
        });
        
      default:
        return state;
    }
  };
};
```

## 🎓 Skills Gained

After completing this module, you will have:
- Expertise in designing and implementing Redux reducers
- Proficiency with Immutable.js for state management
- Knowledge of selector patterns and data access optimization
- Understanding of state normalization in Redux
- Experience with reducer composition and higher-order reducers
- Skills in testing reducers and selectors effectively
- Ability to optimize Redux applications for performance
- Knowledge of advanced Redux patterns and best practices

## 📚 Additional Resources

- [Redux Reducer Documentation](https://redux.js.org/basics/reducers)
- [Immutable.js Documentation](https://immutable-js.com/)
- [Reselect Documentation](https://github.com/reduxjs/reselect)
- [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
- [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)

---

**Previous Module**: [0x07-react_redux_action_creator_normalizr](../0x07-react_redux_action_creator_normalizr/) - Redux fundamentals  
**Next Module**: [0x09-react_redux_connectors_and_providers](../0x09-react_redux_connectors_and_providers/) - Redux integration with React
