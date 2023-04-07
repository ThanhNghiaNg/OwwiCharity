export const serverUrl = "http://localhost:5000";

export const shortHeadID = (id, numLastCharacters) => {
  const len = id.length;
  return "..." + id.substring(len - numLastCharacters);
};

export const shortStr = (str, len) => {
  return str.slice(0, len) + "...";
};

export const dotCurrencyVND = (number) => {
  return number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export const strToDate = (str) => {
  return new Date(str).toLocaleDateString();
};
