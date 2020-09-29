import React from 'react';
import dateFormat from 'dateformat';

// Locale de-DE helps formatting $1000 to $1.000
const numberFormatter = new Intl.NumberFormat('de-DE', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const paginationOptions = (dataLength, onPageChange) => ({
  pageStartIndex: 1,
  // withFirstAndLast: false, // Hide the going to First and Last page button
  hideSizePerPage: true, // Hide the sizePerPage dropdown always
  hidePageListOnlyOnePage: true,
  sizePerPageList: [
    {
      text: '10', value: 10,
    }, {
      text: '50', value: 50,
    }, {
      text: 'Todo', value: dataLength,
    }],
  onPageChange: (page, sizePerPage) => onPageChange(page, sizePerPage),
});

function footerFormatter(column, colIndex, {text}) {
  return (
      <h5><strong>ARS $ {text}</strong></h5>
  );
}

function priceFormatter(cell, row) {
  const num = numberFormatter.format(cell);
  if (this.dataField.net_total) {
    return (
        <span>
          <strong>ARS $ {num}</strong>
        </span>
    );
  }
  return (
      <span>ARS $ {num}</span>
  );
}

const sorting = [
  {
    dataField: 'date',
    order: 'desc',
  }];

dateFormat.i18n = {
  dayNames: [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
  ],
  monthNames: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGOSTO',
    'SEPT',
    'OCT',
    'NOV',
    'DIC',
  ],
  timeNames: [
    'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM',
  ],
};

function fullDateFormatter(cell) {
  const utcDate = new Date(cell);
  const formattedDate = dateFormat(utcDate, 'yyyy-mm-dd');
  return formattedDate;
}

function monthDateFormatter(cell) {
  const utcDate = new Date(cell);
  const formattedDate = dateFormat(utcDate, 'mmmm yyyy');
  return formattedDate;
}

export {
  numberFormatter,
  monthDateFormatter,
  fullDateFormatter,
  footerFormatter,
  priceFormatter,
  paginationOptions,
  sorting,
};