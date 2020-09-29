import axios from 'axios';
import _ from 'lodash';

export const getChargeBack = (establishmentNumber, page, filters) => {
  let finalFilters = {};
  _.assign(finalFilters,
      {
        establishmentNumber: establishmentNumber,
        page: page ? page : 0
      },
      filters);

  finalFilters = _(finalFilters).
      omitBy(_.isUndefined).
      omitBy(_.isNull).
      omitBy(_.isEmpty).
      value();

  return (axios.get(`/api/mockserver/chargeback`,
      {params: finalFilters}));
};