document.addEventListener("DOMContentLoaded", function(){

  var currentRow, currentRowIndex, cell;
  let table = document.querySelector(".container__table");
  let rmRow = document.querySelector(".btn__rm-row");
  let rmCol = document.querySelector(".btn__rm-col");
  let addRow = document.querySelector(".btn__add-row");
  let addCol = document.querySelector(".btn__add-col");
  var rows = rows = document.querySelectorAll(".container__table tr");

  table.addEventListener("mouseover", function( event ) {
    rows = document.querySelectorAll(".container__table tr");
    cell = event.target.cellIndex;
    let cellPositionLeft;
    if(event.target.nodeName == "TD") {
      cellPositionLeft = event.target.getBoundingClientRect().left;
    }
    rmCol.style.left = cellPositionLeft + "px";

    for(let x = rows.length -1; x >= 0; x--) {
      rows[x].addEventListener("mouseover", function( event ) {
        currentRow = this;
        currentRowIndex = currentRow.rowIndex;
        let rowPositionTop = currentRow.getBoundingClientRect().top;
        rmRow.style.top = rowPositionTop + "px";
      })
    }
    rmCol.classList.add("visible");
    rmRow.classList.add("visible");
  })

  table.addEventListener("mouseout", function( event ) {
    rmCol.classList.remove("visible");
    rmRow.classList.remove("visible");
  })

  document.addEventListener("click", function( event ){
    if(event.target.classList == "btn__add btn__add-row") {
      rows = document.querySelectorAll(".container__table tr");
      let lastRow = document.querySelector(".container__table tr:last-child");
      let rowLength = rows[0].cells.length;
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
      for(let x = 0; x < rows.length; x++){
        rows[x].deleteCell(cell);
      }
    }
  })
});
