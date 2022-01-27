const Reducer = (state, action) => {
  switch ( action.type ){
    case "SWITCH_EN":
      return{
        lang: true,
        menu: state.menu,
      };
      case "SWITCH_PL":
        return{
          lang: false,
          menu: state.menu,
        };
      case "SWITCH_MENU":
        return{
          menu: !state.menu,
          lang: state.lang,
        }
    default:
        return
  }
};
 
export default Reducer;
