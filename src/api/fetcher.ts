export default function fetcher(
  url: URL | RequestInfo,
  init?: RequestInit | undefined
) {
  const localAuthHeader = localStorage.getItem("authtoken");
  const authHeader = !!localAuthHeader && { Authorization: localAuthHeader };

  return fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(authHeader || undefined),
      ...init?.headers,
    },
  }).then((r) => {
    const authHeader = r.headers.get("authorization");

    if (authHeader) {
      localStorage.setItem("authToken", authHeader);
    }

    return r.json();
  });
}
