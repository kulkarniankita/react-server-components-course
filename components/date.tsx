import { parseISO, format } from 'date-fns';
import { DateType } from 'types/types';

export default function DisplayDate({
  dateString,
  formatType = 'LLLL dd, yyyy',
}: DateType) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, formatType)}</time>;
}
