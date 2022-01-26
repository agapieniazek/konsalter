const Reducer = (state, action) => {
  switch ( action.type ){
    case "SWITCH_LANG":
      return{
        lang: !state.lang,
      };
      case "SWITCH_MENU":
        return{
          menu: !state.menu,
        }
    default:
        return
  }
};
 
export default Reducer;
