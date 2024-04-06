export function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().substr(2, 2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export function calculateTimePassed(createdAt) {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const differenceInSeconds = Math.floor((now - createdDate) / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInMonths / 12);

  if (differenceInSeconds < 120) {
    return "1 minute ago";
  }
  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} minutes ago`;
  }
  if (differenceInHours < 2) {
    return "1 hour ago";
  }
  if (differenceInHours < 24) {
    return `${differenceInHours} hours ago`;
  }
  if (differenceInDays < 2) {
    return "1 day ago";
  }
  if (differenceInDays <= 30) {
    return `${differenceInDays} days ago`;
  }
  if (differenceInMonths < 2) {
    return "1 month ago";
  }
  if (differenceInMonths <= 11) {
    return `${differenceInMonths} months ago`;
  }
  if (differenceInYears < 2) {
    return "1 year ago";
  }
  return `${Math.floor(differenceInMonths / 12)} years ago`;
}
