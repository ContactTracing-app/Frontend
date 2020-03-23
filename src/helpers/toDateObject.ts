// https://stackoverflow.com/a/3605248

const toDateObject = (date: Date) => ({
  yyyy: date.getFullYear().toString(),
  mm: `0${date.getMonth() + 1}`.slice(-2),
  dd: `0${date.getDate()}`.slice(-2)
});

export default toDateObject;
