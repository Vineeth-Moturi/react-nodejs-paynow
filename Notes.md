## About Project
  - Used react with Vite.js
  - Created back-end with Node.js and Express



# Creating a React app
 ```
  $npm create vite@latest paynow --template react
  $cd paynow
  $npm install
  $npm run dev
 ```
   - This will start the server at http://localhost:5173


## Naming conventions in your React Project
  1. Component Names
    - PascalCase  --> Ex: MyComponent
  2. File and Directory Names
      - PascalCase for Components --> Ex: MyComponent.jsx
      - Kebab-case for Other Files and Folders  --> Ex: services/api-service.js
  3. CSS/SCSS Class Names
    - BEM (Block Element Modifier)
      - Ex: .button, .button--primary, .button__icon
  4. Props and State Variables
    - camelCase --> Ex: userName
  5. Event Handler Names
    - camelCase with 'handle' Prefix
      - Ex: handleClick, handleSubmit, handleChange
  6. Constants 
    - UPPER_SNAKE_CASE --> Ex: DEFAULT_TIMEOUT, API_URL









> [!TIP]
> ## Here’s a list of frameworks that can be used with React:
>  ### Full-Stack and SSR Frameworks
>  1. **Next.js**: A React framework with hybrid static & server-side rendering, route pre-fetching, and more.
>  2. **Remix**: A full-stack React framework focused on providing a better experience for developers and end-users by leveraging server-side rendering.
>  3. **Blitz.js**: A full-stack framework built on top of Next.js, adding features like a built-in ORM (Prisma) and a monolithic structure.
>  ### Static Site Generators
>  1. **Gatsby**: A React-based framework for building fast static websites with GraphQL at its core.
>  2. **Jekyll**: Can be used with React components via plugins to build static sites, although not React-specific.
>  ### Component Libraries (Frameworks for building UIs)
>  1. **Material-UI (MUI)**: A popular React UI framework implementing Google's Material Design.
>  2. **Ant Design**: A UI design language and React component library used for enterprise-level products.
>  3. **Chakra UI**: A simple, modular, and accessible component library that gives you the building blocks to build React applications.
>  4. **Semantic UI React**: The official React integration for Semantic UI, providing a collection of pre-built components.
>  5. **Blueprint**: A React-based UI toolkit for the web.
>  6. **Mantine**: A React component library with a focus on usability and performance, providing a set of accessible and customizable components.
>  7. **Rebass**: A primitive UI component library for creating consistent, themeable design systems.
>  ### State Management Frameworks
>  1. **Redux**: A predictable state container for JavaScript apps, often used with the React-Redux library.
>  2. **MobX**: A library for state management that makes it simple to connect the reactive data of your application with your UI.
>  3. **Recoil**: An experimental state management library for React from Facebook.
>  4. **Zustand**: A small, fast, and scalable bearbones state management solution.
>  5. **Effector**: A fast and powerful reactive state manager.
>  6. **XState**: A state machine library for managing complex state logic in React applications.
>  These frameworks provide various capabilities, from full-stack development and server-side rendering to static site generation and state management, enhancing your React development experience.


> [!TIP]
> ## Vue.js, Next.js, and Vite.js are all powerful tools in the JavaScript ecosystem, but they serve different purposes and cater to different needs in web development. Here’s a detailed comparison:
>### Vue.js
>- **Type**: JavaScript Framework
>- **Primary Use**: Building user interfaces and single-page applications (SPAs)
>- **Core Philosophy**: Progressive framework, meaning you can use as much or as little as you need. It focuses on the view layer and can be integrated into projects incrementally.
>- **Key Features**:
>  - Reactive data binding
>  - Component-based architecture
>  - Directives for DOM manipulation
>  - Vue Router for client-side routing
>  - Vuex for state management
>- **Ecosystem**: Strong ecosystem with official libraries for routing (Vue Router), state management (Vuex), and building complex SPAs.
>- **Learning Curve**: Generally considered beginner-friendly with a gentle learning curve.
>### Next.js
>- **Type**: React Framework
>- **Primary Use**: Building server-side rendered (SSR) applications, static websites, and hybrid applications using React
>- **Core Philosophy**: Optimizes for both developer experience and performance, with a focus on production readiness.
>- **Key Features**:
>  - Server-side rendering (SSR) and static site generation (SSG)
>  - API routes for serverless functions
>  - Automatic code splitting and optimized performance
>  - Built-in CSS and Sass support
>  - File-based routing system
>- **Ecosystem**: Part of the React ecosystem, integrates seamlessly with React and its libraries. Provides a robust structure for building complex applications.
>- **Learning Curve**: Can be more challenging for beginners due to SSR concepts, but very powerful once mastered.
>### Vite.js
>- **Type**: Build Tool and Development Server
>- **Primary Use**: Modern frontend tooling for fast development and optimized production builds
>- **Core Philosophy**: Aims to provide a fast and lean development experience by using native ES modules in development and bundling for production.
>- **Key Features**:
>  - Lightning-fast hot module replacement (HMR)
>  - Support for JavaScript frameworks like Vue.js, React, and others
>  - Optimized production builds using Rollup
>  - Minimal configuration needed to get started
>  - Plugin system for extending functionality
>- **Ecosystem**: Framework-agnostic but has strong support for Vue.js (Vite is created by the Vue.js team) and other frameworks. Can be integrated with various other tools and libraries.
>- **Learning Curve**: Easy to set up and use, especially for developers familiar with modern JavaScript development practices.
>### Summary
>- **Vue.js**: A framework for building UIs and SPAs with a gentle learning curve and a focus on the view layer. Best for developers looking to create feature-rich, dynamic web applications with a component-based approach.
>- **Next.js**: A React framework designed for SSR, SSG, and building production-ready web applications. Ideal for developers looking to leverage React for both client-side and server-side rendering.
>- **Vite.js**: A modern build tool and development server that offers a fast development experience. Perfect for developers who want a lightweight and efficient toolchain for building modern web applications, regardless of the framework they use.




# Routing
Basic routing


**AppRouter.jsx**
 ```
  import {createBrowserRouter, RouterProvider} from 'react-router-dom';
  import HomeComponent from './Components/Home/HomeComponent';
  import LoginComponent from './Components/Login/LoginComponent';



  const appRouting = createBrowserRouter([
    {
      path: "/login",
      element: <LoginComponent />
    },
    {
      path: "/home",
      element: <HomeComponent />
    }
  ]);


  const AppRouter = () => {
    return (
      <RouterProvider router={appRouting} />
    )
  }
  export default AppRouter
  ```

**App.jsx**
```
import './App.css'
import AppRouter from './AppRouter'

const  App = () => {
  return (
    <AppRouter />
  );
}
export default App
```

**main.jsx**
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

###

###

# React ES6
### What is ES6?
ES6 stands for ECMAScript 6. ECMAScript is a JavaScript standard intended to ensure a common language across different browsers. ES6 is the 6th version of ECMAScript. 

### Why ES6? / Features of ES6 / Upgrades in ES6
- React uses ES6 and all of these new features will make your coding experience in react much much better. You will be able to do things with much more ease and in very less lines!
<details>
<summary> See Features of ES6 / Upgrades in ES6 </summary>

  Features like: 

  1. Arrow Functions:
      ```
      const hello = () => {
        return "Hello World!";
      }

      or
      
      const hello = () => "Hello World!";
      ```

  2. map(): 
    .map() can be used for alot of things, one of it's use case is, we can make any number of cards through loop and just put it in jsx, like this:
      ```
      const data = ['title1', 'title2', 'title3'];
      let cards = data.map((item) => <card>{item}</card>)
      ```
  3. Destructuring: 

      Old Way: 
      ```
      const languages = ['JS', 'Python', 'Java'];
      const js = languages[0]
      const python = languages[1]
      const java = languages[2]
      ```

      New Way:
      ```
      const languages = ['JS', 'Python', 'Java'];
      const [ js, python, java ] = languages
      ```
      
  4. Ternary Operator: With this, you can write if/else conditions in one line. It's syntax is fairly simple like this:
  condition ? <expression if true> : <expression if false>

      Example:
      
      ```
      let loading = false;
      const data = loading ? <div>Loading...</div> : <div>Data</div>
      ```
  5. Spread Operator: 
      ```
      const languages = ['JS', 'Python', 'Java'];
      const morelanguages = ['C', 'C++', 'C#']
      const allLanguages = [...languages, ...morelanguages]
      ```
      Output:
      ["JS","Python","Java","C","C++","C#"]
  and many more like, classes, modules.
</details>


###

###

# Styling in React
  React can use different styling libraries


### # Using styled-components package
  <details>
  <summary> See how to use styled-components </summary>

  #### Installation
  ```
  npm install styled-components
  ```
  ### Documentation:  https://styled-components.com/docs/basics#getting-started
  </details>

### # Using Bootstrap
  <details>
  <summary> See how to use bootstrap </summary>

  #### Install & Set Up Bootstrap 5 in React
  ``` npm install bootstrap ```

  ### Documentation: https://getbootstrap.com/docs or https://getbootstrap.com/docs/5.3/getting-started/introduction/
  
  ### Then import bootstrap.min.css from node_modules in src/App.js

  ```
  import React from 'react';
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  import './App.css';
  function App() {
    return (
      <div className="App">
        <h3>Build Sign Up & Login UI Template in React</h3>
      </div>
    );
  }
  export default App;
  ```

  Sample Example:

  ```
  import React from 'react'
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
  import './App.css'
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
  import Login from './components/login.component'
  import SignUp from './components/signup.component'
  function App() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={'/sign-in'}>
                positronX
              </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-in'}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-up'}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    )
  }
  export default App
  ```
  </details>



### # Using Material UI

  Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.
  
  <details>
  <summary> See how to use MUI (Material UI)</summary>

  #### Installation
  ``` npm install @mui/material @emotion/react @emotion/styled ```

  #### Documentation: https://mui.com/material-ui/ and https://m2.material.io/components

  > [!NOTE]
  > - Pear Dependencies: Please note that [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom) are peer dependencies, meaning you should ensure they are installed before installing Material UI.

  > [!NOTE]
  > - Material UI uses the Roboto font by default. Add it to your project via Fontsource, or with the Google Fonts CDN.
  >   + Installation: ``` npm install @fontsource/roboto ```
  > - Then you can import it in your entry point like this:
  >   ``` 
  >    import '@fontsource/roboto/300.css';
  >    import '@fontsource/roboto/400.css';
  >    import '@fontsource/roboto/500.css';
  >    import '@fontsource/roboto/700.css';
  >   ```

  #### Icons
  To use the [font Icon component](https://mui.com/material-ui/icons/#icon-font-icons) or the prebuilt SVG Material Icons (such as those found in the [icon demos](https://mui.com/material-ui/icons/)), you must first install the [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) font. You can do so with npm, or with the Google Web Fonts CDN.

  ``` npm install @mui/icons-material ```
  </details>




###

###


# Creating Backend setup
  - Add a backend with a database to your existing React app built on Node.js with Vite
  - Steps:
    - Set Up the Backend with Node.js and Express
    - Connect to a Database (e.g., MongoDB)
    - Set Up API Endpoints
    - Integrate the Frontend with the Backend

### 1. Set Up the Backend with Node.js and Express
  - Create a new directory for your backend code and initialize a new Node.js project.
    ```
    mkdir PayNowBackend
    cd PayNowBackend
    npm init -y
    ```
  - Install Express and other necessary packages:
    ```
    npm install express mongoose cors
    ```
  - Install mongo database
    - Documentation: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
    - Ensure MongoDB is installed and running on your machine
      ``` 
      mongod
      ```

### 2. Create a basic server in backend/server.js and connect it with mongodb
  ```
  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');


  const app = express();
  const PORT = 5000;

  // Middle-ware
  app.use(cors());
  app.use(express.json());


  // Connect to mongodb
  mongoose.connect('mongodb://localhost:27017/paynowdb');

  const database = mongoose.connection;
  database.on('error', console.error.bind(console, 'connection error:'));
  database.once('open', () => {
    console.log("Database connection successfull")
  })



  app.get('/', (req, res) => {
    res.send('Hello from the backend');
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  ```

### 3. Define Models
  - make sure you have your Mongoose model defined. For example, here's a Todo model:
    ```
    // models/Todo.js
    const mongoose = require('mongoose');

    const todoSchema = new mongoose.Schema({
      text: {
        type: String,
        required: true,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    });

    module.exports = mongoose.model('Todo', todoSchema);
    ```

### 4. Set Up API Endpoints
  - method definitions for routes in your Node.js and Express backend, you'll create functions that handle specific HTTP requests (GET, POST, PUT, DELETE, etc.). 
    ```
    // routes/todos.js
    const express = require('express');
    const Todo = require('../models/Todo');
    const router = express.Router();

    // GET all todos
    router.get('/', async (req, res) => {
      try {
        const todos = await Todo.find();
        res.json(todos);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // GET a specific todo by ID
    router.get('/:id', async (req, res) => {
      try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });
        res.json(todo);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // CREATE a new todo
    router.post('/', async (req, res) => {
      const todo = new Todo({
        text: req.body.text,
        completed: req.body.completed || false,
      });

      try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // UPDATE a todo by ID
    router.put('/:id', async (req, res) => {
      try {
        const updatedTodo = await Todo.findByIdAndUpdate(
          req.params.id,
          { text: req.body.text, completed: req.body.completed },
          { new: true } // Return the updated document
        );
        if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
        res.json(updatedTodo);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // DELETE a todo by ID
    router.delete('/:id', async (req, res) => {
      try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });
        res.json({ message: 'Todo deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    module.exports = router;
    ```

### 5. Use Routes in Your Server
  - Update your main server file to use the defined routes:
    ```
    // server.js
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const todoRoutes = require('./routes/todos');

    const app = express();
    const PORT = 5000;

    // Middleware
    app.use(cors());
    app.use(express.json());

    // Connect to MongoDB
    mongoose.connect('mongodb://localhost:27017/yourdbname', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });

    // Use todo routes
    app.use('/api/todos', todoRoutes);

    // Define a simple route
    app.get('/', (req, res) => {
      res.send('Hello from the backend');
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
    ```

