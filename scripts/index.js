document.addEventListener("DOMContentLoaded", function(){
  var table = document.querySelector(".container__table");
  table.addEventListener("mouseover", function( event ) {
    console.log('cell ' + event.target.cellIndex);
  })
  var rows = document.querySelectorAll(".container__table tr");
  for(let x = rows.length -1; x >= 0; x--) {
    rows[x].addEventListener("mouseover", function( event ) {
      console.log(this.rowIndex);
    })
  }
});
