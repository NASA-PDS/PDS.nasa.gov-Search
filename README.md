# PDS Search
Front-end interface for PDS.nasa.gov data search capability 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Using The Search Widget

## 1) Add The Search Widget File
Copy the search_widget/searchWidget.js file and put it somewhere in your project. Add this script as you would in any html file for example: `<script src="js/searchWidget.js" type="text/javascript"></script>`

Add `<div id="searchWidget"></div>` into the location where you desire to show the search widget. 

## 2) Point To Your Search Service

In searchWidget.js find the line:
`let searchUrl = "";`

Place the URL to your search service between the quotes. For example: `let searchUrl = "https://pds.nasa.gov/search";`

## 3) Changing The Label

Find the line:
`let searchButtonLabel = "Search";`
Change `"Search"` to any HTML that you would like the button to contain.

## 4) Changing The Styling

CSS can be changed by adding two selectors to your CSS file.
```css
#searchWidget button{
}
#searchWidget input{
}
```

## Special Instructions For Placement Inside Javascript PDS Header

PDS can use a pure javascript header at the moment of this writing. Adding the widget to this header is different from simply adding a div with an ID.

### Modify pds-web-header.js

Find these specific lines of code in pds-web-header/pds-web-header.js
```javascript
help_container.appendChild(help_text);
help_container.appendChild(help_icon);
```

Directly under these two lines add this code
```javascript
let searchContainer = document.createElement("div");
searchContainer.setAttribute("id", "searchWidget");
header_right.appendChild(searchContainer);
```