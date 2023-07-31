import React from 'react'
import { TopSection,BottomSection, Sidebar,PageContainer,PageWrapper, Navbar} from '../../Components'

const BudgetPage = () => {
  return (

  <>
  <PageContainer>
  <Sidebar/>
  <PageWrapper>
  <Navbar/>
  <TopSection/>
  <BottomSection/>
  </PageWrapper>
  </PageContainer>
  </>

  )
}

export default BudgetPage