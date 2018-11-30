// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REACT_APP = /^REACT_APP_/i;

// Configures the api url to hit dependent on the type of environment setup.
function getApiUrl() {
//   if (process.env.NODE_ENV === 'production') {
// //     return "'http://robjmitch.com/api'";
// //   } else {
    return "'http://localhost:3000/api'"; // this will send the route to api which will be api.js which will handle defines the rest of the routes
//   }
}

function getClientEnvironment(publicUrl) {
    var processEnv = Object
    .keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      'NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      'PUBLIC_URL': JSON.stringify(publicUrl),
      // Configurable API url variable for setting up back end requests.
      'API_URL': getApiUrl()
    });
  return {'process.env': processEnv};
}

module.exports = getClientEnvironment;