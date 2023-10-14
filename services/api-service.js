const BASE_URL = "https://books-api.nomadcoders.workers.dev";

// export default function ApiService() {
// }

export function getCategory() {
  return fetch(`${BASE_URL}/lists`).then((res) => res.json());
}
