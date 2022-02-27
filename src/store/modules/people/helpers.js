export const startsWithUnwantedChar = (value, chars) => {
  const exp = new RegExp(`^[^${chars}].*`);
  return !value.match(exp);
};

export const getGenderAmount = (gender, people) => {
  const amount = 0;
  const reducer = (accumulator, item) => {
    return item.gender === gender ? accumulator + 1 : accumulator;
  };
  return people.reduce(reducer, amount);
};

export const scrapIds = (data) => {
  return data?.map((obj) => {
    const id = Number(obj.url.match(/\d+/)[0]);
    return { id, ...obj };
  });
};
