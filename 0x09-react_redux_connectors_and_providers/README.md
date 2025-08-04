# 0x09. React Redux Connectors & Providers - React-Redux Integration

## 📋 Project Description

This final module brings together Redux state management with React components through React-Redux connectors and providers. Master the art of connecting React components to Redux store, implementing efficient data flow, and building scalable React-Redux applications with proper separation of concerns.

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Set up Redux Provider for React applications
- Connect React components to Redux store using connect()
- Implement mapStateToProps and mapDispatchToProps functions
- Use React-Redux hooks (useSelector, useDispatch)
- Handle asynchronous operations in connected components
- Implement Higher-Order Components (HOCs) with Redux
- Optimize React-Redux performance
- Test connected components effectively
- Structure large React-Redux applications
- Implement middleware for enhanced functionality

## 🛠️ Technologies Used

- **React-Redux 7.2.0** - Official React bindings for Redux
- **Redux 4.0.5** - Predictable state container
- **Redux-Thunk** - Async action middleware
- **Immutable.js 4.0.0** - Immutable data structures
- **Reselect** - Memoized selector library
- **Enzyme 3.11.0** - JavaScript testing utilities
- **Jest** - JavaScript testing framework
- **React 16.14.0** - JavaScript library for UI
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
0x09-react_redux_connectors_and_providers/
├── task_0/                 # Redux Provider setup
│   └── dashboard/
│       ├── package.json
│       └── src/
│           ├── index.js
│           ├── App/
│           │   ├── App.js
│           │   └── App.test.js
│           ├── store/
│           │   └── store.js
│           └── reducers/
│               └── rootReducer.js
├── task_1/                 # Connect App component
│   └── dashboard/
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   └── App.test.js
│           ├── actions/
│           │   └── uiActionCreators.js
│           └── selectors/
│               └── notificationSelector.js
├── task_2/                 # Connect Header component
│   └── dashboard/
│       └── src/
│           ├── Header/
│           │   ├── Header.js
│           │   └── Header.test.js
│           └── actions/
│               └── uiActionCreators.js
├── task_3/                 # Connect Footer component
│   └── dashboard/
│       └── src/
│           ├── Footer/
│           │   ├── Footer.js
│           │   └── Footer.test.js
│           └── utils/
│               └── utils.js
├── task_4/                 # Connect NotificationsList
│   └── dashboard/
│       └── src/
│           ├── Notifications/
│           │   ├── Notifications.js
│           │   ├── Notifications.test.js
│           │   └── NotificationItem.js
│           ├── actions/
│           │   └── notificationActionCreators.js
│           └── selectors/
│               └── notificationSelector.js
├── task_5/                 # Connect CourseList
│   └── dashboard/
│       └── src/
│           ├── CourseList/
│           │   ├── CourseList.js
│           │   ├── CourseList.test.js
│           │   └── CourseListRow.js
│           ├── actions/
│           │   └── courseActionCreators.js
│           └── selectors/
│               └── courseSelector.js
├── task_6/                 # Connect Login component
│   └── dashboard/
│       └── src/
│           ├── Login/
│           │   ├── Login.js
│           │   └── Login.test.js
│           ├── actions/
│           │   └── uiActionCreators.js
│           └── HOC/
│               └── WithLogging.js
├── task_7/                 # Async actions
│   └── dashboard/
│       └── src/
│           ├── actions/
│           │   ├── uiActionCreators.js
│           │   └── uiActionCreators.test.js
│           ├── middleware/
│           │   └── thunk.js
│           └── store/
│               └── store.js
├── task_8/                 # Connect BodySection
│   └── dashboard/
│       └── src/
│           ├── BodySection/
│           │   ├── BodySectionWithMarginBottom.js
│           │   └── BodySectionWithMarginBottom.test.js
│           └── HOC/
│               └── WithLogging.js
└── task_9/                 # Complete integration
    └── dashboard/
        └── src/
            ├── App/
            │   ├── App.js
            │   └── App.test.js
            ├── actions/
            │   └── index.js
            ├── selectors/
            │   └── index.js
            └── store/
                └── store.js
```

## 📚 Tasks Overview

### Task 0: Create a Small Store
- **Objective**: Set up Redux store and Provider
- **Features**: Store configuration, Provider setup
- **Skills**: Redux store creation, React-Redux Provider

### Task 1: Test MapStateToProps
- **Objective**: Connect App component to Redux store
- **Features**: State mapping, prop validation
- **Skills**: mapStateToProps, component connection

### Task 2: Connect your Actions Creators
- **Objective**: Connect Header component with actions
- **Features**: Action dispatch, event handling
- **Skills**: mapDispatchToProps, action creators

### Task 3: Connect Footer Component
- **Objective**: Connect Footer with Redux state
- **Features**: User state access, conditional rendering
- **Skills**: State selection, component optimization

### Task 4: Connect Notifications Component
- **Objective**: Connect Notifications with full CRUD operations
- **Features**: Notification management, filtering
- **Skills**: Complex state mapping, action dispatching

### Task 5: Connect CourseList Component
- **Objective**: Connect CourseList with course state
- **Features**: Course selection, list management
- **Skills**: Entity management, normalized state handling

### Task 6: Connect Login Component
- **Objective**: Connect Login with authentication actions
- **Features**: Login/logout functionality, form handling
- **Skills**: Form state management, async actions

### Task 7: Async Action Creators
- **Objective**: Implement async actions with middleware
- **Features**: API calls, loading states, error handling
- **Skills**: Redux middleware, async flow, thunk actions

### Task 8: Connect BodySection Component
- **Objective**: Enhance BodySection with Redux integration
- **Features**: Dynamic content, state-driven rendering
- **Skills**: HOC patterns, component enhancement

### Task 9: Improve Performance with Reselect
- **Objective**: Optimize application with memoized selectors
- **Features**: Performance optimization, selector composition
- **Skills**: Reselect library, performance tuning, memoization

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Completed 0x08-react_redux_reducer_selector module
- Understanding of Redux fundamentals

### Installation and Setup

1. Navigate to any task directory:
   ```bash
   cd task_0/dashboard
   ```

2. Install React-Redux dependencies:
   ```bash
   npm install react-redux redux-thunk
   ```

3. Start development server:
   ```bash
   npm start
   ```

4. Run tests:
   ```bash
   npm test
   ```

## 📖 Key Concepts

### React-Redux Provider
- **Store Access**: Provides Redux store to entire component tree
- **Context API**: Uses React Context under the hood
- **Single Source**: One Provider at application root
- **Store Injection**: Makes store available to connected components

### Connect Function
- **Higher-Order Component**: Wraps components with Redux functionality
- **State Mapping**: mapStateToProps for state access
- **Action Mapping**: mapDispatchToProps for action dispatch
- **Performance**: Implements shouldComponentUpdate optimization

### React-Redux Hooks
- **useSelector**: Access store state in functional components
- **useDispatch**: Dispatch actions from functional components
- **useStore**: Direct store access (rare use cases)
- **Modern Pattern**: Preferred over connect in new code

### Performance Optimization
- **Shallow Equality**: Connect uses shallow comparison
- **Memoization**: Use selectors to prevent unnecessary renders
- **Component Splitting**: Split connected and presentational components
- **Selector Optimization**: Use reselect for expensive computations

## 🧪 Testing Connected Components

### Testing with Mock Store
```javascript
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('Connected App', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({
      ui: {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
      }
    });
  });
  
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
  
  it('should dispatch action on login', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    wrapper.find('Login').prop('login')('test@test.com', 'password');
    
    const actions = store.getActions();
    expect(actions[0].type).toBe('LOGIN_REQUEST');
  });
});
```

### Testing mapStateToProps
```javascript
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('should return correct props from state', () => {
    const state = {
      ui: {
        isNotificationDrawerVisible: true,
        isUserLoggedIn: false
      }
    };
    
    const props = mapStateToProps(state);
    
    expect(props.isLoggedIn).toBe(false);
    expect(props.displayDrawer).toBe(true);
  });
});
```

## 🎨 Implementation Examples

### Setting up Redux Provider (Task 0)
```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App/App';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Creating the Store (Task 0)
```javascript
// store/store.js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const composeEnhancers = 
  (typeof window !== 'undefined' && 
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
```

### Connecting App Component (Task 1)
```javascript
// App/App.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  displayNotificationDrawer, 
  hideNotificationDrawer,
  logout
} from '../actions/uiActionCreators';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logout();
    }
  }

  render() {
    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      login
    } = this.props;

    return (
      <React.Fragment>
        <Header />
        {isLoggedIn ? <BodySectionWithMarginBottom /> : <Login logIn={login} />}
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
  logout: () => {}
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible')
});

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

### Connecting Header Component (Task 2)
```javascript
// Header/Header.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';
import { StyleSheet, css } from 'aphrodite';

class Header extends Component {
  render() {
    const { user, logout } = this.props;

    return (
      <div className={css(styles.header)}>
        <img src="/favicon.ico" alt="Holberton logo" />
        <h1>School dashboard</h1>
        {user && (
          <section className={css(styles.welcomeSection)} id="logoutSection">
            Welcome {user.email} (
            <a href="#" onClick={logout} className={css(styles.logoutLink)}>
              logout
            </a>
            )
          </section>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};

Header.defaultProps = {
  user: null,
  logout: () => {}
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e1484c',
    fontSize: '20px',
    borderBottom: '3px solid #e1484c'
  },
  welcomeSection: {
    marginLeft: 'auto'
  },
  logoutLink: {
    color: '#e1484c',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
});

export const mapStateToProps = (state) => ({
  user: state.getIn(['ui', 'user'])
});

export const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
```

### Connecting Notifications (Task 4)
```javascript
// Notifications/Notifications.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchNotifications,
  markAsRead,
  setNotificationFilter
} from '../actions/notificationActionCreators';
import {
  getUnreadNotificationsByType,
  getUnreadNotifications
} from '../selectors/notificationSelector';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
      setNotificationFilter
    } = this.props;

    if (!displayDrawer) {
      return (
        <div
          className="menuItem"
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
      );
    }

    return (
      <div className="Notifications">
        <button
          style={{
            color: '#3a3a3a',
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            fontSize: '10px',
            position: 'absolute',
            right: '2px',
            top: '2px',
            cursor: 'pointer'
          }}
          aria-label="Close"
          onClick={handleHideDrawer}
        >
          <img src="./close-icon.png" alt="close icon" />
        </button>
        <p>Here is the list of notifications</p>
        <button
          onClick={() => setNotificationFilter('URGENT')}
        >
          ❗❗
        </button>
        <button
          onClick={() => setNotificationFilter('DEFAULT')}
        >
          💠
        </button>
        <ul>
          {listNotifications.length === 0 ? (
            <NotificationItem
              type="default"
              value="No new notification for now"
            />
          ) : (
            listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={() => markNotificationAsRead(notification.id)}
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
  fetchNotifications: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  setNotificationFilter: () => {},
  fetchNotifications: () => {}
};

export const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state)
});

export const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsRead,
  setNotificationFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
```

### Async Action Creators (Task 7)
```javascript
// actions/uiActionCreators.js
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

// Synchronous action creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
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

// Async action creator with thunk
export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      if (response.ok) {
        const userData = await response.json();
        dispatch(loginSuccess());
        return userData;
      } else {
        dispatch(loginFailure());
        throw new Error('Login failed');
      }
    } catch (error) {
      dispatch(loginFailure());
      throw error;
    }
  };
};
```

### Using React-Redux Hooks (Modern Pattern)
```javascript
// Components with hooks (alternative to connect)
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

const NotificationsHooks = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(getUnreadNotifications);
  const displayDrawer = useSelector(state => 
    state.getIn(['ui', 'isNotificationDrawerVisible'])
  );

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  return (
    <div className="Notifications">
      {notifications.map(notification => (
        <div
          key={notification.id}
          onClick={() => handleMarkAsRead(notification.id)}
        >
          {notification.value}
        </div>
      ))}
    </div>
  );
};

export default NotificationsHooks;
```

## 🔧 Advanced Patterns

### Higher-Order Component for Redux Connection
```javascript
// HOC/withReduxConnection.js
import React from 'react';
import { connect } from 'react-redux';

const withReduxConnection = (
  mapStateToProps,
  mapDispatchToProps
) => (WrappedComponent) => {
  const WithReduxConnection = (props) => (
    <WrappedComponent {...props} />
  );

  WithReduxConnection.displayName = 
    `withReduxConnection(${WrappedComponent.displayName || WrappedComponent.name})`;

  return connect(mapStateToProps, mapDispatchToProps)(WithReduxConnection);
};

export default withReduxConnection;

// Usage
const ConnectedComponent = withReduxConnection(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);
```

### Custom Hooks for Redux Logic
```javascript
// hooks/useNotifications.js
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
  fetchNotifications,
  markAsRead,
  setNotificationFilter
} from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

export const useNotifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(getUnreadNotificationsByType);
  const loading = useSelector(state => 
    state.getIn(['notifications', 'loading'])
  );

  const fetchNotificationsCallback = useCallback(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const markAsReadCallback = useCallback((id) => {
    dispatch(markAsRead(id));
  }, [dispatch]);

  const setFilterCallback = useCallback((filter) => {
    dispatch(setNotificationFilter(filter));
  }, [dispatch]);

  useEffect(() => {
    fetchNotificationsCallback();
  }, [fetchNotificationsCallback]);

  return {
    notifications,
    loading,
    markAsRead: markAsReadCallback,
    setFilter: setFilterCallback,
    refetch: fetchNotificationsCallback
  };
};
```

### Performance-Optimized Selectors
```javascript
// selectors/optimizedSelectors.js
import { createSelector } from 'reselect';
import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash/isEqual';

// Custom equality check for deep objects
const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);

// Memoized selector with complex logic
export const getNotificationStats = createSelector(
  [getNotifications],
  (notifications) => {
    const stats = notifications.reduce((acc, notification) => {
      acc.total += 1;
      if (!notification.get('isRead')) {
        acc.unread += 1;
      }
      if (notification.get('type') === 'urgent') {
        acc.urgent += 1;
      }
      return acc;
    }, { total: 0, unread: 0, urgent: 0 });

    return stats;
  }
);

// Parametric selector factory
export const getNotificationsByUser = () => createSelector(
  [getNotifications, (state, userId) => userId],
  (notifications, userId) => 
    notifications.filter(n => n.getIn(['author', 'id']) === userId)
);

// Usage in component
const userNotifications = useSelector(getNotificationsByUser(), {
  equalityFn: isEqual
});
```

### Middleware Configuration
```javascript
// middleware/index.js
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Custom middleware for API calls
const apiMiddleware = store => next => action => {
  if (action.type.endsWith('_REQUEST')) {
    // Add loading state logic
    console.log('API request started:', action.type);
  }
  
  if (action.type.endsWith('_SUCCESS') || action.type.endsWith('_FAILURE')) {
    // Add completion logic
    console.log('API request completed:', action.type);
  }
  
  return next(action);
};

// Error handling middleware
const errorMiddleware = store => next => action => {
  try {
    return next(action);
  } catch (error) {
    console.error('Redux error:', error);
    // Dispatch error action
    store.dispatch({ type: 'GLOBAL_ERROR', error: error.message });
    throw error;
  }
};

const logger = createLogger({
  predicate: (getState, action) => 
    process.env.NODE_ENV === 'development'
});

export const middleware = [
  thunk,
  apiMiddleware,
  errorMiddleware,
  logger
].filter(Boolean);
```

## 🏆 Best Practices

### Component Architecture
- Separate container and presentational components
- Use connect for class components, hooks for functional components
- Keep mapStateToProps and mapDispatchToProps simple
- Implement proper prop validation

### Performance Optimization
- Use reselect for expensive computations
- Implement shouldComponentUpdate for class components
- Use React.memo for functional components
- Avoid creating objects/functions in render methods

### State Management
- Design normalized state shape
- Use immutable data structures
- Implement proper error boundaries
- Keep business logic in reducers and selectors

### Testing Strategy
- Test mapStateToProps and mapDispatchToProps separately
- Use mock stores for integration tests
- Test async actions with proper mocking
- Implement comprehensive selector testing

## 🔍 Common Anti-Patterns to Avoid

### Performance Issues
```javascript
// ❌ Bad: Creating objects in mapStateToProps
const mapStateToProps = (state) => ({
  user: {
    name: state.user.name,
    email: state.user.email
  }
});

// ✅ Good: Use selectors
const mapStateToProps = (state) => ({
  user: getUserInfo(state)
});

// ❌ Bad: Accessing store directly
import store from '../store';
const currentUser = store.getState().user;

// ✅ Good: Use connected props or hooks
const currentUser = useSelector(getUser);
```

### State Mutations
```javascript
// ❌ Bad: Mutating props from Redux
const Component = ({ notifications }) => {
  notifications.push(newNotification); // Mutation!
  return <div>{/* render */}</div>;
};

// ✅ Good: Dispatch actions for state changes
const Component = ({ notifications, addNotification }) => {
  const handleAdd = () => addNotification(newNotification);
  return <div>{/* render */}</div>;
};
```

## 🎓 Skills Gained

After completing this module, you will have:
- Mastery of React-Redux integration patterns
- Expertise in connecting components to Redux store
- Knowledge of performance optimization techniques
- Understanding of async action patterns with middleware
- Experience with testing connected components
- Skills in building scalable React-Redux applications
- Proficiency with modern React-Redux hooks
- Knowledge of advanced patterns and best practices

## 🏁 Project Completion

Upon completing this final module, you will have built a complete React-Redux application featuring:
- Comprehensive state management with Redux
- Efficient component connections with React-Redux
- Performance-optimized selectors and memoization
- Async action handling with middleware
- Complete testing coverage
- Modern React patterns and best practices

## 📚 Additional Resources

- [React-Redux Documentation](https://react-redux.js.org/)
- [Redux Toolkit (RTK)](https://redux-toolkit.js.org/)
- [React-Redux Hooks](https://react-redux.js.org/api/hooks)
- [Performance Optimization Guide](https://react-redux.js.org/api/connect#performance-optimizations)
- [Testing React-Redux Apps](https://redux.js.org/recipes/writing-tests)
- [Redux Style Guide](https://redux.js.org/style-guide/style-guide)

---

**Previous Module**: [0x08-react_redux_reducer_selector](../0x08-react_redux_reducer_selector/) - Redux state management  
**Course Complete**: You have successfully completed the ALX React specialization curriculum! 🎉

## 🎉 Congratulations!

You have successfully completed the entire ALX React curriculum, progressing from basic Webpack configuration to advanced Redux patterns. You now have the skills to build production-ready React applications with modern tools and best practices.
### Learning Objectives

- Redux connectors and how to use them
- The different functions you can pass to a connector (mapStateToProps, mapDispatchToPros)
- How to map an action creator to a component using a connector
- How to map an async action creator to a component with Redux Thunk
- What Redux Providers are and how to set up your app’s store
- How you can improve a connector’s performance using Reselect
- How to use Redux’s dev tools to debug the state of your application

Task list

1. Create a small store
2. Test MapStateToProps
3. Update mapStateToProps
4. Connect your actions creators
mandatory
5. Refactor your code
6. Update your tests
7. Async actions & Thunk middleware
8. Connect LoginRequest to the App
mandatory
9. Connect user state to the Footer
10. Connect Logout action creator to the Header
11. Modify the uiReducer
12. Modify the test suites
13. Understand how to use the Redux Chrome extension
14. Combine store: Root reducer
15. Combine store: modify the application
16. Combine store: write the tests
17. Connect notifications: New Action Creator
18. Connect notifications: Improve reducer
19. Connect notifications to the reducer
20. Connect notifications: clean up
21. Connect notifications: update the test suites
22. Selectors
23. Connect courses: create a course selector
24. Connect courses: create a fetch courses function
25. Connect the courses component
26. Memoized selectors: Redux Reselect
27. Memoized selectors: update the UI
28. Memoized selectors: update the test suite
29. Container/Component
