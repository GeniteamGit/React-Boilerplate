## React | Boilerplate

### Introduction

React is a popular library for building complex user interfaces with React and managing state with Redux. React
provides a powerful frontend for building user interfaces, while Redux provides a centralized data store for managing
the state of your application. Together, they allow you to build complex, interactive applications with ease.

React-Redux projects are commonly used for building web applications with complex user interfaces and data flows. Some
common use cases for React-Redux projects include:

Single-Page Applications: React-Redux is great for building single-page applications with complex user interfaces that
require a lot of user interaction and state management.

E-commerce Websites: React-Redux can be used to build e-commerce websites that require real-time updates to the user
interface and data management.

Social Media Platforms: React-Redux is a great choice for building social media platforms with complex data flows and
user interactions.

Dashboards: React-Redux is ideal for building dashboards that require real-time data updates and complex data
visualizations.

Some of the benefits of using React-Redux for web development include:

Modular code: React's component-based architecture allows for modular code that is easy to manage and maintain.
Centralized state management: Redux provides a centralized data store for managing the state of your application, which
makes it easier to debug and test your code.
Developer productivity: React's declarative syntax and component-based architecture allow for faster and more efficient
development of complex user interfaces.
Community support: React-Redux has a large and active community of developers, which means that there are many resources
available for learning and problem-solving.

### Features

<ol>
<li>User Authentication</li>
<li>Dashboard</li>
<li>CRUD </li>
<li>Search</li>
<li>Real-time Updates</li>
<li>File Uploads</li>
<li>Payment Integration</li>
<li>Analytics</li>
<li>Localization</li>
<li>Testing</li>
</ol>

### Main Technologies/Libraries Used

<ul>
<li>React.js</li>
<li>Bootstrap</li>
<li>cross-env</li>
<li>lodash</li>
<li>moment</li>
<li>reactstrap</li>
<li>react-chartjs-2</li>
<li>react-data-table-component</li>
<li>react-csv</li>
<li>react-datetime</li>
<li>react-image-crop</li>
<li>react-notifications</li>
<li>react-quill</li>
<li>react-switch</li>
<li>shards-react</li>
<li>shortid</li>
<li>styled-components</li>
<li>sweetalert2</li>
</ul>

### 🗄️ Project Structure

Most of the code lives in the `src` folder of each client and server directory and looks like this:

````
.
├── public
├── src/
│   ├── assets/
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   ├── plugins
│   │   └── scss
│   ├── components/
│   │   ├── Footers
│   │   ├── Headers
│   │   ├── Navbars
│   │   └── Sidebar
│   ├── layouts/
│   │   ├── Admin.js
│   │   └── Auth.js
│   ├── routes/
│   │   ├── admin.js
│   │   ├── common.js
│   │   └── index.js
│   ├── util/
│   │   └── Constants
│   ├── views/
│   │   ├── admin
│   │   ├── auth/
│   │   │   └── Login.js
│   │   └── common/
│   │       └── Home.jsx
│   ├── App.js
│   └── index.js
├── .gitignore
├── gulpfile.js
├── jsconfig.json
├── package.json
└── Readme.md
````