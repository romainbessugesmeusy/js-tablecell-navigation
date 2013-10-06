/*
 The MIT License (MIT)

 Copyright (c) 2013 romainbessugesmeusy

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

$.fn.cellCoordinates = function () {
    return {
        colIndex: $(this[0]).index(),
        rowIndex: $(this[0]).closest('tr').index()
    }
};

$.fn.cellDown = function () {
    var coord = this.cellCoordinates();
    return this.closest('tr').parent().find('tr').eq(coord.rowIndex + 1).find('td,th').eq(coord.colIndex);
};

$.fn.cellUp = function () {
    var coord = this.cellCoordinates();
    return this.closest('tr').parent().find('tr').eq(coord.rowIndex - 1).find('td,th').eq(coord.colIndex);
};

$.fn.cellLeft = function () {
    var coord = this.cellCoordinates();
    return this.closest('tr').find('td,th').eq(coord.colIndex - 1);
};

$.fn.cellRight = function () {
    var coord = this.cellCoordinates();
    return this.closest('tr').find('td,th').eq(coord.colIndex + 1);
};

$.fn.cellsInCol = function () {
    var cells = [], coord;
    this.each(function () {
        coord = $(this).cellCoordinates();
        if (coord) {
            $(this).closest('tr').parent().find('tr').each(function () {
                cells.push($(this).find('td, th').eq(coord.colIndex)[0]);
            });
        }
    });
    return $(cells);
};

$.fn.cellsInRow = function () {
    var cells = [];
    this.each(function () {
        $(this).closest('tr').find('td, th').each(function () {
            cells.push(this);
        })
    });
    return $(cells);
};

$.fn.cellsTo = function ($targetCell) {
    var minRowIndex,
        maxRowIndex,
        minColIndex,
        maxColIndex,
        thisCoord = this.cellCoordinates(),
        targetCoord = $targetCell.cellCoordinates(),
        cells = [];

    if (thisCoord.rowIndex < targetCoord.rowIndex) {
        minRowIndex = thisCoord.rowIndex;
        maxRowIndex = targetCoord.rowIndex;
    } else {
        minRowIndex = targetCoord.rowIndex;
        maxRowIndex = thisCoord.rowIndex;
    }
    if (thisCoord.colIndex < targetCoord.colIndex) {
        minColIndex = thisCoord.colIndex;
        maxColIndex = targetCoord.colIndex;
    } else {
        minColIndex = targetCoord.colIndex;
        maxColIndex = thisCoord.colIndex;
    }

    this.closest('tr').parent().find('tr').each(function (rowIndex, row) {
        $(row).find('th, td').each(function (colIndex, cell) {
            if (rowIndex >= minRowIndex && rowIndex <= maxRowIndex && colIndex >= minColIndex && colIndex <= maxColIndex) {
                cells.push(cell);
            }
        });
    });

    return $(cells);
};