document.addEventListener("DOMContentLoaded", function(){

  var rows, currentRow, currentRowIndex, cell;
  let table = document.querySelector(".container__table");
  let rmRow = document.querySelector(".btn__rm-row");
  let addRow = document.querySelector(".btn__add-row");
  let addCol = document.querySelector(".btn__add-col");
  let rmCol = document.querySelector(".btn__rm-col");

  table.addEventListener("mouseover", function( event ) {
    rows = document.querySelectorAll(".container__table tr");
    //console.log('cell ' + event.target.cellIndex);
    cell = event.target.cellIndex;
    let cellPositionLeft = event.target.getBoundingClientRect().left;
    let cellPositionBottom = table.getBoundingClientRect().bottom;
    addCol.style.left = cellPositionLeft + "px";
    rmCol.style.left = cellPositionLeft + "px";
    rmCol.style.top = cellPositionBottom + 5 + "px";

    for(let x = rows.length -1; x >= 0; x--) {
      rows[x].addEventListener("mouseover", function( event ) {
        //console.log('row ' + this.rowIndex);
        currentRow = this;
        currentRowIndex = currentRow.rowIndex;
        let rowPositionTop = currentRow.getBoundingClientRect().top;
        let rowPositionRight = currentRow.getBoundingClientRect().right;
        //console.log(rowPostion);
        addRow.style.top = rowPositionTop + "px";
        addRow.style.left = rowPositionRight + 5 + "px";
        rmRow.style.top = rowPositionTop + "px";
      })
    }
  })

  document.addEventListener("click", function( event ){
    if(event.target.classList == "btn__add btn__add-row") {
      let lastRow = document.querySelector(".container__table tr:last-child");
      let rowLength = rows[0].cells.length;
      //console.log(rows.length)
      table.insertRow(rows.length);
      setTimeout(function(){
        lastRow  = document.querySelector(".container__table tr:last-child");
        for(let x = 0; x <= rowLength - 1; x++) {
          lastRow.insertCell(lastRow);
        }
      }, 0.01)
    } else if (event.target.classList == "btn__add btn__add-col") {
      for(let x = 0; x < rows.length; x++) {
        let cellsRow = rows[x].cells.length;
        rows[x].insertCell(cellsRow);
      }
    } else if (event.target.classList == "btn__rm btn__rm-row") {
      table.deleteRow(currentRowIndex);
    } else if (event.target.classList == "btn__rm btn__rm-col") {
      console.log('delete col ' + cell);
      for(let x = 0; x < rows.length; x++){
        rows[x].deleteCell(cell);
      }
    }
  })
});
//.deleteCell(0);
//.insertRow(0); .insertCell(0);
