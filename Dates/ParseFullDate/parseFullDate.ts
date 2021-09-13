import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import isCompleteDate from '../IsCompleteDate/isCompleteDate';

const formatDate = (date: string): string => {
  const completeDate = isCompleteDate(date);
  let dateToFormat = date;
  if (!completeDate) {
    dateToFormat = `${date}T00:00:00`;
  }
  const formatedDate = format(
    new Date(dateToFormat),
    "dd 'de' MMMM 'de' yyyy",
    {
      locale: ptBR,
    }
  );
  return formatedDate;
};

export default formatDate;
