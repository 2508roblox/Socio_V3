  const formatTime  = (time) => {
    const dateStr = time;
    const date = new Date(dateStr);
    
    // Using toLocaleString
    const formattedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    });
    return formattedDate
 
  }
  export default formatTime