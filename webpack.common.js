const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/scripts/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/templates/index.html"),
            filename: "index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/public"),
                    to: path.resolve(__dirname, "dist/"),
                    globOptions: {
                        ignore: ["**/images/heros/**"], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
                    },
                },
            ],
        }),
        new ServiceWorkerWebpackPlugin({
            entry: path.resolve(__dirname, "src/scripts/sw.js"),
        }),
        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({
                    quality: 50,
                    progressive: true,
                }),
            ],
        }),
        new WebpackPwaManifest({
            name: "Foodpedia",
            short_name: "Foodpedia",
            description: "",
            background_color: "#eb5e0b",
            crossorigin: "use-credentials", //can be null, use-credentials or anonymous
            icons: [
                {
                    src: path.resolve("src/public/images/icon/icon.png"),
                    sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
                },
                {
                    src: path.resolve("src/public/images/icon/icon.png"),
                    size: "1024x1024", // you can also use the specifications pattern
                },
                {
                    src: path.resolve("src/public/images/icon/icon.png"),
                    size: "1024x1024",
                    purpose: "maskable",
                },
            ],
        }),
    ],
};
