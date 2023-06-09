import {ActionTree, GetterTree, MutationTree} from "vuex";
import {sample} from "@/api/result";

interface keyValue {
  key:string,
  value:string
}
interface httpsReq {
  endpoint:string,
  method:string | null,
  keyValue:any[],
  res:string
}

interface State {
  isState:string,
  actionSelectedList:[],
  confirmedActions:string[],
  selectedAction:string,
  inActiveAction:string[],
  userTagsList:[],
  httpsRequestData:httpsReq
}

const reqData = {
  endpoint:'',
  method:null,
  keyValue:[
    {key:'',value:''}
  ],
  res:''
}

const state: State = {
  isState:'action',
  actionSelectedList:[],
  confirmedActions:[],
  selectedAction:'',
  userTagsList:[],
  inActiveAction:[],
  httpsRequestData:reqData
}

const mutations = <MutationTree<State>>{
  setIsState(state,payload:string){
    state.isState=payload
  },
  setActionSelectedList(state,payload:[]){
    state.actionSelectedList=payload
  },
  setUserTagsList(state,payload:[]){
    console.log('----')
    state.userTagsList=payload
  },
  setEndpoint(state,payload:string){
    state.httpsRequestData.endpoint=payload
  },
  setConfirmedActions(state,payload:[]){
    state.confirmedActions=payload
  },
  setSelectedAction(state,payload:string){
    state.selectedAction=payload
  }
};

export const actions = <ActionTree<State, any>>{
  pushInActiveAction({commit,state}, item) {
    state.inActiveAction.push(item);
    commit('setIsState','action')
  },
  confirmedActions({commit,state}, item) {
    commit('setConfirmedActions',item)
    commit('setIsState','action')
  }
};

const getters = <GetterTree<State, any>>{
  getSample(state, getters) {
    return state.isState
  },
}

const search = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default search;