import axios from 'axios';

const state = () => ({
  visitors: [],
  visitor: {},
})

const getters = {
  getVisitors(state) {
    console.log("Get visitors",state);
    return state.visitors;
  },

  getVisitor(state){
    return state.visitor;
  },

}

const mutations = {

  setVisitors(state, payload){
    console.log("Set Visitors",payload);
    state.visitors = payload;
  },


  setVisitor(state, payload){
    state.visitor = payload;
  },

  

}

const actions = {

  async fetchVisitors({commit}){
    let res = await axios.get(`http://localhost/visitorcounter/Display.php`);
    commit('setVisitors', res.data.Visitor_Count);
  },

/*   async deleteall({commit}){
    let res = await axios.get(`/deleteall.php`);
    commit('setVisitors', res.data);
  },
 */
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}