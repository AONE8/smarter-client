import { isExpired } from "react-jwt";

export class Token {
  private static _token = "";

  static getToken() {
    this._token = localStorage.getItem("token") ?? "";

    if (!this._token) return null;
    // throw new Error("Token not found");

    if (isExpired(this._token)) {
      console.log("Token expired");
      this.removeToken();
      return null;
      // throw new Error("Token expired");
    }

    return this._token;
  }

  static setToken(token: string) {
    this._token = token;
    localStorage.setItem("token", token);
  }

  static removeToken() {
    this._token = "";
    localStorage.removeItem("token");
  }
}
