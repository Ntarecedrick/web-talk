

import moment from 'moment';

export const getRelativeTime = (timestamp: string | Date) => {
  const now = moment();
  const createdTime = moment(timestamp);

  const diffMinutes = now.diff(createdTime, 'minutes');
  const diffHours = now.diff(createdTime, 'hours');

  if (diffMinutes === 0) {
    return 'just now';
  } else if (diffMinutes < 60) {
    return `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (diffHours < 24) {
    const remainingMinutes = diffMinutes % 60;
    return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
  } else {
    // Handle cases beyond 24 hours if needed
    return 'more than a day ago';
  }
};