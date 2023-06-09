exports.addStyleCurrency = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VNĐ";
};

exports.localeStrToDate = (str) => {
  return new Date(str);
};

exports.getPagingResult = (result, page = 1, pageSize = 10) => {
  const totalItems = result.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  return {
    data: result.slice((page - 1) * pageSize, page * pageSize),
    totalPages,
    totalItems,
  };
};
