import moment from 'moment';

const DateTime = (dateString: string)=>{
    const date = moment(dateString);
   const formattedDate = date.format("D/M/YYYY | h:mma");
   return formattedDate
}

export default DateTime;