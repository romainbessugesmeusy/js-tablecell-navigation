#jquery.tablecellNavigation

jQuery extensions for cell navigation in tables.


##Neighboor cells
Quickly access the cell below or above, next or previous. 

| /                 | /              | /                  |
| :---------------: | :------------: | :----------------: |
| .topLeftCell()    | .topCell()     | .topRightCell()    |
| .leftCell()       | **$(this)**    | .rightCell()       |
| .bottomLeftCell() | .bottomCell()  | .bottomRightCell() |

###Cells in column

Fetch all cells sharing the same `colIndex` with $('td').cellsInCol()

###Cells in row

Fetch all cells sharing the same `rowIndex` with $('td').cellsInRow()

###$.fn.cellCoordinates()
Fetch cell `colIndex` and `rowIndex` relatively to the closest `<tr>` container (may be `<tbody>`, `<thead>`, `<tfoot>` or `<table>`).

##$.fn.cellsTo()
