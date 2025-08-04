# 0x02. React props - Component Communication & Data Flow

## 📋 Project Description

This module focuses on React props - the mechanism for passing data between components. Learn how to create reusable components, validate data types, and implement proper component communication patterns.

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Understand the concept and purpose of props in React
- Pass data from parent to child components
- Implement prop validation with PropTypes
- Create reusable components with configurable properties
- Handle different data types through props
- Use default props for component flexibility
- Build dynamic lists with props
- Implement conditional rendering based on props

## 🛠️ Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **PropTypes** - Runtime type checking for React props
- **Enzyme** - React component testing utility
- **Jest** - JavaScript testing framework
- **Create React App** - Development environment and build tools

## 📁 Project Structure

```
0x02. React props/
├── task_0/                 # Basic props implementation
│   └── dashboard/
│       ├── package.json
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   └── App.css
│           ├── Notifications/
│           │   └── Notifications.js
│           ├── Header/
│           │   └── Header.js
│           ├── Login/
│           │   └── Login.js
│           └── Footer/
│               └── Footer.js
├── task_1/                 # PropTypes validation
│   └── dashboard/
│       └── src/
│           └── Notifications/
│               ├── NotificationItem.js
│               └── Notifications.js
├── task_2/                 # Component composition
│   └── dashboard/
│       └── src/
│           └── Notifications/
│               ├── NotificationItem.js
│               ├── NotificationItem.css
│               └── Notifications.js
├── task_3/                 # Conditional rendering
│   ├── change_property.png
│   ├── profiler.png
│   └── dashboard/
│       └── src/
│           └── CourseList/
│               ├── CourseList.js
│               └── CourseList.css
├── task_4/                 # Advanced props usage
│   └── dashboard/
│       └── src/
│           ├── App/
│           │   └── App.js
│           └── CourseList/
│               ├── CourseList.js
│               ├── CourseListRow.js
│               └── CourseListRow.css
└── task_5/                 # Complete implementation
    └── dashboard/
        └── src/
            ├── App/
            │   ├── App.js
            │   └── App.test.js
            ├── CourseList/
            │   ├── CourseList.js
            │   ├── CourseListRow.js
            │   └── CourseList.test.js
            └── Notifications/
                ├── Notifications.js
                ├── NotificationItem.js
                └── Notifications.test.js
```

## 📚 Tasks Overview

### Task 0: Basic Props
- **Objective**: Create reusable components with props
- **Components**: Header, Footer, Login, Notifications
- **Skills**: Component modularization, basic props usage

### Task 1: Write Tests for React Components
- **Objective**: Implement comprehensive testing
- **Components**: All components with test suites
- **Skills**: Testing with props, Enzyme shallow rendering

### Task 2: Split the Notifications Component
- **Objective**: Create NotificationItem component
- **Components**: Notifications, NotificationItem
- **Skills**: Component composition, props passing

### Task 3: Checking the Application Using React Developer Tools
- **Objective**: Debug and profile React applications
- **Tools**: React DevTools, Performance profiler
- **Skills**: Performance analysis, component inspection

### Task 4: Props Types & Default Props
- **Objective**: Implement prop validation and defaults
- **Components**: CourseList, CourseListRow
- **Skills**: PropTypes, defaultProps, data validation

### Task 5: Shapes, Loops, and Keys
- **Objective**: Handle complex data structures
- **Components**: Enhanced components with object props
- **Skills**: Array rendering, object shapes, React keys

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Completed 0x01. React intro module

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

4. Run tests:
   ```bash
   npm test
   ```

## 📖 Key Concepts

### Props Fundamentals
- **Data Flow**: Unidirectional data flow from parent to child
- **Immutability**: Props are read-only and should not be modified
- **Composition**: Building complex UIs from simple components
- **Reusability**: Creating flexible components through props

### PropTypes Validation
- **Type Checking**: Runtime validation of prop types
- **Required Props**: Ensuring critical props are provided
- **Default Values**: Fallback values for optional props
- **Custom Validators**: Advanced validation logic

### Component Patterns
- **Container Components**: Logic and state management
- **Presentational Components**: UI rendering and display
- **Higher-Order Components**: Component enhancement
- **Render Props**: Flexible component composition

## 🧪 Testing Strategies

### Component Testing
```javascript
describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct HTML with type and value props', () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="test" />
    );
    expect(wrapper.find('li')).toHaveLength(1);
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  });
});
```

### Props Testing
```javascript
it('passes correct props to children', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 }
  ];
  
  const wrapper = shallow(<CourseList listCourses={listCourses} />);
  const rows = wrapper.find('CourseListRow');
  
  expect(rows.at(2).prop('textFirstCell')).toBe('ES6');
  expect(rows.at(2).prop('textSecondCell')).toBe(60);
});
```

## 🎨 Application Features

### Dashboard Components

#### Header Component
- School logo display
- Dashboard title
- Responsive design

#### Login Component
- Email and password inputs
- Login form functionality
- Accessibility features

#### Footer Component
- Copyright information
- Dynamic year display
- Conditional content

#### Notifications Component
- Notification list display
- Priority-based styling
- Dynamic content rendering

#### CourseList Component
- Course data display
- Table structure
- Header and data rows

### Data Structures

#### Notification Objects
```javascript
{
  id: 1,
  type: "default" | "urgent",
  value: "string",
  html: { __html: "string" } // for HTML content
}
```

#### Course Objects
```javascript
{
  id: 1,
  name: "Course Name",
  credit: 60
}
```

## 📝 Code Examples

### Basic Props Usage
```jsx
// Parent Component
function App() {
  return (
    <div>
      <Header />
      <Notifications displayDrawer={true} />
      <Login />
      <Footer />
    </div>
  );
}

// Child Component
function Notifications({ displayDrawer }) {
  return (
    <div className="Notifications">
      {displayDrawer && (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </div>
  );
}
```

### PropTypes Implementation
```jsx
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html }) {
  if (html) {
    return (
      <li 
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
      />
    );
  }
  
  return (
    <li data-notification-type={type}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
};

NotificationItem.defaultProps = {
  type: 'default'
};
```

### List Rendering with Keys
```jsx
function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow 
          textFirstCell="Available courses" 
          isHeader={true} 
        />
        <CourseListRow 
          textFirstCell="Course name" 
          textSecondCell="Credit" 
          isHeader={true} 
        />
      </thead>
      <tbody>
        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false}
          />
        ))}
      </tbody>
    </table>
  );
}
```

## 🔧 Development Tools

### React Developer Tools
- **Component Tree**: Inspect component hierarchy
- **Props Inspector**: View component props and state
- **Profiler**: Analyze component performance
- **Hooks Debugger**: Debug React hooks usage

### Browser DevTools Integration
- Elements panel for DOM inspection
- Console for error debugging
- Network tab for asset loading
- Performance tab for optimization

## 🏆 Best Practices

### Props Design
- Use descriptive prop names
- Keep props interface minimal and focused
- Provide sensible default values
- Validate props with PropTypes

### Component Architecture
- Separate concerns between components
- Create reusable, generic components
- Use composition over inheritance
- Implement proper error boundaries

### Testing Guidelines
- Test component rendering with different props
- Verify prop validation works correctly
- Test default prop behavior
- Cover edge cases and error conditions

## 🔍 Common Patterns

### Conditional Rendering
```jsx
function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <CourseList /> : <Login />}
    </div>
  );
}
```

### List Rendering
```jsx
function NotificationsList({ notifications }) {
  if (notifications.length === 0) {
    return <p>No new notifications for now</p>;
  }

  return (
    <ul>
      {notifications.map(notification => (
        <NotificationItem
          key={notification.id}
          type={notification.type}
          value={notification.value}
          html={notification.html}
        />
      ))}
    </ul>
  );
}
```

### Complex Props Validation
```jsx
const courseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(courseShape)
};

CourseList.defaultProps = {
  listCourses: []
};
```

## 🎓 Skills Gained

After completing this module, you will have:
- Deep understanding of React props system
- Experience with component composition patterns
- Knowledge of prop validation and type checking
- Ability to create reusable component libraries
- Testing skills for prop-driven components
- Debugging capabilities with React DevTools
- Understanding of performance implications

## 📚 Additional Resources

- [React Props Documentation](https://reactjs.org/docs/components-and-props.html)
- [PropTypes Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [React Developer Tools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)
- [Component Composition Patterns](https://reactjs.org/docs/composition-vs-inheritance.html)
- [Testing React Components](https://reactjs.org/docs/testing-recipes.html)

---

**Previous Module**: [0x01. React intro](../0x01.%20React%20intro/) - React fundamentals  
**Next Module**: [0x03-React_component](../0x03-React_component/) - Component lifecycle and state
## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

* How to create basic React components using functions
* How to reuse components
* How to pass properties to components
* How to define types for components
* How to use Fragments
* When to use a key to improve a loop’s performance

