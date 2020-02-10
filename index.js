'use strict';
//enter items needed by EVENT clicking "add item" button
$(function() {
  $('#js-shopping-list-form').submit( event => {
    event.preventDefault();
    const newItem = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    console.log(newItem);
    $('.shopping-list').append(`
         <li>
         <span class="shopping-item">${newItem}</span>
         <div class="shopping-item-controls">
           <button class="shopping-item-toggle">
             <span class="button-label">check</span>
           </button>
           <button class="shopping-item-delete">
             <span class="button-label">delete</span>
           </button>
         </div>
       </li>
         `);
  });
});
//check and uncheck items by EVENT clicking "check" button
$(function(){

});
//remove items from list by EVENT clicking "delete" button
$(function(){

});