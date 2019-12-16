export default {
  namespace: 'common',
  state: {
    loading: false
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    },
  },

}