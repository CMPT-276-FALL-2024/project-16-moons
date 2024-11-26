module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    moduleFileExtensions: ['js','jsx','json','node'],
    transform: {
        '^.+//.(js|jsx|tx|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        "/node_modules/(?!your-es6-module|another-es6-module).*/"
    ],
};