export const http = {
  get: async <T>(url: RequestInfo | URL): Promise<T> => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw response;
    }

    return response.json();
  },

  post: async (url: RequestInfo | URL, body: unknown) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    } as unknown as RequestInit);

    if (!response.ok) {
      throw response;
    }

    return response;
  },

  patch: async (url: RequestInfo | URL, body: unknown) => {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw response;
    }

    return response;
  },

  delete: async (url: RequestInfo | URL) => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw response;
    }

    return response;
  },
};
