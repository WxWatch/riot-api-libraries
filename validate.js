const Validator = require('jsonschema').Validator;
const schema = require('./schema.json');
const glob = require('glob');

const v = new Validator();

const libraries = [];
const directory = './libraries/**/*';
glob(directory, { nodir: true }, (err, files) => {
    let errors = [];
    if (err) {
        console.log('Error reading files', { err });
        process.exit(-1);
    } else {
        files.forEach((file) => {
            // Check if file has .json extension
            if (file.indexOf('.json') === -1) {
                errors.push(`File ${file} does not end with .json`);
                return;
            }
            
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
