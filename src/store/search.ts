import {ActionTree, GetterTree, MutationTree} from "vuex";
import {sample} from "@/api/result";

interface State {
  isAction:boolean,
}

const state: State = {
  isAction:false,
}

const mutations = <MutationTree<State>>{
  setIsAction(state,payload:boolean){
    state.isAction=payload
  }
};

export const actions = <ActionTree<State, any>>{
  async sample({commit, state},) {
    const data = await sample()
  }
};

const getters = <GetterTree<State, any>>{
  getSample(state, getters) {
    return state.isAction
  },
}

const result = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default result;