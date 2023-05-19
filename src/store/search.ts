import {ActionTree, GetterTree, MutationTree} from "vuex";
import {sample} from "@/api/result";

interface State {
  isAction:boolean,
  actionSelectedList:[],
  confirmedActions:string[]
}

const state: State = {
  isAction:false,
  actionSelectedList:[],
  confirmedActions:['Tag customer']
}

const mutations = <MutationTree<State>>{
  setIsAction(state,payload:boolean){
    state.isAction=payload
  },
  setActionSelectedList(state,payload:[]){
    state.actionSelectedList=payload
  },
  setConfirmedActions(state,payload:[]){
    state.confirmedActions=payload
  },
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