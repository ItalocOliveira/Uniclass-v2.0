import AsyncStorage from "@react-native-async-storage/async-storage";

export async function authFetch(url: string, options: any = {}) {
  const token = await AsyncStorage.getItem("token");

  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {})
    }
  });
}
