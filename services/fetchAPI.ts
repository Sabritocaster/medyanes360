const baseUrl =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    : "";

export async function getApi(url: string) {
  const res = await fetch(baseUrl + url, { cache: "no-store" });
  if (!res.ok) throw new Error("API GET error");
  return res.json();
}

export async function postApi<T>(url: string, data: T) {
  const res = await fetch(baseUrl + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("API POST error");
  return res.json();
}

export async function putApi<T>(url: string, data: T) {
  const res = await fetch(baseUrl + url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("API PUT error");
  return res.json();
}

export async function deleteApi(url: string) {
  const res = await fetch(baseUrl + url, { method: "DELETE" });
  if (!res.ok) throw new Error("API DELETE error");
  return res.json();
}