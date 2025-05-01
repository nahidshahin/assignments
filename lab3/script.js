"use strict";

import { 
    get_items, 
    add_item, 
    update_item_title_by_id, 
    delete_item_by_id, 
    get_item_title_by_id 
} from './data.js';

console.log('Initial state:', get_items());

console.log('Add item 1:', add_item({ id: 1, title: 'First' }));
console.log('Add item 2:', add_item({ id: 2, title: 'Second' }));
console.log('Add item 1 again :', add_item({ id: 1, title: 'First' }));

console.log('Update item1:', update_item_title_by_id(1, 'Updated First'));
console.log('Update item not in list:', update_item_title_by_id(10, 'Updated First'));

console.log('Get existing title:', get_item_title_by_id(2));
console.log('Get unknown title:', get_item_title_by_id(10));

console.log('Delete item1:', delete_item_by_id(1));
console.log('Delete item not exist:', delete_item_by_id(10));