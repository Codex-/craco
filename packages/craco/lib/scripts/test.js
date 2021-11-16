process.env.NODE_ENV = process.env.NODE_ENV || "test";

const { findArgsFromCli } = require("../args");

// Make sure this is called before "paths" is imported.
findArgsFromCli();

const { log } = require("../logger");
const { getCraPaths, test } = require("../cra");
const { overrideJest } = require("../features/jest/override");
const { loadCracoConfigAsync } = require("../config");
const { validateCraVersion } = require("../validate-cra-version");

log("Override started with arguments: ", process.argv);
log("For environment: ", process.env.NODE_ENV);

const context = {
    env: process.env.NODE_ENV
};

loadCracoConfigAsync(context).then(cracoConfig => {
    validateCraVersion(cracoConfig);

    context.paths = getCraPaths(cracoConfig);

    overrideJest(cracoConfig, context);
    test(cracoConfig);
});
