import { brigadeiros, cakes } from '../data/content.js';
import * as utils from './utils.js';

const flavors = brigadeiros.concat(cakes);

const ORDER = {};
for (const flavor of flavors) ORDER[flavor.id] = 0;

utils.fillBrigadeirosList(ORDER);
utils.fillCakesList(ORDER);
utils.fillFinalWishList(ORDER);
utils.updateSendButton(ORDER);
