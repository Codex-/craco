process.env.NODE_ENV = process.env.NODE_ENV || "development";

const { findArgsFromCli } = require("../args");

// Make sure this is called before "paths" is imported.
findArgsFromCli();

const { log } = require("../logger");
const { getCraPaths, start } = require("../cra");
const { loadCracoConfigAsync } = require("../config");
const { overrideWebpackDev } = require("../features/webpack/override");
const { overrideDevServer } = require("../features/dev-server/override");
const { validateCraVersion } = require("../validate-cra-version");

log("Override started with arguments: ", process.argv);
log("For environment: ", process.env.NODE_ENV);

const context = {
    env: process.env.NODE_ENV
};

loadCracoConfigAsync(context).then(cracoConfig => {
    validateCraVersion(cracoConfig);

    context.paths = getCraPaths(cracoConfig);

    overrideWebpackDev(cracoConfig, context);
    overrideDevServer(cracoConfig, context);

    start(cracoConfig);
});
