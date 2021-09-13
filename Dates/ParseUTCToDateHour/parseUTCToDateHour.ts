/**
 * Parse an UTC string date to 'dd/mm/yyyy hh:mm:ss' format
 *
 * @param date string de data UTC
 * @returns formated date 
 */

 import isCompleteDate from '../IsCompleteDate/isCompleteDate';

 const parseUTCToDateHour = (date: string): string => {
   let parsedDate = '';
   if (date) {
     let dateToParse = date;
     if (!isCompleteDate(date)) {
       dateToParse = `${date}T00:00:00`;
     }
     const utcDate = new Date(dateToParse);
     parsedDate = `${utcDate.toLocaleDateString('pt-br', {
       year: 'numeric',
       month: '2-digit',
       day: '2-digit',
     })} ${utcDate.toLocaleTimeString('pt-br')}`;
   }
   return parsedDate;
 };
 
 export default parseUTCToDateHour;
 