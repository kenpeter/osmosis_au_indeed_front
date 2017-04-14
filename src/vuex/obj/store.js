// receive product and add to cart
import {
  RECEIVE_OBJS
} from '../mutation-types'

// products has a state all.
// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  // now receive products
  // then we have state and products
  // state.all, assign products.
  [RECEIVE_OBJS] (state, objs) {
    state.all = objs
  }
}

// export state and setters
export default {
  state,
  mutations
}
