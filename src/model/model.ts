import { API_URL } from "../constants";

async function getAllData(title: string) {
  console.log(5);

  const response = await fetch(API_URL + title);
  const data = await response.json();
  console.log(8);

  return data;
}

async function searchByTitle(title: string) {
  console.log(4);

  const filmTitle = getAllData(title);
  console.log(6);

  return filmTitle;
}

export { searchByTitle };
