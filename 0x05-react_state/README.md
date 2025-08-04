# 0x05. React State - Advanced State Management & Context API

## 📋 Project Description

This module explores advanced state management patterns in React, including local component state, Context API, and state sharing between components. Learn to build complex, stateful applications with proper state architecture.

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Understand React state and its lifecycle
- Implement local component state management
- Use React Context API for global state sharing
- Handle state updates and side effects properly
- Create controlled and uncontrolled components
- Implement state lifting and state sharing patterns
- Use callback functions to update parent state
- Optimize state updates for performance
- Handle complex state objects and arrays

## 🛠️ Technologies Used

- **React 16.14.0** - JavaScript library with hooks and context
- **React Context API** - Built-in state management solution
- **Aphrodite 2.4.0** - CSS-in-JS library for styling
- **PropTypes** - Runtime type checking for React props
- **Enzyme** - React component testing utility
- **Jest** - JavaScript testing framework
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
0x05-react_state/
├── task_0/                 # Local state management
│   └── dashboard/
│       ├── package.json
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   ├── App.css
│           │   └── App.test.js
│           ├── Login/
│           │   ├── Login.js
│           │   └── Login.test.js
│           ├── Notifications/
│           │   ├── Notifications.js
│           │   ├── NotificationItem.js
│           │   └── Notifications.test.js
│           └── Header/
│               ├── Header.js
│               └── Header.test.js
├── task_1/                 # Controlled components
│   └── dashboard/
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   └── App.test.js
│           └── Login/
│               ├── Login.js
│               └── Login.test.js
├── task_2/                 # Context API introduction
│   └── dashboard/
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   ├── AppContext.js
│           │   └── App.test.js
│           └── Header/
│               ├── Header.js
│               └── Header.test.js
├── task_3/                 # Context Provider
│   └── dashboard/
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   ├── AppContext.js
│           │   └── App.test.js
│           └── Header/
│               ├── Header.js
│               └── Header.test.js
└── task_4/                 # Advanced context usage
    └── dashboard/
        └── src/
            ├── App/
            │   ├── App.js
            │   ├── AppContext.js
            │   └── App.test.js
            ├── Login/
            │   ├── Login.js
            │   └── Login.test.js
            └── Header/
                ├── Header.js
                └── Header.test.js
```

## 📚 Tasks Overview

### Task 0: Adding a Local State for Notifications
- **Objective**: Implement local state to control UI display
- **Features**: Toggle notification drawer visibility
- **Skills**: useState, event handlers, state updates

### Task 1: Controlled Components and State Callback
- **Objective**: Create controlled form components
- **Features**: Login form with controlled inputs
- **Skills**: Controlled components, form handling, state lifting

### Task 2: Context
- **Objective**: Introduce React Context for global state
- **Features**: User authentication context
- **Skills**: Context creation, default values, context consumption

### Task 3: Context Consumer & Advanced State
- **Objective**: Implement context consumer patterns
- **Features**: Header component with user context
- **Skills**: Context.Consumer, conditional rendering with context

### Task 4: Introduction to React Hook
- **Objective**: Convert class components to hooks
- **Features**: useState and useEffect hooks
- **Skills**: Hooks API, functional components, effect management

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Completed 0x04-React_inline_styling module

### Installation and Setup

1. Navigate to any task directory:
   ```bash
   cd task_0/dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run tests:
   ```bash
   npm test
   ```

## 📖 Key Concepts

### React State Fundamentals
- **Local State**: Component-specific data
- **State Updates**: Triggering re-renders through setState
- **State Immutability**: Never mutate state directly
- **Functional Updates**: Using functions for complex state updates

### Context API
- **Global State**: Sharing state across component tree
- **Provider Pattern**: Supplying context values
- **Consumer Pattern**: Consuming context in components
- **Context Performance**: Optimizing context usage

### Controlled vs Uncontrolled Components
- **Controlled**: React controls form element values
- **Uncontrolled**: DOM controls form element values
- **Form Handling**: Managing form state and validation
- **Input Binding**: Connecting inputs to state

## 🧪 Testing State Management

### State Testing
```javascript
describe('App Component State', () => {
  it('should initialize with displayDrawer false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('should update displayDrawer state when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('should update displayDrawer state when handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});
```

### Context Testing
```javascript
describe('App Context', () => {
  it('should have default context values', () => {
    const { user, logOut } = AppContext._currentValue;
    expect(user).toEqual({
      email: '',
      password: '',
      isLoggedIn: false
    });
    expect(typeof logOut).toBe('function');
  });
});
```

### Controlled Component Testing
```javascript
describe('Login Component', () => {
  it('should update state when input values change', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[type="email"]');
    
    emailInput.simulate('change', {
      target: { name: 'email', value: 'test@test.com' }
    });
    
    expect(wrapper.state('email')).toBe('test@test.com');
  });
});
```

## 🎨 Implementation Examples

### Local State Management (Task 0)
```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    };
    
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    return (
      <>
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.container)}>
          <Header />
          <div className={css(styles.appBody)}>
            {this.props.isLoggedIn ? <CourseList /> : <Login />}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
```

### Controlled Components (Task 1)
```jsx
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ 
      email,
      enableSubmit: email !== '' && this.state.password !== ''
    });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ 
      password,
      enableSubmit: this.state.email !== '' && password !== ''
    });
  }

  render() {
    return (
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label className={css(styles.label)}>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            className={css(styles.input)}
          />
          <label className={css(styles.label)}>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
            className={css(styles.input)}
          />
          <input
            type="submit"
            value="OK"
            disabled={!this.state.enableSubmit}
            className={css(styles.button)}
          />
        </form>
      </div>
    );
  }
}
```

### Context API Setup (Task 2)
```jsx
// AppContext.js
import React from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false
};

export function logOut() {
  // Logout logic
}

const AppContext = React.createContext({
  user,
  logOut
});

export default AppContext;
```

### Context Provider (Task 3)
```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: this.logOut.bind(this),
      displayDrawer: false
    };
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  render() {
    const contextValue = {
      user: this.state.user,
      logOut: this.state.logOut
    };

    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Notifications
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className={css(styles.container)}>
            <Header />
            <div className={css(styles.appBody)}>
              {this.state.user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn.bind(this)} />
                </BodySectionWithMarginBottom>
              )}
            </div>
            <Footer />
          </div>
        </>
      </AppContext.Provider>
    );
  }
}
```

### Context Consumer (Task 3)
```jsx
class Header extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={css(styles.appHeader)}>
            <img src={logo} className={css(styles.appLogo)} alt="logo" />
            <h1 className={css(styles.h1)}>School dashboard</h1>
            {context.user.isLoggedIn && (
              <section id="logoutSection" className={css(styles.logoutSection)}>
                Welcome {context.user.email} (
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    context.logOut();
                  }}
                  className={css(styles.logoutLink)}
                >
                  logout
                </a>
                )
              </section>
            )}
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
```

### React Hooks Conversion (Task 4)
```jsx
import React, { useState, useEffect, useContext } from 'react';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false
  });
  const [displayDrawer, setDisplayDrawer] = useState(false);

  const logOut = () => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false
    });
  };

  const logIn = (email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true
    });
  };

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  };

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        alert('Logging you out');
        logOut();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const contextValue = { user, logOut };

  return (
    <AppContext.Provider value={contextValue}>
      {/* Component JSX */}
    </AppContext.Provider>
  );
}
```

## 🔧 Advanced Patterns

### State Lifting
```jsx
// Parent component manages state for multiple children
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedData: ''
    };
  }

  updateSharedData = (newData) => {
    this.setState({ sharedData: newData });
  }

  render() {
    return (
      <div>
        <ChildA 
          data={this.state.sharedData}
          onUpdate={this.updateSharedData}
        />
        <ChildB data={this.state.sharedData} />
      </div>
    );
  }
}
```

### Complex State Updates
```jsx
// Using functional setState for complex updates
this.setState(prevState => ({
  notifications: [
    ...prevState.notifications.filter(n => n.id !== id),
    { ...notificationToUpdate, read: true }
  ]
}));
```

### Context with Multiple Values
```jsx
const AppContext = React.createContext({
  user: null,
  theme: 'light',
  notifications: [],
  actions: {
    login: () => {},
    logout: () => {},
    toggleTheme: () => {},
    addNotification: () => {}
  }
});
```

## 🏆 Best Practices

### State Management
- Keep state as local as possible
- Lift state up only when necessary
- Use immutable update patterns
- Avoid deeply nested state objects

### Context Usage
- Don't overuse Context - use for truly global state
- Split context by concern (user, theme, etc.)
- Optimize context to prevent unnecessary re-renders
- Provide meaningful default values

### Performance Optimization
- Use React.memo for pure components
- Implement proper shouldComponentUpdate
- Avoid creating objects in render methods
- Use callback memoization with useCallback

### Form Handling
- Always use controlled components for forms
- Validate input data before state updates
- Handle edge cases and error states
- Provide good user feedback

## 🔍 Common Patterns

### Toggle State Pattern
```jsx
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(prev => !prev);
```

### Form State Pattern
```jsx
const [formData, setFormData] = useState({
  email: '',
  password: ''
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};
```

### Notification State Pattern
```jsx
const [notifications, setNotifications] = useState([]);

const addNotification = (notification) => {
  setNotifications(prev => [...prev, notification]);
};

const removeNotification = (id) => {
  setNotifications(prev => prev.filter(n => n.id !== id));
};
```

## 🎓 Skills Gained

After completing this module, you will have:
- Mastery of React state management patterns
- Understanding of Context API and its use cases
- Experience with controlled and uncontrolled components
- Knowledge of state lifting and sharing strategies
- Ability to handle complex form interactions
- Skills in optimizing state updates for performance
- Understanding of React hooks and functional components
- Experience with testing stateful components

## 📚 Additional Resources

- [React State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [React Context API](https://reactjs.org/docs/context.html)
- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [Forms in React](https://reactjs.org/docs/forms.html)
- [State Management Patterns](https://reactjs.org/docs/thinking-in-react.html)

---

**Previous Module**: [0x04-React_inline_styling](../0x04-React_inline_styling/) - Styling in React  
**Next Module**: [0x07-react_redux_action_creator_normalizr](../0x07-react_redux_action_creator_normalizr/) - Redux fundamentals
