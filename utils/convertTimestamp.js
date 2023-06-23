export function convertTimestamp(timestamp) {
  const date = new Date(timestamp);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return date.toLocaleString("en-US", options);
}
