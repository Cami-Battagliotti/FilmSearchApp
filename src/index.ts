import { searchByTitle } from "./model/model";
console.log(1);

async function main(title: string) {
  console.log(3);

  const films = await searchByTitle(title);
  return films;
}
console.log(2);

main("ahsoka").then((response) => response);
console.log(7);
