## About Project
  - Used react with Vite.js



# Creating a app
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
