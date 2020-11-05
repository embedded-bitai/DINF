export default {
  loginInfo (state) {
    return state.weight
  },
  isLogedin (state) {
    return state.accessToken.length > 0 && !!state.myinfo
  }
}
