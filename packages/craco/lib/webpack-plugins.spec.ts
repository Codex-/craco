const { addPlugins } = require("./webpack-plugins");

describe("webpack-plugins", () => {
    describe("addPlugins", () => {
        it("should preserve legacy behaviour", () => {
            // Legacy behaviour prepends any plugins into the config.
            const webpackCfg = {
                plugins: ["test 1"]
            };

            addPlugins(webpackCfg, ["test 2"]);

            expect(webpackCfg.plugins).toHaveLength(2);
            expect(webpackCfg.plugins[0]).toStrictEqual("test 2");
            expect(webpackCfg.plugins[1]).toStrictEqual("test 1");
        });

        it("defaults to legacy behaviour if invalid operation provided", () => {
            const webpackCfg = {
                plugins: ["test 1"]
            };

            addPlugins(webpackCfg, [["test 2", "cake"]]);

            expect(webpackCfg.plugins).toHaveLength(2);
            expect(webpackCfg.plugins[0]).toStrictEqual("test 2");
            expect(webpackCfg.plugins[1]).toStrictEqual("test 1");
        });

        it("prepends to the plugin list", () => {
            const webpackCfg = {
                plugins: ["test 1"]
            };

            addPlugins(webpackCfg, [["test 2", "prepend"]]);

            expect(webpackCfg.plugins).toHaveLength(2);
            expect(webpackCfg.plugins[0]).toStrictEqual("test 2");
            expect(webpackCfg.plugins[1]).toStrictEqual("test 1");
        });

        it("appends to the plugin list", () => {
            const webpackCfg = {
                plugins: ["test 1"]
            };

            addPlugins(webpackCfg, [["test 2", "append"]]);

            expect(webpackCfg.plugins).toHaveLength(2);
            expect(webpackCfg.plugins[0]).toStrictEqual("test 1");
            expect(webpackCfg.plugins[1]).toStrictEqual("test 2");
        });

        it("prepends and appends to the plugin list", () => {
            const webpackCfg = {
                plugins: ["test 1"]
            };

            addPlugins(webpackCfg, [["test 2", "append"], ["test 3", "prepend"]]);

            expect(webpackCfg.plugins).toHaveLength(3);
            expect(webpackCfg.plugins[0]).toStrictEqual("test 3");
            expect(webpackCfg.plugins[1]).toStrictEqual("test 1");
            expect(webpackCfg.plugins[2]).toStrictEqual("test 2");
        });
    });
});