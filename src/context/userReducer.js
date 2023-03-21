const UserReducer = (state, action) => {
    console.log(action,"ACtiON")
    switch (action.type) {
      case "REMOVE": {
        return {
          userDetails: null,
        };
      }
      case "SAVE": {
        return {
          userDetails: action.payload,
        };
      }
      case "SHOWLOGIN":{
        return{
          showLogin:true
        }
      }
      case "HIDELOGIN":{
        return{
          showLogin:false
        }
      }
      default:
        return state;
    }
  };
  
  export default UserReducer;
  