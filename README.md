# env-logger

You need to have different log outputs depending on different environments? Than this is the logger for you!
There is no need to look further. This logger is minimal and lightweight!

## Features:

*   Log your content to the console if the level is greater or equal the required level
*   Support for `info`, `log`, `warn`, `error`
*   Methods perform just like there equivalent kown from the `console` object

## Usage:
```js
// Import the logger object
import logger from 'env-logger';

// You need to init the logger before it can log anything to the
// console. This sets the required level that needs to be passed
// in order to log the arguments.
// You might want to use a env variable instead of a literal. This
// way you can change the log output depending on the environment your
// app is deployed to. For example:
// Development: 1
// Internal testing: 2
// Production: 3
logger.init(3);

// Somewhere else in your code

// This would write nothing to the console because 2 < 3
logger.log(2, 'Hello World');

// You can pass multiple arguments just like you are used to from
// console.warn(). This would output to the console because 3 >= 3.
logger.warn(3, 'Hi', 'how', 'are', 'you?');
```

## Contribution & License

This project uses the MIT license. Feel free to contribute and
expand this project.

