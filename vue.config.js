module.exports = {
    pluginOptions: {
        electronBuilder: {
            // Entry file for Main process
            mainProcessFile: 'src/main.ts',
            // Entry file for Renderer process
            rendererProcessFile: 'src/renderer.ts',
        },
    },
};
