module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    moduleFileExtensions: ['js','jsx','json','node'],
    transform: {
        '^.+//.(js|jsx|tx|tsx)$': 'babel-jest',
    },
};