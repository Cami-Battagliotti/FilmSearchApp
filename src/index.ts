import { searchByTitle } from "./model/model";
console.log(1);

async function main() {
  console.log(3);

  const films = await searchByTitle("atlas");
  return films;
}
console.log(2);

main().then((response) => console.log(response));
console.log(7);
