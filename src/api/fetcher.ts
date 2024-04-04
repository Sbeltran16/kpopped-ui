export default function fetcher(
  url: URL | RequestInfo,
  init?: RequestInit | undefined
) {
  const localAuthHeader = localStorage.getItem("authToken");
  const authHeader = !!localAuthHeader && { Authorization: localAuthHeader };

  return fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(authHeader || undefined),
      ...init?.headers,
    },
  }).then((r) => {
    // Retrieve authorization header from the response (server response) if present
    const authHeader = r.headers.get("authorization");

    // if an auth header comes through, resolve by storing
    if (authHeader) {
      localStorage.setItem("authToken", authHeader);
    }

    return r.json();
  });
}
