/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import AuthToken from "@/utils/token";
import { State } from "./types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const state: State = {
  auth: null,
  token: "",
  role: "",
};

const getters = {
  token: (state: State) => state.token,
  auth: (state: State) => state.auth,
  role: (state: State) => state.role,
};

const mutations = {
  setToken(state: State, token: string) {
    state.token = token;
  },
  removeToken(state: State) {
    state.token = null;
  },
  setAuth(state: State, auth: any) {
    state.auth = auth;
  },
  setRole(state: State, role: any) {
    state.role = role;
  },
};

const actions = {
  getAuth({ commit }: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit("setAuth", user);
          resolve(user);
        } else {
          reject(null);
        }
      });
    });
  },

  login({ commit }: any, credential: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, credential.email, credential.password)
        .then((data: any) => {
          commit("setToken", data.user.accessToken);
          AuthToken.setToken(data.user.accessToken);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  register({ commit }: any, credential: any) {
    return new Promise((resolve, reject) => {
      const auth = getAuth();

      createUserWithEmailAndPassword(
        auth,
        credential.email,
        credential.password
      )
        .then((data: any) => {
          commit("setToken", data.user.accessToken);
          AuthToken.setToken(data.user.accessToken);
          resolve(data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  },

  logout({ commit }: any) {
    return new Promise<void>((resolve) => {
      commit("removeToken");
      AuthToken.removeToken();
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
