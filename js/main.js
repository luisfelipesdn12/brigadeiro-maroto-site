import * as constants from '../data/constants.js';
import * as content from '../data/content.js';
import * as utils from './utils.js';

const ORDER = {};
for (const brigadeiro of content.brigadeiros) ORDER[brigadeiro.id] = 0;

utils.fillBrigadeirosList(content.brigadeiros, ORDER);
utils.fillFinalWishList(content.brigadeiros, ORDER);
