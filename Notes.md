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
    <summary> 
      See how to use MUI (Material UI)
    </summary>

  #### Installation: ``` npm install @mui/material @emotion/react @emotion/styled ```

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

####


# React Event Handling
  ### Events
  - Every HTML attribute in React is written in camelCase syntax. Event is also an attribute. Hence, written in camelCase.
  - As we learnt variables, states, javascript operations are written in curly braces {}, same is true with React event handlers too! Like this: onClick={show}
    ```
    <button onClick={show}>Show</button>
    ``` 
  ### Arguments in events
  - We can't pass arguments just like that, it will give syntax error. First, we need to put the whole function in arrow function, like this:
    ```
    <button onClick={ ()=>show('true') }>Show</button>
    ```
  ### React Event Object
  - Event handler can be provided to the function like this:
    ```
    <button onClick={ (event)=>show('true', event) }>Show</button>
    ```

  ###### Example
  ```
  import React from "react";
  import loginBg from '../../assets/loginBgPaynow.jpg';
  import { useState } from "react";

  function SignUpComponent(){
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div className="d-flex w-100 h-100 align-items-center justify-content-center zoom-animation" style={{backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'}}>
        <div className="d-flex flex-column align-items-center justify-content-center rounded-2" >
          <div className="card rounded-3 border-0 m-2 align-items-center w-100">
            <div className="row">
              <h2>SignUp</h2>
            </div>
            <div className="mt-2 mb-2">
              <input type="text" name="useremail" value={useremail} onChange={ (e)=> { setUseremail(e.target.value)}} className="form-control " placeholder="Email"></input>
              <input type="password" name="password" value={password} onChange={ (e)=> { setPassword(e.target.value)}} className="form-control mt-1" placeholder="Password"></input>            
            </div>
            <div className="mt-2 mb-2">
              <button className="btn" onClick={()=>submitSignUpDetails({useremail}, {password})} style={{color: "rgb(255 233 230)", backgroundColor: "#003F80"}}>
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default SignUpComponent;

  function submitSignUpDetails(useremail, password){
    console.log("useremail",useremail)
    console.log("password",password)
  }
  ```

#####

# Integrate the Frontend with the Backend
  - In your React app (built with Vite), you can use fetch or a library like axios to interact with your backend API.
  ##### Ensure you have axios installed in your React project:
  ``` npm install axios ```

  ##### Create a service to interact with the backend API in src/services/todoService.js:
  ```
  import axios from 'axios';

  const API_URL = 'http://localhost:5000/api/todos';

  export const getTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
  };

  export const createTodo = async (todo) => {
    const response = await axios.post(API_URL, todo);
    return response.data;
  };
  ```

  ###### Example (src/Services/AuthService.jsx)
  ```
  import axios from 'axios';
  import { API_BASE_URL } from '../Config';

  const BASE_URL = API_BASE_URL;


  export const loginApi = async (data)=>{
    const loginURL = BASE_URL + "/login";
    const response = await axios.post(loginURL, data);
    response.data;
  }

  export const signupApi = async (data)=>{
    const singupUrl = BASE_URL + "/signup";
    const response = await axios.post(singupUrl, data);
    return response;
  }
  ```

  ##### And using AuthService.js in Signup component
  ```
  import React from "react";
  import { useNavigate } from 'react-router-dom'
  import loginBg from '../../assets/loginBgPaynow.jpg';
  import { useState } from "react";
  import {signupApi} from '../../Services/AuthService';

  function SignUpComponent(){
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitSignUpDetails = async () => {
      const res = await signupApi({username: username, useremail: useremail, password: password})
      if(res.status = 201){
        navigate("/home")
      }
    }

    return (
      <div className="d-flex w-100 h-100 align-items-center justify-content-center zoom-animation" style={{backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'}}>
        <div className="d-flex flex-column align-items-center justify-content-center rounded-2" >
          <div className="card rounded-3 border-0 m-2 align-items-center w-100">
            <div className="row">
              <h2>SignUp</h2>
            </div>
            <div className="mt-2 mb-2">
              <input type="text" name="username" value={username} onChange={ (e)=> { setUsername(e.target.value)}} className="form-control mb-1" placeholder="Username"></input>
              <input type="text" name="useremail" value={useremail} onChange={ (e)=> { setUseremail(e.target.value)}} className="form-control " placeholder="Email"></input>
              <input type="password" name="password" value={password} onChange={ (e)=> { setPassword(e.target.value)}} className="form-control mt-1" placeholder="Password"></input>            
            </div>
            <div className="mt-2 mb-2">
              <button className="btn" onClick={submitSignUpDetails} style={{color: "rgb(255 233 230)", backgroundColor: "#003F80"}}>
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default SignUpComponent;
  ```

###

###

# React routing
### Using React Router with useNavigate from react-router-dom

  ```
  import React from "react";
  import { useNavigate } from 'react-router-dom'

  function SignUpComponent(){
    const navigate = useNavigate();

    const navigateToHome = async () => {
      navigate("/home")
    }

    return(
      <button className="btn" onClick={navigateToHome}></button>
    )
  }
  export default SignUpComponent;
  ```



# React Hooks
  - Hooks let you use state and other React features without writing a class. Although states have largely replaced classes in React, there is no plan of removing classes from React.
  - ### Things you need to keep in mind while using hooks:
    - You must import hook from react.
    - Hooks can only be called in React Function Components, that is
      ```
      // import statements
      // Can't call here
      const Blogs = () => {
          // Can call here
          return <h1>Blogs</h1>;
      };

      export default Blogs;
      ```
    - Hook cannot be in conditional
    - Hooks cannot work in React Class Components
    - Hooks can only be called at the top level of a component, meaning it can't be called from inside a block, i.e. {}. So, can't be called inside if, loops or any block, Example
      ```
      const Blogs = () => {
          // Can call here
          if (true){
              // Can't call here
          }
          return <h1>Blogs</h1>;
      };

      export default Blogs;
      ```
  - ### React Hook Types
  1. **React useState**
  2. **React useEffect**
  3. **React useContext**
  4. **React useRef**
  5. **React useReducer**
  6. **React useCallback**
  7. **React useMemo**

  ### React useState
  - useState is a hook, which used to add a state to react component
  - That means, with this we can assign/update a variable/state in the component

  <details>
  <summary>
    See how _useState_ works
  </summary>

  ###### Initializing useState
  ```
  import { useState } from "react";

  const App = () => {
    const [name, setName] = useState("");
  }
  ```
  - useState takes initial state as argument and gives a state and a function(setName in this case) to update that state as we can't directly change/update a state. Also, these state names are just like variables, hence you can name them anything you like.
  - Question: In react why we can't directly change/update a state?
    - In React, you can't directly change or update a state because React needs to be aware of the state changes to properly manage and render the user interface. Directly modifying the state can lead to unexpected behavior and issues with rendering, as React won't know that the state has changed.

  ###### Reading a state
  ```
  import { useState } from "react";

  const App = () => {
    const [name, setName] = useState('')
    return <h1>My name is {name}</h1>
  };
  ```
  - useState returns a state and a function to change/update that state. Hence, everything is stored in name

  ###### Updating a state
  ```
  import { useState } from "react";

  const App = () => {
      const [name, setName] = useState('')
      setName('Rajesh')

      return <h1>My name is {name}</h1>
  };
  ```

  ###### Question: What can state hold?
  - Like normal variables, state can hold any datatype like **_strings_** , **_numbers_** , **_booleans_** , **_arrays_** , **_objects_** , objects in arrays, arrays in objects.
  - Example: 
    ```
    import { useState } from "react";

    const App = () => {
      const [data, setData] = useState({
        name: 'lovish',
        age: 21
      })

      return <>
        <h1>My name is {data.name} and my age is {data.age}</h1>
        <button onClick={() => setData({ ...data, name: 'CWH' })}>Click Me</button></>
    };

    export default App;
    ```

  </details>


  ### React useEffect
  - useEffect allow you perform side effects in your component
  - useEffect is a function which accepts two arguments. The second one is optional.
  <details>
  <summary>
    See how **_useEffects_** works
  </summary>
  
  > [!NOTE] 
  > Note: useEffect will work and act like ngOnInit, afterViewInit, ngOnChanges on Angular. That means it execute/render its contents in all these 3 use cases with usage of one useEffect

  ###### Runs on every render:
  
  - Observe Below Example: 
    ```
    import { useState, useEffect } from "react"

    function HomeComponent(){
      const [count, setCount] = useState("");
      console.log("before line useEffect Rendered", count)

      useEffect(() => {
        console.log("useEffect Rendered", count)
        setTimeout(()=>{
          setCount((count)=> count+1);
        }, 1000)
      });

      console.log("After line useEffect Rendered", count)
      return(
        <>
        <h1>I have rendered {count} times!</h1>;
        </>
      )
    }
    export default HomeComponent
    ```
  - It Gives Output as:
    ```
    before line useEffect Rendered 
    After line useEffect Rendered 
    before line useEffect Rendered 
    After line useEffect Rendered 
    useEffect Rendered 
    useEffect Rendered 
    ```

  ###### Runs on first render:

  - Observe below example:
    ```
    import { useState, useEffect } from "react"

    function HomeComponent(){
      const [count, setCount] = useState(0);

      useEffect(() => {
        setTimeout(()=>{
          setCount((count)=> count+1);
        }, 1000)
      });

      return(
        <>
        <h1>I have rendered {count} times!</h1>;
        </>
      )
    }
    export default HomeComponent;
    ```

    ###### Runs when data changes

  - Observe below example:
    ```
    import { useState, useEffect} from 'react';

    function HomeComponent(){
      const [count, setCount] = useState(0);
      const [data, setData] = useState('');

      useEffect(() => {
        setCount((count) => count+1)
      }, [data]);

      const handleDataChange = (e)=>{
        setData(e.target.data)
      }

      return(
        <input onChanges={handleDataChange} value={data} />
      );
    }
    ```
  </details>


  ## #TODO react hooks remaining



  # Authentication and Authorization

  ### Authentication
  - For authenticating we can use password based flow, with encryption
  - For encryption, we can use **bcrypt**
    ##### Installation
      ```npm install bcrypt```
    ##### Usage
    ```
    // authController.js
    const User = require('../Models/User')
    const bcrypt = require('bcrypt');

    async function signupHandler(req, res){
      const {username, useremail, password} = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        username: username,
        useremail: useremail,
        password: hashedPassword
      });

      try {
        const success = await user.save()
        res.status(201).json({status: 'User successfully created', success: success})
      }catch(err){
        res.status(401).json({status: "Un-authorised", err: err})
      }
    }

    async function loginHanlder(req, res){
      const {useremail, password} = req.body;
      try {
        const user = await User.find({useremail: useremail});
        if (user){
          const pass_match = await bcrypt.compare(password, user.password)
          if(pass_match){
            res.status(200).json({status: "success", message: "Login successfull"})
          }else{
            res.status(401).json({status: "Un-authorised", message: "Login failed"})
          }
        }
      }catch (err){
        res.status(401).json({status: "Un-authorised", message: "Login failed"})
      }
    }
    ```

    ### Within model also we can use methods for encryption
    ```
    // ./Models/User.js
    const mongoose = require('mongoose');
    const bcrypt = require('bcryptjs');

    const UserSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    });

    // Password hashing middleware
    UserSchema.pre('save', async function (next) {
      if (!this.isModified('password')) return next();
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    });

    // Method to compare password
    UserSchema.methods.comparePassword = function (password) {
      return bcrypt.compare(password, this.password);
    };

    module.exports = mongoose.model('User', UserSchema);
    ```

  ### API request Authentication
  - For providing better security on Authentication over **api requests**, we can use few approches.
    - ##### JWT(JSON Web Token) Usage:
      - **Installation**: ``` npm install jsonwebtoken ```
      - Usage(backend):
        ```
        // ./controllers/authController.js
        const User = require('../Models/User')
        const bcrypt = require('bcrypt');
        const jwt = require("jsonwebtoken");
        const authConfig = require('../Config/AuthConfig');


        async function signupHandler(req, res){
          const {username, useremail, password} = req.body;
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = new User({
            username: username,
            useremail: useremail,
            password: hashedPassword
          });

          try {
            const success = await user.save()
            const token  = jwt.sign({userId: user.id}, authConfig.JWT_SECRET, {expiresIn: authConfig.JWT_SECRET_EXPIRATION}); //JWT USAGE
            res.status(201).json({token: token, status: 'User successfully created', success: success})
          }catch(err){
            res.status(401).json({status: "Un-authorised", err: err})
          }
        }

        // Here JWT_SECRET = 'string'
        // Here JWT_SECRET_EXPIRATION is expiration time, can be '1h', '4h'
        ```
        
      - Create Middleware to Authenticate Token
        ```
        // middleware/authenticateToken.js
        const jwt = require('jsonwebtoken');

        const JWT_SECRET = 'your_jwt_secret'; // Use environment variable in production

        const authenticateToken = (req, res, next) => {
          const token = req.header('Authorization')?.split(' ')[1];

          if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
          }

          try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            next();
          } catch (err) {
            res.status(401).json({ message: 'Token is not valid' });
          }
        };

        module.exports = { authenticateToken };
        ```
        ```
        // server.js
        const express = require('express');
        const mongoose = require('mongoose');
        const authRoutes = require('./routes/auth');
        const { authenticateToken } = require('./middleware/authenticateToken');

        const app = express();
        const PORT = process.env.PORT || 5000;

        // Middleware
        app.use(express.json());

        // Routes
        app.use('/api/auth', authRoutes);

        // Protected route example
        app.get('/api/protected', authenticateToken, (req, res) => {
          res.json({ message: 'This is a protected route', user: req.user });
        });
        ```

      - Usage(Frontend): pass the token as authorization header
        ```
        Authorization: Bearer <your_jwt_token>
        ```
    - ##### Session-based authentication Usage:
      - Implementing a session-based authentication system in Node.js typically involves using Express.js and a session middleware such as express-session. This approach stores session data on the server-side, which can provide advantages in terms of security and control over session management.
      - **Installation**:  ```npm install express-session```
      - Usage: 
        ```
        // ./server.js
        const express = require('express');
        const mongoose = require('mongoose');
        const cors = require('cors'); // USAGE
        const session = require('express-session'); // USAGE

        const app = express();
        const PORT = 5000;

        // Middle-ware
        app.use(cors({                            // USAGE
          origin: authConfig.FRONTEND_BASE_URL,   // USAGE
          credentials: true                       // USAGE
        }));                                      // USAGE

        app.use(express.json());
        app.use(session({                         // USAGE
          secret: authConfig.SESSION_SECRET,      // USAGE
          resave: false,                          // USAGE
          saveUninitialized: true,                // USAGE
          cookie: { secure: false }, // Set to true if using HTTPS
        }))                                       // USAGE

        function isAuthenticated(req, res, next) {    // USAGE
          if (req.session.user) {                     // USAGE
            next();                                   // USAGE
          } else {                                    // USAGE
            res.status(401).send('Invalid session');  // USAGE
          }
        }

        // Connect to mongodb
        mongoose.connect(authConfig.MONGODB_URL);

        const database = mongoose.connection;
        database.on('error', console.error.bind(console, 'connection error:'));
        database.once('open', () => {
          console.log("Database connection: successfull")
        })

        // Routes
        const appRouter = require('./routes/authRoutes');
        app.use('/api', appRouter)


        app.get('/api/authenticate', isAuthenticated, (req, res) => {     // USAGE
          res.send('Hello from the paynow backend');
        });


        // Start the server
        app.listen(PORT, () => {
          console.log('Initializing Server..')
          console.log(`Server is running on http://localhost:${PORT}`);
        });


        // Here FRONTEND_BASE_URL = 'http://localhost:5173'
        // SESSION_SECRET = 'kitty cat'
        // MONGODB_URL = 'mongodb://localhost:27017/paynowdb'
        ```

        ```
        // ./controllers/authController.js
        const User = require('../Models/User')
        const bcrypt = require('bcrypt');
        const jwt = require("jsonwebtoken");
        const authConfig = require('../Config/AuthConfig');


        async function signupHandler(req, res){
          const {username, useremail, password} = req.body;
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = new User({
            username: username,
            useremail: useremail,
            password: hashedPassword
          });

          try {
            const success = await user.save()
            const token  = jwt.sign({userId: user.id}, authConfig.JWT_SECRET, {expiresIn: authConfig.JWT_SECRET_EXPIRATION});
            req.session.user = { useremail: user.useremail}       // USAGE
            res.status(201).json({status: 'User successfully created', success: success})
          }catch(err){
            res.status(401).json({status: "Un-authorised", err: err})
          }
        }


        async function loginHanlder(req, res){
          const {useremail, password} = req.body;
          try {
            const user = await User.find({useremail: useremail});
            if (user){
              const pass_match = await bcrypt.compare(password, user.password)
              if(pass_match){
                req.session.user = { useremail: user.useremail}    // USAGE
                res.status(200).json({status: "success", message: "Login successfull"})
              }else{
                res.status(401).json({status: "Un-authorised", message: "Login failed"})
              }
            }
          }catch (err){
            res.status(401).json({status: "Un-authorised", message: "Login failed"})
          }
        }

        async function logoutHandler(req, res){
          req.session.destroy(err => {                            // USAGE
            if(err){
              return res.status(500).json({message: "Unable to logout, something went wrong"})
            }
            res.status(200).json({message: "user logged out"})
          });
        }


        module.exports = { signupHandler, loginHanlder, logoutHandler};
        ```
      - On React side
        ```
        // PayNow/src/Helpers/AxiosApiHelper.jsx
        import axios from "axios";
        import { API_BASE_URL } from "../Config";

        const axiosInstance = axios.create({
          baseURL: API_BASE_URL,
          withCredentials: true, // This allows axios to send cookies with requests
        });

        export default axiosInstance;
        ```
        ```
        // PayNow/src/Services/AuthService.jsx
        import { useState } from 'react';
        import axios from 'axios';
        import { API_BASE_URL } from '../Config';
        import axiosInstance from '../Helpers/AxiosApiHelper'

        const BASE_URL = API_BASE_URL;

        export const loginApi = async (data)=>{
          const loginURL = BASE_URL + "/login";
          const response = await axiosInstance.post(loginURL, data);
          response.data;
        }

        export const signupApi = async (data)=>{
          const singupUrl = BASE_URL + "/signup";
          const response = await axiosInstance.post(singupUrl, data);
          return response;
        }

        export const logoutApi = async ()=>{
          const logoutUrl = BASE_URL + '/logout'
          const resp = await axiosInstance.get(logoutUrl)
          return resp;
        }
        ```
        ```
        // PayNow/src/Components/Logout/LogoutComponent.jsx
        import {React , useEffect } from 'react';
        import {logoutApi} from '../../Services/AuthService'

        function LogoutComponent(){
          useEffect(()=>{
            const logout = logoutApi();
          })
        }

        export default LogoutComponent;
        ```





















####

# General Questions
<details>
  <summary>
    See the list of general questions
  </summary>

  1. Should we use only `const`, for varialble declaration/creation. Or any other ways?
      - In JavaScript (and by extension, in Node.js and React), you have three main ways to declare variables: var, let, and const. Each has its own use cases and characteristics.
      - const:
        - Use for constants: When you have a variable that should not be reassigned after its initial value is set, use const. This helps prevent bugs and makes your code easier to understand.
        - Immutability: Note that const does not make the value immutable if the value is an object or array. It only ensures that the binding to the value cannot be changed.
          ```
          const PI = 3.14159;
          // PI = 3.14; // This will throw an error

          const person = { name: 'John' };
          person.name = 'Jane'; // This is allowed
          // person = { name: 'Doe' }; // This will throw an error
          ```
      - let:
        - Block Scope: Use let when you need a variable that is limited to the block, statement, or expression where it is used. This is particularly useful in loops or conditional statements.
        - Reassignment: Unlike const, variables declared with let can be reassigned.
          ```
          let counter = 0;
          if (true) {
            let counter = 1; // This `counter` is different from the outer `counter`
            console.log(counter); // 1
          }
          console.log(counter); // 0
          ```
      - var:
        - Function Scope: var is function-scoped, which can lead to confusion and bugs if not used carefully. It’s generally recommended to avoid var in favor of let and const.
        - Hoisting: Variables declared with var are hoisted to the top of their scope, which can lead to unexpected behavior.
          ```
          function test() {
            console.log(x); // undefined
            var x = 5;
            console.log(x); // 5
          }
          test();
          ```
</details>