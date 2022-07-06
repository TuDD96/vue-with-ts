import { State } from "../state/types";

export default {
  setLoading: (state: State, value: boolean) => {
    state.loading = value;
  }
};