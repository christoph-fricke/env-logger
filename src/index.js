let minLevel = undefined;

/**
 * Sets the required level. Every output that should be shown in the console must have
 * a level >= required level. It is recommended to use an environment variable for the requiredLevel.
 * @param {number} requiredLevel Required level
 * @throws if requiredLevel is not a number.
 */
exports.init = requiredLevel => {
    if (typeof requiredLevel !== 'number') throw new Error('minLevel must be a number to be compareable');
    minLevel = requiredLevel;
};

/**
 * Pass the args to console.info if the level is greater or equal the required level.
 * @param {number} level level this output will use
 * @param {any} args Arguments to pass to the console.info function
 * @throws if no required level is defined or level is not a number.
 */
exports.info = (level, ...args) => {
    if (typeof minLevel === 'undefined') throw new Error('No required log level was defined! Call init() first.');
    if (typeof level !== 'number') throw new Error('level must be passed as a number!');

    if (level >= minLevel) console.info(...args);
};

/**
 * Pass the args to console.log if the level is greater or equal the required level.
 * @param {number} level level this output will use
 * @param {any} args Arguments to pass to the console.log function
 * @throws if no required level is defined or level is not a number.
 */
exports.log = (level, ...args) => {
    if (typeof minLevel === 'undefined') throw new Error('No required log level was defined! Call init() first.');
    if (typeof level !== 'number') throw new Error('level must be passed as a number!');

    if (level >= minLevel) console.log(...args);
};

/**
 * Pass the args to console.warn if the level is greater or equal the required level.
 * @param {number} level level this output will use
 * @param {any} args Arguments to pass to the console.warn function
 * @throws if no required level is defined or level is not a number.
 */
exports.warn = (level, ...args) => {
    if (typeof minLevel === 'undefined') throw new Error('No required log level was defined! Call init() first.');
    if (typeof level !== 'number') throw new Error('level must be passed as a number!');

    if (level >= minLevel) console.warn(...args);
};

/**
 * Pass the args to console.error if the level is greater or equal the required level.
 * @param {number} level level this output will use
 * @param {any} args Arguments to pass to the console.error function
 * @throws if no required level is defined or level is not a number.
 */
exports.error = (level, ...args) => {
    if (typeof minLevel === 'undefined') throw new Error('No required log level was defined! Call init() first.');
    if (typeof level !== 'number') throw new Error('level must be passed as a number!');

    if (level >= minLevel) console.error(...args);
};
