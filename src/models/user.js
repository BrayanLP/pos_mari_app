export const user = {
  state: {
    info: {}
  }, 
  reducers: {
    // handle state changes with pure functions
    saveData(state, payload) {
       return state['info'] = payload;
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async getUser(data){
      this.saveData(data)
    },
  }),
};