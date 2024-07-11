
const baseUrl = localStorage.API_URL || import.meta.env.VITE_API_URL || 'http://localhost:3300'


export function getDiagram() {
  return fetch(`${baseUrl}/get${location.search}`).then(x => x.json())
}

export function saveDiagram(body) {
  return fetch(`${baseUrl}/set${location.search}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(x => x.json())
}
