import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listEmpty: true,
  inputValue: '',
  itemList: [],
  filteredList: [],
  activeBtn: 'All',
}

const slice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    valueInput: (state, action) => {
      state.inputValue = action.payload
    },
    submitValue: (state, action) => {
      state.itemList = [...state.itemList, action.payload]
      state.inputValue = ''
    },
    deleteItem: (state, action) => {
      state.itemList = state.itemList.filter(
        (value) => value.id !== action.payload
      )
    },
    toggleActive: (state, action) => {
      const findItem = state.itemList.find(
        (value) => value.id === action.payload
      )
      if (!findItem.completed) {
        findItem.completed = true
      } else {
        findItem.completed = false
      }
    },
    increaseCount: (state, action) => {
      const findItem = state.itemList.find(
        (value) => value.id === action.payload
      )
      if (findItem) {
        findItem.count = findItem.count + 1
      }
    },
    decreaseCount: (state, action) => {
      const findItem = state.itemList.find(
        (value) => value.id === action.payload
      )
      if (findItem) {
        findItem.count = findItem.count - 1
      }
    },
    getFilteredList: (state) => {
      state.filteredList = [...state.itemList]
    },
    filterItems: (state, action) => {
      let newItems
      if (action.payload === 'All') {
        state.activeBtn = 'All'
        newItems = [...state.itemList]
      } else if (action.payload === 'Active') {
        state.activeBtn = 'Active'
        newItems = state.itemList.filter((value) => !value.completed)
      } else if (action.payload === 'Completed') {
        state.activeBtn = 'Completed'
        newItems = state.itemList.filter((value) => value.completed)
      }
      state.filteredList = newItems
    },
    clearList: (state) => {
      state.itemList = []
      state.activeBtn = 'All'
    },
  },
})

export const {
  valueInput,
  submitValue,
  deleteItem,
  toggleActive,
  increaseCount,
  decreaseCount,
  getFilteredList,
  filterItems,
  clearList,
} = slice.actions

export default slice.reducer
