const {
    getLoader,
    getLoaders,
    removeLoaders,
    addBeforeLoader,
    addBeforeLoaders,
    addAfterLoader,
    addAfterLoaders,
    loaderByName
} = require("./loaders");
const { getPlugin, pluginByName, addPlugins, removePlugins } = require("./webpack-plugins");
const { when, whenDev, whenProd, whenTest } = require("./user-config-utils");
const { throwUnexpectedConfigError, gitHubIssueUrl } = require("./plugin-utils");
const { ESLINT_MODES } = require("./features/webpack/eslint");
const { POSTCSS_MODES } = require("./features/webpack/style/postcss");
const { createJestConfig } = require("./features/jest/api");
const { createWebpackDevConfig, createWebpackProdConfig } = require("./features/webpack/api");
const { createDevServerConfigProviderProxy } = require("./features/dev-server/api");

module.exports = {
    getLoader,
    getLoaders,
    removeLoaders,
    addBeforeLoader,
    addBeforeLoaders,
    addAfterLoader,
    addAfterLoaders,
    loaderByName,
    getPlugin,
    pluginByName,
    addPlugins,
    removePlugins,
    when,
    whenDev,
    whenProd,
    whenTest,
    throwUnexpectedConfigError,
    gitHubIssueUrl,
    ESLINT_MODES,
    POSTCSS_MODES,
    createJestConfig,
    createWebpackDevConfig,
    createWebpackProdConfig,
    createDevServerConfigProviderProxy
};
