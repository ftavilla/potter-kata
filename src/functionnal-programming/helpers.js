// Instead of using splice which is not pure and I don't like it, I prefer using this hand made function.
export const pureReplace = (arr, el, i) => [...arr.slice(0, i), el, ...arr.slice(++i)]