export function reducer(state, { type, payload }) {
  switch (type) {
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        order: state.order.filter((orderItem) => orderItem.id !== payload.id),
      };

    case "ADD_TO_CART": {
      const orderIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (orderIndex === -1) {
        const newItem = {
          ...payload,
          quantity: 1,
        };

        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (orderIndex === index) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.title,
      };
    }

    case "INCREASE_QUANTITY": {
      const newOrder = state.order.map((orderItem) => {
        if (orderItem.id === payload.id) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      return {
        ...state,
        order: newOrder,
      };
    }

    case "DECREASE_QUANTITY": {
      const newOrder = state.order.map((orderItem) => {
        if (orderItem.id === payload.id) {
          return {
            ...orderItem,
            quantity: orderItem.quantity - 1,
          };
        } else {
          return orderItem;
        }
      });

      return {
        ...state,
        order: newOrder,
      };
    }

    case "TOGGLE_SHOW_CART":
      return {
        ...state,
        showCart: !state.showCart,
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        products: payload || [],
        loading: false,
      };

    default:
      return state;
  }
}
