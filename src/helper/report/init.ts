const fs = require('fs-extra');

try {
    fs.ensureDir("test-results") // check for folder called 'test-results'. If it does not exist then it will create it.
    fs.emptyDir("test-results") // If the folder exists then it will empty it.
} catch (error) {
    console.log(`test-resilts folder not created! ${error}`)
}
