import React from 'react'
import { PageContainer,Navbar,Sidebar,PageWrapper } from '../../Components'
import LinkedAccountCard from '../../Components/LinkedAccountCard/LinkedAccountCard'

const Dashboard = () => {
  return (
  <PageContainer>
     <Sidebar />
     <PageWrapper>
     <Navbar />
     <LinkedAccountCard />
     </PageWrapper>
  </PageContainer>
  )
}

export default Dashboard