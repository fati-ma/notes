# Notes App

## Author: Fatima Atieh


# -----------------------------------------------------

### Overview

A terminal based (CLI) application allowing users to easily create and manage a list of categorized notes


### Setup

```
npm i minimist
```


### Modules

`input.js`
`notes.js`


### Running the app

**To try this app in the terminal**


- > node index.js --add 'This is a really cool thing that I wanted to remember for later'


- > node index.js -a 'This is a really cool thing that I wanted to remember for later'

**This will appear in the console**

```
    Action and input you used:  input { action: 'add', payload: 'This is a really cool thing that I wanted to remember for later' }
    Text you have entered:  { id: 11, note: 'This is a really cool thing that I wante
```


### UML Class Diagram 

![class-diagram](img/class.png)