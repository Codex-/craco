process.env.NODE_ENV = "production";

const { findArgsFromCli } = require("../args");

// Make sure this is called before "paths" is imported.
findArgsFromCli();

const { log } = require("../logger");
const { getCraPaths, build } = require("../cra");
const { loadCracoConfigAsync } = require("../config");
const { overrideWebpackProd } = require("../features/webpack/override");
const { validateCraVersion } = require("../validate-cra-version");

log("Override started with arguments: ", process.argv);
log("For environment: ", process.env.NODE_ENV);

const context = {
    env: process.env.NODE_ENV
};

loadCracoConfigAsync(context).then(cracoConfig => {
    validateCraVersion(cracoConfig);

    context.paths = getCraPaths(cracoConfig);

    overrideWebpackProd(cracoConfig, context);
    build(cracoConfig);
});