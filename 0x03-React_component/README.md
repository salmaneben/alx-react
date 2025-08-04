# 0x03. React Component - Lifecycle & State Management

## 📋 Project Description

This module explores React class components, lifecycle methods, and local state management. Learn how to create interactive components that respond to user input and manage their own data over time.

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Understand React component lifecycle methods
- Implement local component state management
- Handle user events and state updates
- Optimize component performance with shouldComponentUpdate
- Create higher-order components (HOCs)
- Work with component mounting and unmounting
- Implement proper event handling patterns
- Use React's synthetic event system effectively

## 🛠️ Technologies Used

- **React 16.14.0** - JavaScript library with class components
- **PropTypes** - Runtime type checking for React props
- **Enzyme** - React component testing utility
- **Jest** - JavaScript testing framework
- **CSS3** - Component styling
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
0x03-React_component/
├── task_0/                 # Class components conversion
│   └── dashboard/
│       ├── package.json
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   ├── App.css
│           │   └── App.test.js
│           ├── Notifications/
│           │   ├── Notifications.js
│           │   ├── NotificationItem.js
│           │   └── Notifications.test.js
│           └── CourseList/
│               ├── CourseList.js
│               └── CourseListRow.js
├── task_1/                 # Lifecycle methods
│   └── dashboard/
│       └── src/
│           └── App/
│               ├── App.js
│               └── App.test.js
├── task_2/                 # Event handling
│   └── dashboard/
│       └── src/
│           └── App/
│               ├── App.js
│               └── App.test.js
├── task_3/                 # Performance optimization
│   └── dashboard/
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   └── App.test.js
│           └── Notifications/
│               ├── Notifications.js
│               └── Notifications.test.js
├── task_4/                 # State management
│   └── dashboard/
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   └── App.test.js
│           └── BodySection/
│               ├── BodySection.js
│               ├── BodySectionWithMarginBottom.js
│               └── BodySection.test.js
└── task_5/                 # Advanced state handling
    └── dashboard/
        └── src/
            ├── App/
            │   ├── App.js
            │   └── App.test.js
            └── Notifications/
                ├── Notifications.js
                ├── NotificationItem.js
                └── Notifications.test.js
```

## 📚 Tasks Overview

### Task 0: Commence with Class Components
- **Objective**: Convert function components to class components
- **Components**: App, Notifications, NotificationItem
- **Skills**: Class component syntax, render method

### Task 1: Lifecycles
- **Objective**: Implement component lifecycle methods
- **Methods**: componentDidMount, componentWillUnmount
- **Skills**: Event listeners, memory management

### Task 2: Handling Events
- **Objective**: Implement keyboard event handling
- **Events**: keydown, Ctrl+h shortcut
- **Skills**: Event handling, alerts, function binding

### Task 3: Reusable Comments & Specialization
- **Objective**: Create reusable BodySection components
- **Components**: BodySection, BodySectionWithMarginBottom
- **Skills**: Component composition, Higher-Order Components

### Task 4: Specialization
- **Objective**: Implement component specialization patterns
- **Features**: Enhanced BodySection with margin
- **Skills**: Component inheritance, CSS integration

### Task 5: Use the New Components
- **Objective**: Integrate new components into application
- **Integration**: Complete app with all components
- **Skills**: Component orchestration, state management

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Completed 0x02. React props module

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

### Component Lifecycle
React class components have several lifecycle phases:

#### Mounting
- **constructor()**: Initialize state and bind methods
- **componentDidMount()**: Setup after component is mounted
- **render()**: Return JSX to be rendered

#### Updating
- **shouldComponentUpdate()**: Optimize re-rendering
- **componentDidUpdate()**: Handle updates after re-render
- **render()**: Re-render component

#### Unmounting
- **componentWillUnmount()**: Cleanup before component removal

### State Management
- **Local State**: Component-specific data
- **setState()**: Update state and trigger re-render
- **State Immutability**: Never mutate state directly
- **Functional Updates**: Use functions for state updates

### Event Handling
- **Synthetic Events**: React's cross-browser event system
- **Event Binding**: Binding context in class components
- **Event Delegation**: React's efficient event handling
- **Prevent Default**: Controlling browser behavior

## 🧪 Testing Component Lifecycle

### Lifecycle Testing
```javascript
describe('App Component Lifecycle', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    mount(<App />);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('calls componentWillUnmount', () => {
    const spy = jest.spyOn(App.prototype, 'componentWillUnmount');
    const wrapper = mount(<App />);
    wrapper.unmount();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
```

### Event Testing
```javascript
describe('Event Handling', () => {
  it('calls alert when Ctrl+h is pressed', () => {
    const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = mount(<App logOut={jest.fn()} />);
    
    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true
    });
    
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledWith('Logging you out');
    
    spy.mockRestore();
    wrapper.unmount();
  });
});
```

## 🎨 Application Features

### Enhanced Dashboard
The tasks build upon previous modules to create:

#### Event-Driven Interactions
- Keyboard shortcuts (Ctrl+h for logout)
- Alert system for user feedback
- Responsive event handling

#### Component Structure
- Modular BodySection components
- Reusable notification system
- Proper component hierarchy

#### Performance Optimizations
- shouldComponentUpdate implementation
- Efficient re-rendering patterns
- Memory leak prevention

## 📝 Code Examples

### Class Component Structure
```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          {this.props.isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
    );
  }
}
```

### Higher-Order Component Pattern
```jsx
// Base component
class BodySection extends React.Component {
  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

// Enhanced component with additional styling
class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}
```

### State Management Example
```jsx
class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    
    return (
      <div className="Notifications">
        {displayDrawer && (
          <div className="Notifications-content">
            <ul>
              {listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
```

### Performance Optimization
```jsx
shouldComponentUpdate(nextProps, nextState) {
  // Only re-render if notifications list has grown
  if (nextProps.listNotifications.length > this.props.listNotifications.length) {
    return true;
  }
  return false;
}
```

## 🔧 Component Lifecycle Methods

### Mounting Phase
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state, bind methods
  }

  componentDidMount() {
    // API calls, set up subscriptions, start timers
    this.timer = setInterval(() => {
      // Regular updates
    }, 1000);
  }
}
```

### Updating Phase
```jsx
componentDidUpdate(prevProps, prevState) {
  // Handle prop or state changes
  if (this.props.userId !== prevProps.userId) {
    this.fetchUserData(this.props.userId);
  }
}

shouldComponentUpdate(nextProps, nextState) {
  // Optimize rendering performance
  return nextProps.value !== this.props.value;
}
```

### Unmounting Phase
```jsx
componentWillUnmount() {
  // Cleanup: remove event listeners, cancel timers
  if (this.timer) {
    clearInterval(this.timer);
  }
  document.removeEventListener('keydown', this.handleKeyDown);
}
```

## 🏆 Best Practices

### State Management
- Initialize state in constructor
- Use setState() for state updates
- Never mutate state directly
- Use functional setState for complex updates

### Event Handling
- Bind methods in constructor or use arrow functions
- Remove event listeners in componentWillUnmount
- Use synthetic events for cross-browser compatibility
- Handle errors gracefully

### Performance
- Implement shouldComponentUpdate when needed
- Use React.PureComponent for simple optimization
- Avoid creating objects in render method
- Minimize re-renders through proper component structure

### Component Design
- Keep components focused and single-purpose
- Use composition over inheritance
- Implement proper prop validation
- Handle edge cases and error states

## 🔍 Common Patterns

### Event Handler Binding
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // Method 1: Bind in constructor
    this.handleClick = this.handleClick.bind(this);
  }

  // Method 2: Arrow function property
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    // Handle click
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <input onChange={this.handleChange} />
      </div>
    );
  }
}
```

### Conditional Class Names
```jsx
render() {
  const classes = `notification ${this.props.type}`;
  return <div className={classes}>{this.props.children}</div>;
}
```

## 🎓 Skills Gained

After completing this module, you will have:
- Mastery of React class component patterns
- Understanding of component lifecycle management
- Event handling and user interaction skills
- Performance optimization techniques
- Higher-order component creation abilities
- State management best practices
- Testing strategies for interactive components
- Memory management and cleanup practices

## 📚 Additional Resources

- [React Component Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Handling Events in React](https://reactjs.org/docs/handling-events.html)
- [React Performance Optimization](https://reactjs.org/docs/optimizing-performance.html)
- [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)
- [React Testing Patterns](https://reactjs.org/docs/testing-recipes.html)

---

**Previous Module**: [0x02. React props](../0x02.%20React%20props/) - Component communication and data flow  
**Next Module**: [0x04-React_inline_styling](../0x04-React_inline_styling/) - Styling in React applications
