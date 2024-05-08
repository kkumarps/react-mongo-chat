import { create } from "zustand";

import useFetch from "./useFetch";

const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: function (id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        set({ currentUser: null, isLoading: false });
        reject();
        //
      } else {
        useFetch(`https://fakestoreapi.com/users/${id}`, { method: "GET" })
          .then((data) => {
            set({ currentUser: data, isLoading: false });
            resolve();
          })
          .catch((err) => {
            set({ currentUser: null, isLoading: false });
            reject();
          });
      }
    });
  },
}));

export default useUserStore;
