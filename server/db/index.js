
const dbConfig = require('./mongo').default;

export const connect     = dbConfig.connect;
export const controllers = dbConfig.controllers;
export const session     = dbConfig.session;

