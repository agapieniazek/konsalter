const Reducer = (state, action) => {
  switch ( action.type ){
    case "SWITCH_LANG":
      return{
        lang: !state.lang,
      };
    default:
        return
  }
};
 
export default Reducer;
