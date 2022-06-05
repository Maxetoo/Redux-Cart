import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Header, InputSection, MainList } from './Components'
import { getFilteredList } from './Slices/listSlice'
function App() {
  const { itemList } = useSelector((store) => store.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFilteredList())
  }, [itemList])
  return (
    <main className='main-app'>
      <Header />
      <InputSection />
      <MainList />
    </main>
  )
}

export default App
