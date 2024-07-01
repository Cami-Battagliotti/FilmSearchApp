import { API_URL } from "../constants";
import { writeDb } from "../utils/fs";

async function getAllData(title: string) {
  console.log(5);

  const response = await fetch(API_URL + title);
  const films = await response.json();
  console.log(8);

  return films;
}

async function searchByTitle(title: string) {
  console.log(4);
  writeDb(title);
  const films = getAllData(title);
  console.log(6);

  return films;
}

export { searchByTitle };
