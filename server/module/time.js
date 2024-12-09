const test = {
  fullObject() {
    let nextDate = new Date();
    nextDate.setUTCHours(nextDate.getUTCHours() + 5);
    return {
      Date: nextDate.getUTCDate(),
      Month: nextDate.getUTCMonth() + 1,
      Year: nextDate.getUTCFullYear(),
      Hours: nextDate.getUTCHours(),
      Minutes: nextDate.getUTCMinutes(),
      Seconds: nextDate.getUTCSeconds(),
    };
  },
  time() {
    let nextDate = new Date();
    nextDate.setUTCHours(nextDate.getUTCHours() + 5);
    return `${nextDate.getUTCHours()}:${nextDate.getUTCMinutes()}`;
  },
  date() {
    let nextDate = new Date();
    nextDate.setUTCHours(nextDate.getUTCHours() + 5);
    return `${nextDate.getUTCDate()}.${nextDate.getUTCMonth() + 1}.${nextDate.getUTCFullYear()}`;
  },
};

module.exports = test;
