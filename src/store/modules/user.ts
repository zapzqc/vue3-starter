import { ILogin, login } from '@/services/user';

// 用常量替代 mutation 事件类型，当前模块所有mutation一目了然
const SET_ACCESSTOKEN = 'SET_ACCESSTOKEN';

// state
const userState = {
  accessToken: '',
};

// getters

// actions
const actions = {
  async login({ commit }:{commit:(mutation:string, arg:string)=>void}, userInfo:Record<string, unknown>):Promise<ILogin> {
    const { data } = await login(userInfo);
    commit(SET_ACCESSTOKEN, data.accessToken);
    return data;
  },
};

// mutations
const mutations = {
  [SET_ACCESSTOKEN](state:{accessToken:string}, accessToken:string) :void {
    state.accessToken = accessToken;
  },
};

export default {
  state: userState, actions, mutations,
};
