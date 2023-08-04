import React from 'react'
import Expenses from '../../Components/Expense/Expense'
import { Navbar, PageContainer, PageWrapper, Sidebar } from '../../Components'

const ExpensePage = () => {
  return (
  <>
  <PageContainer>
     <Sidebar/>
     <PageWrapper>
     <Navbar/>
    <Expenses/>
     </PageWrapper>
  </PageContainer>
  
  </>
  )
}

export default ExpensePage