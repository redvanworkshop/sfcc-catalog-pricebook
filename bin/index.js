#!/usr/bin/env node

const path = require('path');
const yargs = require('yargs');

const argv = yargs
    .usage('Usage: sfcc-catalog-pricebook -i [input] -o [output]')
    .option('input', {
        describe    : 'Input File ( Catalog XML )',
        alias       : 'i',
        demandOption: true,
        type        : 'string',
    })
    .option('output', {
        describe    : 'Output File ( Generated XML )',
        alias       : 'o',
        demandOption: false,
        type        : 'string',
        default     : 'pricebook'
    })
    .option('id', {
        describe    : 'The ID of the generated pricebook',
        demandOption: false,
        type        : 'string'
    })
    .option('name', {
        describe    : 'The name of the generated pricebook',
        alias       : 'n',
        demandOption: false,
        type        : 'string',
    })
    .option('description', {
        describe    : 'The description for the generated pricebook',
        alias       : 'd',
        demandOption: false,
        type        : 'string',
        default     : ''
    })
    .option('currency', {
        describe    : 'The currency code to be used for the generated pricebook',
        alias       : 'c',
        demandOption: false,
        type        : 'string',
        default     : 'USD'
    })
    .option('min-amount', {
        describe    : 'The minimum price amount to be generated for a product',
        alias       : 'm',
        demandOption: false,
        type        : 'number',
        default     : 5.99
    })
    .option('max-amount', {
        describe    : 'The minimum price amount to be generated for a product',
        alias       : 'x',
        demandOption: false,
        type        : 'number',
        default     : 589.99
    })
    .example('sfcc-catalog-pricebook -i catalog.xml', 'Basic Example')
    .help()
    .version()
    .argv;

require(path.join(__dirname, '../lib/index.js'))(argv);
