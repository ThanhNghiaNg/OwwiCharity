exports.addStyleCurrency = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VNĐ";
};

exports.getPagingResult = (result, page = 1, pageSize = 10) => {
  const numResult = result.length;
  const maxPage = Math.ceil(numResult / pageSize);
  return {
    data: result.slice((page - 1) * pageSize, page * pageSize),
    maxPage,
    numResult,
  };
};
