import * as content from '../data/content.js';
import * as utils from './utils.js';

const ORDER = {};
for (const brigadeiro of content.brigadeiros) ORDER[brigadeiro.id] = 0;

utils.fillBrigadeirosList(ORDER);
utils.fillFinalWishList(ORDER);
utils.updateSendButton(ORDER);
