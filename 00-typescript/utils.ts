export const printDash = (n: number = 64) => {
  let txt = "";
  for (let i = 0; i < n; i++) {
    txt += "-";
  }
  console.log(txt);
};
