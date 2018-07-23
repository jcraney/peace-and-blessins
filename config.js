//environments 
var environments = {};

// Staging (default) environment
environments.staging = {
    'httpPort' : 8000,
    'httpsPort': 8001,
    'envName' : 'staging'
  };
  
  // Production environment
  environments.production = {
    'httpPort' : 6000,
    'httpsPort': 6001,
    'envName' : 'production'
  };
  
  var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
  
  var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;
  
  module.exports = environmentToExport;
  