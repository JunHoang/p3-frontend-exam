import { TimeProp } from '../types/propTypes';

const TIME_IN_SECOND = 60;
const TIME_IN_MINUTE = 60 * 60;
const TIME_IN_HOUR = 60 * 60 * 24;
const TIME_IN_DAY = 60 * 60 * 24 * 7;

const countTime = ({ time }: TimeProp) => {
    const now = Date.now();
    const diffInMs = Math.abs(now - time);
    const timingInSec = Math.floor(diffInMs / (1000));

    if (timingInSec < TIME_IN_SECOND) {
        return 'few seconds ago';
    }
    if (timingInSec < TIME_IN_MINUTE) {
        const timingInMin = Math.floor(timingInSec / TIME_IN_SECOND);
        return `${timingInMin}m ago`;
    }
    if (timingInSec < TIME_IN_HOUR) {
        const timingInHour = Math.floor(timingInSec / TIME_IN_MINUTE);
        return `${timingInHour}h ago`;
    }
    if (timingInSec < TIME_IN_DAY) {
        const timingInDay = Math.floor(timingInSec / TIME_IN_HOUR);
        return `${timingInDay}d ago`;
    }
    else {
        const date = new Date(time);
        const month = date.getUTCMonth() + 1; //months from 1-12
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const newdate = day + "/" + month + "/" + year;
        return `${newdate}`;
    }
}


export default countTime;