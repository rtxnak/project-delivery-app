const INITIAL_STATE = {
  products: [],
};

const VALOR = -1;

const product = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'UPDATE': {
    const index = state.products.findIndex((prod) => prod.id === action.obj.id);

    if (index === VALOR) return { ...state, products: [...state.products, action.obj] };

    const newArray = [...state.products];

    newArray[index] = { ...action.obj };

    return { ...state, products: newArray };
  }
  case 'REMOVE': {
    return { ...state, products: action.payload };
  }

  default: return state;
  }
};

export default product;
