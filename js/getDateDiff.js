import { DateTime } from './luxon.js';

function getDateDiff(item1, item2) {
    const firstDateTo = DateTime.fromISO(item1);
    const secondDateFrom = DateTime.fromISO(item2);
  return secondDateFrom.diff(firstDateTo, ['years', 'months', 'days']).toObject();
}

export default getDateDiff;