document.addEventListener("DOMContentLoaded", function(){

  let table = document.querySelector(".container__table");
  let rmRow = document.querySelector(".btn__rm-row");
  let addRow = document.querySelector(".btn__add-row");
  let addCol = document.querySelector(".btn__add-col");
  let rmCol = document.querySelector(".btn__rm-col");

  table.addEventListener("mouseover", function( event ) {
    console.log('cell ' + event.target.cellIndex);
    let cellPositionLeft = event.target.getBoundingClientRect().left;
    let cellPositionBottom = table.getBoundingClientRect().bottom;
    addCol.style.left = cellPositionLeft + "px";
    rmCol.style.left = cellPositionLeft + "px";
    rmCol.style.top = cellPositionBottom + 5 + "px";
  })

  var rows = document.querySelectorAll(".container__table tr");
  for(let x = rows.length -1; x >= 0; x--) {
    rows[x].addEventListener("mouseover", function( event ) {
      //console.log('row ' + this.rowIndex);
      let rowPositionTop = this.getBoundingClientRect().top;
      let rowPositionRight = this.getBoundingClientRect().right;
      //console.log(rowPostion);
      addRow.style.top = rowPositionTop + "px";
      addRow.style.left = rowPositionRight + 5 + "px";
      rmRow.style.top = rowPositionTop + "px";
    })
  }
});
//.deleteRow(1); deleteCell(0);