export default function fetcher(
  url: URL | RequestInfo,
  init?: RequestInit | undefined
) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    ...init,
  }).then((r) => {
    const authHeader = r.headers.get("authorization") || "";

    if (!localStorage.getItem("authToken") && authHeader) {
      localStorage.setItem("authToken", authHeader);
    }

    return r.json();
  });
}
