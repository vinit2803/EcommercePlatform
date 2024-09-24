const initialState = {
  cartItems: [], // Ensure cartItems is defined
};

const cartReducers = (state = initialState, action) => {
  // console.log("Reducer state:", state); // Log the current state in the reducer
  // console.log("Action received:", action); // Log the received action

  switch (action.type) {
    case "INCREMENT":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "DECREMENT":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducers;

// const initialState = {
//   count: 0,
//   cartItems: [],
// };

// const cartReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       // return { ...state, count: state.count + 1 };
//       const item = action.payload;
//       const existItem = state.cartItems.find((x) => x._id === item._id);

//       if (existItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((x) =>
//             x._id === existItem._id ? item : x
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }

//     case "DECREMENT":
//       // return { ...state, count: state.count - 1 };
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((x) => x._id !== action.payload),
//       };

//     default:
//       return state;
//   }
// };

// export default cartReducers;
