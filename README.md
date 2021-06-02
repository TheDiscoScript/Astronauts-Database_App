<h1 align="center">Welcome to Astronaut Database 👋</h1>

## Description

I created this app with intention to get comfortable with using react-hook-form and mainly with Redux. As I will try to create more complex apps I will need a better state management so I decided to learn Redux. I used Redux-Toolkit as It was recommended as best practice in Redux documentation. It simplifies the syntax and makes Redux much more palatable..at least for me.<br/>
This app has 3 main features and 2 supplementary features. Main 3 features are creating/editing/removing items(astronauts) from database(redux store). Other 2 features are clear all (empties the database) and add dummies in the database.<br/>
The structure - src file has 2 files - "app" with store.js, which has redux-toolkit store logic in it and "features" which basically has whole app in there. "database" has redux-toolkit related logic, "components" has building blocks of the app (like "home", "editor", etc..)<br/>

Known bugs:<br/>
Editor - checkbox - I couldn't make it "checked" by default, when there was "text" in input. I have no idea why it is not working.<br/>
Homepage - grid - if you make your screen smaller and then bigger, the grid won't load properly. Something to do with Material-UI.<br/>

## Development

- React, React-router, React-hook-form, Redux Toolkit, CSS, JS

## How to install

### Install

```sh
cd Astronauts-Database_app
```

```sh
npm install
```

### Usage

```sh
npm start
```

👤 **Daniel Wollmann**

- Website: https://willdooo.github.io/Personal-Website/
- Github: [@Willdooo](https://github.com/Willdooo)
- LinkedIn: [@linkedinlink](https://linkedin.com//in/daniel-wollmann)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
