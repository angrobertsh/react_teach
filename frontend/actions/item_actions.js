// namespace of things that we want our frontend to do

// update filters

// make a button that gets the items when we click on it

export const getItems = () => ({
  type: "GET_ITEMS"
})

export const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS",
  items: items
})
