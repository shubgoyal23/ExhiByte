const dateConverter = (timestamp) => {
   const date = new Date(timestamp);
   return date.toDateString();
};

export default dateConverter;
