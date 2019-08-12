/* 
 * Create and export config variables
 *
*/

// Container for the environments
const environments = {};

// Create the staging object
environments.staging = {
  port    : 8080,
  envName : 'staging',
};

// Production Object
environments.production = {
  port    : 5000,
  envName : 'production',
};

// Determine which is to be exported
let currentEnvironment = typeof process.env.NODE_ENV == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check if that environment is defined in config if not default to staging
let environmentToExport =
  typeof environments[currentEnvironment] == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;
