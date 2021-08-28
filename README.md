# avcustomize

This is my Next.js project based on React deployed on Vercel.

It comes from my general Next.js/React.

## Stack

- React
- Typescript

### State Management

- Redux
- jotai
- use-local-storage-state

### Data fetching

1. react-query: The missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing, and updating server state in your React applications a breeze. Before react-query synchronizing with server state & caching was a neck-breaking job. Especially when you get only UI state managers. It removes the pain of managing memory, memoization, caching & outdated data invalidating manually. It's available for react-native too. It's one of the reasons why many developers choose React over other frontend frameworks

2. apollo-client: A comprehensive state management library that enables one to manage both local and remote data with GraphQL. Can be used to fetch, cache, and modify application data, all while automatically updating your UI. It's like react-query but for GraphQL. Shares the same hook names too. But it's cross-framework compatible thanks to its community. It's the best Data-fetching library specifically for GraphQL

GraphQL
The graph query language provides a way to fetch only required data saving both user's & server's bandwidth. A technology by Facebook that sits on top of HTTP to work. It only uses the HTTP POST verb to transfer data. It's modern & makes HTTP connections more eco-friendly

Popular graphql libraries for React are:

Apollo Client by Apollo Server

### Styling

1. css modules: Simply, CSS files in which all class names and animation names are scoped locally by default. It keeps the class names of that CSS file completely unique using UUID at the end of each class at build time. It's the best way to keep your component's styles individual from other's

2. sass: Highly modular/configurable, utility first CSS framework. Has its own jit(Just in time) compiler to cut off unused CSS & push CSS styles on the fly in development. In production, can cut off 100% of unused CSS using purgecss. Almost anything that can be done through CSS can be done using tailwindcss classes

3. tailwindcss: Highly modular/configurable, utility first CSS framework. Has its own jit(Just in time) compiler to cut off unused CSS & push CSS styles on the fly in development. In production, can cut off 100% of unused CSS using purgecss. Almost anything that can be done through CSS can be done using tailwindcss classes

UI components
UI components are simply pre-built components that can be configured/tweaked for other design foundations. UI components save a lot of developer time & make the development easier. Also, its managed by so many people that they're often more secure & performant comparing to components built manually

### Form handlers

4. DaisyUI is a Tailwind CSS plugin based on Tailwind's utility classes and all components have low specificity so you can customize everything using utility classes.
   You can even use @apply to add your custom styles to components or you can change colors and other design decisions using CSS variables.

### Tables

---
