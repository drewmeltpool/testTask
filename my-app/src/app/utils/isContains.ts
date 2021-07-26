const isContains = (str: string) => (data: string) => data.includes(str);

const isContainsZero = isContains('0');

export default isContainsZero;
