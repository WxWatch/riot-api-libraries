const Validator = require('jsonschema').Validator;
const schema = require('./schema.json');
const object = require('./libraries/java/l4j8.json');
const glob = require('glob');

const v = new Validator();


const libraries = [];
const directory = './libraries/**/*.json';
glob(directory, (err, files) => {
    let errors = [];
    if (err) {
        console.log('Error reading files', { err });
        process.exit(-1);
    } else {
        files.forEach((file) => {
            const repo = require(file);
            const result = v.validate(repo, schema);
            if (result.errors.length > 0) {
                errors = errors.concat(result.errors);
            }
        });
    }

    if (errors.length > 0) {
        console.log('Errors with validation', { errors });
        process.exit(-1);
    }

    console.log('No validation errors found');
    process.exit(0);
});
