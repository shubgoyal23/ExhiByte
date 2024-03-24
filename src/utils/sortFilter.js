const sortfunction = (data, filter, method) => {
   return data.slice().sort((a, b) => {
      const value1 = a.twubric[filter];
      const value2 = b.twubric[filter];

      return method ? value2 - value1 : value1 - value2;
   });
};

export default sortfunction;
