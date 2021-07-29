import '@testing-library/jest-dom';

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.window.open = jest.fn();
// eslint-disable-next-line no-underscore-dangle
global.window.__NEXT_DATA__ = {};
