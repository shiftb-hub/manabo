const getTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const token = cookies.find((row) => row.startsWith("access_token="));
  return token?.split("=")[1] || "";
};

export const api = {
  get: async <ResponseType>(endpoint: string) => {
    try {
      const res = await fetch(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromCookie()}`,
        },
      });
      if (res.status !== 200) {
        const errorData = await res.json();
        console.error("Error fetching data:", errorData);
      }
      const data: ResponseType = await res.json();
      return data;
    } catch (e) {
      throw e;
    }
  },

  post: async <ResponseType, RequestType>(endpoint: string, payload: RequestType) => {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromCookie()}`,
        },
        body: JSON.stringify(payload),
      });
      if (res.status !== 200) {
        const errorData = await res.json();
        const errorMessage = errorData.message || "登録に失敗しました。";
        throw new Error(errorMessage);
      }
      const data: ResponseType = await res.json();
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  put: async <RequestType, ResponseType>(endpoint: string, payload: RequestType) => {
    try {
      const res = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromCookie()}`,
        },
        body: JSON.stringify(payload),
      });
      if (res.status !== 200) throw new Error("更新に失敗しました。");
      const data: ResponseType = await res.json();
      return data;
    } catch (e) {
      throw e;
    }
  },

  del: async <ResponseType>(endpoint: string) => {
    try {
      const res = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromCookie()}`,
        },
      });
      if (res.status !== 200) throw new Error("削除に失敗しました。");
      const data: ResponseType = await res.json();
      return data;
    } catch (e) {
      throw e;
    }
  },
};
