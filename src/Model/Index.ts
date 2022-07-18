import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import * as blueBird from 'bluebird';

import { DATAREQ } from '../Config/IndexConfig';
mongoose.Promise = blueBird.Promise;
mongoose.connect(DATAREQ.DB_URI, {
}).then(function (db) {
  process.env.NODE_ENV === 'test';
});

let repositoryPath = path.resolve(__dirname);
let appRepository = {};
fs.readdirSync(repositoryPath).map(file => {
  if (file !== 'app.js') {
    // to ignore .js.map files that causes crash on npm start
    if(file.indexOf('.js.map') < 0) {
    const schemaInfo = require(path.resolve(__dirname, file)); // cannot using import inside function
    const model = mongoose.model(schemaInfo.default.name, schemaInfo.default.schema);
    console.log(model ,"kdef");
    
    // appRepository[schemaInfo?.default.name] = model;
    }
  }
});

export default appRepository;

export let MODEL_NAME = {
  AGENT: 'Agent',
  RECORD: 'Record',
  USER: 'User',
  METER: 'Meter',
  VOUCHER: 'Voucher',
  COMMISSION: 'Commission',
}

export let RECORD_TYPE = {
  TELIKOM: 'telikom',
  BEMOBILE: 'bemobile',
  DIGICEL: 'digicel',
  ESIPAY: 'esipay',
  COMMISSION: 'commission'
}
