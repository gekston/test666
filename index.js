document.addEventListener("DOMContentLoaded", function(){
  var table = document.querySelector(".container__table");
  table.addEventListener("mouseover", function( event ) {
    console.log('cell ' + event.target.cellIndex);
  })
  let rows = document.querySelectorAll(".container__table tr");
  for(let x = 0, xLength = rows.length; x < xLength; x++) {
    console.log('rowIndex= ' + rows[x].rowIndex);
  }
});
