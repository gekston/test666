document.addEventListener("DOMContentLoaded", function(){
  var table = document.querySelector(".container__table");
  table.addEventListener("mouseover", function( event ) {
    console.log('row ' + event.target.rowIndex, 'cell ' + event.target.cellIndex);
  })
});
