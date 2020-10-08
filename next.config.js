const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withCSS(
    withFonts(
        withImages({
            config: {
                exportTrailingSlash: true,
            },
        }),
    ),
);
