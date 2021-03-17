# Testwe-app

This project was created as an answer to a tech test.
It uses styled-components, Axios & https://anapioficeandfire.com/

# Folder's tree

├──public\
├──src\
│ ├── components # Here we can find all components global to the app (inputs, layouts ...)\
│ │ ├── Header\
│ │ │ ├── index.jsx # Every components folder got this index.jsx where the component is defined\
│ │ │ └── Header.style.js # Each component which required some styling will have this style.js file where styled-components will be use\
│ │ ├── ...\
│ │ └── index.js # In this file we export all our components. this allow cleaner imports in project files\
│ ├── pages # Folder containing one folder/pages of our app\
│ │ ├── Home\
│ │ │ ├── index.jsx # The page definition and logic\
│ │ │ └── Home.style.js # Style specific to our page\
│ │ ├── ...\
│ │ └── index.js # In this file we export all our pages. this allow cleaner imports in project files\
│ ├── services # Folder containing our API calls\
│ │ ├── books.js # File containing definion for all books API calls\
│ │ └── ...\
│ │ └── index.js # In this file we export all our services. this allow cleaner imports in project files\
│ ├── styles # Folder containing global app styles and variables\
│ ├── utils # Folder containing some usefull librairies and or function which can be called anywhere in project\
│ ├── App.jsx\
│ ├── index.jsx\
│ └── ...\
├── .gitignore\
├── package-lock.json\
├── package.json\
└── README.MD\

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!
