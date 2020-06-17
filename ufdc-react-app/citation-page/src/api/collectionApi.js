import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/collections/";

export function getCollections() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getCollectionBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((collections) => {
        if (collections.length !== 1)
          throw new Error("Collection not found: " + slug);
        return collections[0]; // should only find one collection for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveCollection(collection) {
  return fetch(baseUrl + (collection.id || ""), {
    method: collection.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...collection,
      // Parse creatorId to a number (in case it was sent as a string).
      creatorId: parseInt(collection.creatorId, 10),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCollection(collectionId) {
  return fetch(baseUrl + collectionId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
