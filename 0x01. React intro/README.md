# 0x01. React intro - React Fundamentals

## 📋 Project Description

This module introduces React, a powerful JavaScript library for building user interfaces. Learn the fundamentals of component-based architecture, JSX syntax, and modern React development practices.

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Understand React's core concepts and philosophy
- Create React applications using Create React App
- Write and structure React components
- Use JSX syntax effectively
- Implement basic event handling
- Set up testing environments with Jest and Enzyme
- Work with React Developer Tools

## 🛠️ Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Create React App** - Boilerplate and build tooling
- **JSX** - JavaScript XML syntax extension
- **Jest** - JavaScript testing framework
- **Enzyme** - React component testing utility
- **React Testing Library** - Simple and complete testing utilities
- **Babel** - JavaScript transpiler
- **Webpack** - Module bundler (configured by CRA)

## 📁 Project Structure

```
0x01. React intro/
├── task_0/                 # Create React App setup
│   └── dashboard/
│       ├── package.json
│       ├── public/
│       │   ├── index.html
│       │   ├── favicon.ico
│       │   └── holberton-logo.jpg
│       └── src/
│           ├── App.js
│           ├── App.css
│           ├── index.js
│           └── setupTests.js
├── task_1/                 # Basic components
│   └── dashboard/
│       └── src/
│           ├── App.js
│           ├── Notifications.js
│           └── utils.js
├── task_2/                 # Component structure
│   └── dashboard/
│       └── src/
│           ├── App.js
│           ├── Notifications.js
│           └── utils.js
├── task_3/                 # Testing setup
│   └── dashboard/
│       └── src/
│           ├── App.test.js
│           ├── Notifications.test.js
│           └── setupTests.js
├── task_4/                 # Advanced testing
│   └── dashboard/
│       └── src/
│           └── utils.test.js
└── task_5/                 # Complete implementation
    └── dashboard/
        └── src/
            ├── App.js
            ├── App.test.js
            └── setupTests.js
```

## 📚 Tasks Overview

### Task 0: Basic Application
- **Objective**: Set up Create React App and basic structure
- **Files**: App component, HTML template, basic styling
- **Skills**: Project setup, React basics, JSX

### Task 1: Embedding Expressions
- **Objective**: Create dynamic components with JavaScript expressions
- **Files**: Notifications component, utility functions
- **Skills**: JSX expressions, function components

### Task 2: Modify the App
- **Objective**: Build complete application structure
- **Files**: Header, footer, login components
- **Skills**: Component composition, CSS integration

### Task 3: Modify the Notifications
- **Objective**: Implement advanced notification features
- **Files**: Enhanced notifications with dynamic content
- **Skills**: Conditional rendering, data display

### Task 4: Create Basic Tests
- **Objective**: Set up comprehensive testing suite
- **Files**: Test files for all components
- **Skills**: Jest testing, Enzyme setup, test writing

### Task 5: Install Enzyme
- **Objective**: Advanced testing with Enzyme
- **Files**: Enhanced test suites
- **Skills**: Component testing, shallow rendering

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation and Setup

1. Navigate to any task directory:
   ```bash
   cd "task_0/dashboard"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open browser to view the application:
   ```
   http://localhost:3000
   ```

## 📖 Key Concepts

### React Fundamentals
- **Components**: Reusable UI building blocks
- **JSX**: JavaScript syntax extension for writing HTML-like code
- **Props**: Data passed between components
- **Virtual DOM**: React's efficient rendering system

### Component Types
- **Function Components**: Simple, stateless components
- **Class Components**: Components with lifecycle methods
- **Controlled Components**: Components that React controls

### Testing Principles
- **Unit Testing**: Testing individual components
- **Integration Testing**: Testing component interactions
- **Snapshot Testing**: Testing component output consistency

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

### Test Structure
```javascript
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
```

## 🎨 Application Features

### Dashboard Application
The tasks progressively build a school dashboard featuring:

- **Header Component**: School logo and title
- **Login Component**: User authentication interface
- **Notifications Component**: Alert and message system
- **Footer Component**: Copyright and footer information
- **Main App Component**: Application shell and routing

### UI Elements
- Responsive design principles
- Holberton School branding
- Interactive notifications
- Clean, professional styling

## 📝 Code Examples

### Basic Component (Task 1)
```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
    </div>
  );
}
```

### Utility Functions (Task 2)
```javascript
export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
};

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
};
```

### Testing Example (Task 4)
```javascript
describe('App Component Tests', () => {
  it('renders App-header class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  it('renders App-body class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });
});
```

## 🔧 npm Scripts

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

## 🏆 Best Practices

### Component Design
- Keep components small and focused
- Use descriptive component names
- Implement proper prop validation
- Follow React naming conventions

### Code Organization
- Separate concerns (logic, presentation, styling)
- Use consistent file and folder structure
- Implement proper import/export patterns
- Follow ESLint rules and formatting guidelines

### Testing Strategy
- Write tests for all components
- Test both positive and negative scenarios
- Use descriptive test names
- Maintain high test coverage

## 🔍 Debugging Tools

### React Developer Tools
- Component hierarchy inspection
- Props and state examination
- Performance profiling
- Hook debugging

### Browser DevTools
- Console error analysis
- Network request monitoring
- Element inspection
- JavaScript debugging

## 📚 File Descriptions

### Core Files
- **App.js**: Main application component
- **index.js**: Application entry point
- **setupTests.js**: Test environment configuration
- **package.json**: Project dependencies and scripts

### Component Files
- **Notifications.js**: Notification system component
- **utils.js**: Utility functions and helpers
- **App.css**: Application styling
- **index.css**: Global styles

### Test Files
- **App.test.js**: Main app component tests
- **Notifications.test.js**: Notification component tests
- **utils.test.js**: Utility function tests

## 🎓 Skills Gained

After completing this module, you will have:
- Solid foundation in React development
- Understanding of component-based architecture
- Experience with JSX and JavaScript integration
- Knowledge of testing practices with Jest and Enzyme
- Familiarity with Create React App workflow
- Basic debugging and development tool usage

## 📚 Additional Resources

- [React Official Documentation](https://reactjs.org/)
- [Create React App Documentation](https://create-react-app.dev/)
- [JSX Introduction](https://reactjs.org/docs/introducing-jsx.html)
- [Testing React Components](https://reactjs.org/docs/testing.html)
- [React Developer Tools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)

---

**Previous Module**: [0x00. Webpack](../0x00-Webpack/) - Module bundling fundamentals  
**Next Module**: [0x02. React props](../0x02.%20React%20props/) - Component communication and data flow
