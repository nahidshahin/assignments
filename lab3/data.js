"use strict";

let data = []; 
 
export function get_items() { 
    return data; 
} 
 
export function add_item(new_item) {
    if (!new_item || !new_item.id) 
        return false;
    if (data.some(item => item.id === new_item.id)) return false;
    
    data.push(new_item);
    return true;
}

export function update_item_title_by_id(id, new_title) {
    const item = data.find(item => item.id === id);
    if (!item) return false;
    
    item.title = new_title;
    return true;
}

export function delete_item_by_id(id) {
    const initialLength = data.length;
    data = data.filter(item => item.id !== id);
    return data.length !== initialLength;
}

export function get_item_title_by_id(id) {
    const item = data.find(item => item.id === id);
    return item ? item.title : undefined;
}