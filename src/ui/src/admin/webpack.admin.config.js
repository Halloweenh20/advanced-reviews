const path = require("path");

module.exports = (env, argv) => {
    const webpackCommon = require("../../webpack.config.common")(env, argv);
    webpackCommon.entry = "./src/admin/admin-plugin.tsx";
    webpackCommon.output = {
        filename: "adminPlugin.js",
        //libraryTarget: "amd",
        //libraryExport: "default",
        path: path.resolve(__dirname, "../../../alloy/modules/_protected/advanced-cms.Reviews/Views/admin")
    };
    return webpackCommon;
};
