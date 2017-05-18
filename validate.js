const Validator = require('jsonschema').Validator;
const schema = require('./schema.json');
const object = require('./libraries/java/l4j8.json');
const glob = require('glob');

const v = new Validator();


const libraries = [];
const directory = './libraries/**/*.json';
glob(directory, (err, files) => {
    if (err) {

    } else {
        files.forEach((file) => {
            const repo = require(file);
            const result = v.validate(repo, schema);
            if (result.errors.length > 0) {
                console.log(result);
            } else {
                console.log('No validation errors found');
            }
        });
    }
});
