# 0x04. React Inline Styling - CSS-in-JS & Responsive Design

## 📋 Project Description

This module focuses on modern styling approaches in React applications. Learn CSS-in-JS techniques, responsive design patterns, and how to create maintainable, dynamic styles that integrate seamlessly with component logic.

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Implement CSS-in-JS using Aphrodite library
- Create responsive designs with media queries in JavaScript
- Apply conditional styling based on component state and props
- Optimize styles for performance and maintainability
- Use inline styles effectively for dynamic styling
- Implement theme systems and design tokens
- Handle hover states and pseudo-selectors in CSS-in-JS
- Create reusable style patterns and mixins

## 🛠️ Technologies Used

- **React 16.14.0** - JavaScript library for building user interfaces
- **Aphrodite 2.4.0** - CSS-in-JS library for React
- **PropTypes** - Runtime type checking for React props
- **Enzyme** - React component testing utility
- **Jest** - JavaScript testing framework
- **CSS3** - Modern styling features
- **JavaScript ES6+** - Modern JavaScript for dynamic styles

## 📁 Project Structure

```
0x04-React_inline_styling/
├── task_0/                 # Basic inline styling
│   └── dashboard/
│       ├── package.json
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   ├── App.css
│           │   └── App.test.js
│           ├── Login/
│           │   ├── Login.js
│           │   └── Login.css
│           ├── Notifications/
│           │   ├── Notifications.js
│           │   ├── NotificationItem.js
│           │   └── Notifications.css
│           └── CourseList/
│               ├── CourseList.js
│               ├── CourseListRow.js
│               └── CourseList.css
├── task_1/                 # CSS-in-JS introduction
│   └── dashboard/
│       └── src/
│           └── BodySection/
│               ├── BodySection.js
│               ├── BodySectionWithMarginBottom.js
│               └── BodySection.test.js
├── task_2/                 # Conditional styling
│   └── dashboard/
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   └── App.test.js
│           ├── CourseList/
│           │   ├── CourseList.js
│           │   └── CourseListRow.js
│           └── Login/
│               └── Login.js
├── task_3/                 # Responsive design
│   └── dashboard/
│       └── src/
│           ├── App/
│           │   ├── App.js
│           │   └── App.test.js
│           ├── Header/
│           │   └── Header.js
│           ├── Login/
│           │   └── Login.js
│           └── Notifications/
│               ├── Notifications.js
│               └── NotificationItem.js
└── task_4/                 # Advanced styling patterns
    └── dashboard/
        └── src/
            ├── App/
            │   ├── App.js
            │   └── App.test.js
            ├── Header/
            │   └── Header.js
            ├── Login/
            │   └── Login.js
            ├── Notifications/
            │   ├── Notifications.js
            │   └── NotificationItem.js
            └── CourseList/
                ├── CourseList.js
                └── CourseListRow.js
```

## 📚 Tasks Overview

### Task 0: Inline Styling
- **Objective**: Implement basic inline styles for dynamic styling
- **Components**: CourseListRow with conditional row styling
- **Skills**: Inline styles, conditional styling

### Task 1: Install Aphrodite
- **Objective**: Set up CSS-in-JS with Aphrodite library
- **Setup**: Package installation and basic configuration
- **Skills**: CSS-in-JS setup, Aphrodite basics

### Task 2: Conditionally Applying Style
- **Objective**: Apply styles based on component state and props
- **Components**: CourseListRow, Login with conditional styles
- **Skills**: Dynamic styling, state-based styles

### Task 3: Responsive Design
- **Objective**: Implement responsive design with media queries
- **Components**: All components with mobile-first approach
- **Skills**: Media queries in CSS-in-JS, responsive patterns

### Task 4: Animation
- **Objective**: Add animations and transitions to enhance UX
- **Features**: Hover effects, opacity animations, bouncing
- **Skills**: CSS animations in JavaScript, keyframes

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Completed 0x03-React_component module

### Installation and Setup

1. Navigate to any task directory:
   ```bash
   cd task_0/dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Aphrodite (for tasks 1-4):
   ```bash
   npm install aphrodite
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Run tests:
   ```bash
   npm test
   ```

## 📖 Key Concepts

### CSS-in-JS Benefits
- **Component Scoping**: Styles are scoped to components
- **Dynamic Styling**: Styles can use JavaScript variables and logic
- **Type Safety**: Catch style errors at compile time
- **Dead Code Elimination**: Unused styles are automatically removed
- **Better Performance**: Only load styles that are actually used

### Aphrodite Features
- **StyleSheet API**: Create reusable style objects
- **Media Queries**: Responsive design with JavaScript
- **Pseudo-selectors**: Hover, focus, and other states
- **Keyframe Animations**: Complex animations and transitions
- **Server-side Rendering**: SSR support out of the box

### Responsive Design Patterns
- **Mobile-First**: Design for mobile devices first
- **Flexible Layouts**: Use relative units and flexbox
- **Media Queries**: Breakpoint-based responsive design
- **Touch-Friendly**: Design for touch interactions

## 🧪 Testing Styled Components

### Testing with StyleSheetTestUtils
```javascript
import { StyleSheetTestUtils } from 'aphrodite';

describe('App Component Styling', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders with correct styles', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.app-header')).toHaveLength(1);
  });
});
```

### Testing Conditional Styles
```javascript
it('applies urgent style when type is urgent', () => {
  const wrapper = shallow(
    <NotificationItem type="urgent" value="test" />
  );
  expect(wrapper.prop('className')).toContain('urgent');
});
```

## 🎨 Styling Examples

### Basic Aphrodite Usage
```jsx
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: '20px',
    borderBottom: '3px solid #e01d3f',
    display: 'flex',
    alignItems: 'center'
  },
  
  logo: {
    height: '200px',
    width: '200px'
  },
  
  title: {
    color: '#e01d3f',
    margin: 0,
    fontSize: '48px'
  }
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}
```

### Conditional Styling
```jsx
const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red',
    fontWeight: 'bold'
  },
  row: {
    backgroundColor: '#f5f5f5ab'
  },
  headerRow: {
    backgroundColor: '#deb5b545'
  }
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? styles.headerRow : styles.row;
  
  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
```

### Responsive Design
```jsx
const styles = StyleSheet.create({
  app: {
    minHeight: '100vh',
    maxWidth: '100vw',
    position: 'relative',
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  
  appBody: {
    fontSize: '1rem',
    padding: '2em',
    '@media (max-width: 900px)': {
      padding: '1em'
    }
  },
  
  footer: {
    fontSize: '1rem',
    padding: '1.2rem',
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid #e01d3f',
    '@media (max-width: 900px)': {
      fontSize: '0.8rem',
      padding: '0.5rem'
    }
  }
});
```

### Animations and Hover Effects
```jsx
const styles = StyleSheet.create({
  menuItem: {
    position: 'relative',
    zIndex: 100,
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeOut, bounceIn],
      animationDuration: '0.5s, 0.5s',
      animationIterationCount: '1, 1'
    }
  },
  
  notificationItem: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
    ':hover': {
      cursor: 'pointer'
    }
  }
});

const fadeOut = {
  '0%': { opacity: 1 },
  '50%': { opacity: 0.5 },
  '100%': { opacity: 1 }
};

const bounceIn = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' }
};
```

### Login Form Styling
```jsx
const styles = StyleSheet.create({
  appBody: {
    fontSize: '1rem',
    padding: '2em',
    height: '45%'
  },
  
  input: {
    height: '1.4rem',
    marginLeft: '10px',
    marginRight: '15px',
    border: '1px solid #ddd',
    borderRadius: '3px'
  },
  
  button: {
    border: '1px solid #ddd',
    borderRadius: '3px',
    padding: '3px',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer'
  },
  
  label: {
    marginRight: '10px'
  }
});

function Login() {
  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label className={css(styles.label)}>Email:</label>
        <input 
          type="email" 
          name="email" 
          className={css(styles.input)}
        />
        <label className={css(styles.label)}>Password:</label>
        <input 
          type="password" 
          name="password" 
          className={css(styles.input)}
        />
        <button type="submit" className={css(styles.button)}>
          OK
        </button>
      </form>
    </div>
  );
}
```

## 🔧 Advanced Patterns

### Theme System
```jsx
const theme = {
  colors: {
    primary: '#e01d3f',
    secondary: '#fff',
    gray: '#f5f5f5ab',
    darkGray: '#deb5b545'
  },
  breakpoints: {
    mobile: '@media (max-width: 900px)'
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem'
  }
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.secondary,
    borderBottom: `3px solid ${theme.colors.primary}`,
    padding: theme.spacing.large,
    [theme.breakpoints.mobile]: {
      padding: theme.spacing.medium
    }
  }
});
```

### Style Composition
```jsx
const baseStyles = StyleSheet.create({
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: '#e01d3f',
    color: 'white'
  },
  secondary: {
    backgroundColor: '#f5f5f5',
    color: '#333'
  }
});

function Button({ variant, children, ...props }) {
  return (
    <button 
      className={css(baseStyles.button, variantStyles[variant])}
      {...props}
    >
      {children}
    </button>
  );
}
```

## 🏆 Best Practices

### Performance Optimization
- Use StyleSheet.create() for better performance
- Avoid creating styles in render methods
- Minimize the number of style objects
- Use CSS custom properties for dynamic values

### Maintainability
- Create a consistent design system
- Use descriptive style names
- Group related styles together
- Document complex style logic

### Responsive Design
- Use mobile-first approach
- Test on multiple devices and screen sizes
- Consider touch interactions
- Optimize for performance on mobile devices

### Accessibility
- Ensure sufficient color contrast
- Use semantic HTML elements
- Provide focus indicators
- Test with screen readers

## 🔍 Common Patterns

### Conditional Class Application
```jsx
function NotificationItem({ type, value, html, markAsRead, id }) {
  const handleClick = () => markAsRead(id);
  
  return (
    <li
      className={css(
        styles.notificationItem,
        type === 'urgent' && styles.urgent
      )}
      onClick={handleClick}
    >
      {html ? (
        <span dangerouslySetInnerHTML={html} />
      ) : (
        value
      )}
    </li>
  );
}
```

### Media Query Mixins
```jsx
const breakpoints = {
  mobile: '@media (max-width: 900px)',
  tablet: '@media (max-width: 1200px)',
  desktop: '@media (min-width: 1201px)'
};

const styles = StyleSheet.create({
  container: {
    padding: '2rem',
    [breakpoints.mobile]: {
      padding: '1rem'
    },
    [breakpoints.tablet]: {
      padding: '1.5rem'
    }
  }
});
```

## 🎓 Skills Gained

After completing this module, you will have:
- Expertise in CSS-in-JS methodologies
- Understanding of responsive design principles
- Knowledge of Aphrodite library and its features
- Ability to create dynamic, conditional styles
- Experience with animations and transitions in React
- Skills in building maintainable style systems
- Understanding of performance implications of styling choices
- Ability to create accessible and inclusive designs

## 📚 Additional Resources

- [Aphrodite Documentation](https://github.com/Khan/aphrodite)
- [CSS-in-JS Comparison](https://github.com/MicheleBertoli/css-in-js)
- [Responsive Web Design](https://web.dev/responsive-web-design-basics/)
- [React Animation Libraries](https://blog.bitsrc.io/11-javascript-animation-libraries-for-2018-9d7ac93a2c59)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Previous Module**: [0x03-React_component](../0x03-React_component/) - Component lifecycle and state  
**Next Module**: [0x05-react_state](../0x05-react_state/) - Advanced state management
