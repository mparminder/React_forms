const Filter = (data, property, value) => {
  let filtereddata = [];
  if (value === "0" || value === 0) {
    return data;
  } else {
    data.map((ele, index) => {
      if (ele[property] === value.toString()) {
        filtereddata.push(ele);
      }
    });
  }
  return filtereddata;
};

export default Filter;
