import { defineStore } from "pinia";

const useLoginStore = defineStore("login", {
  state: () => ({
    counter: 0
  }),
  actions: {
    changeCounter(num: number) {
      this.counter = num;
      // console.log(this);
    }
  },
  getters: {}
});
export default useLoginStore;
