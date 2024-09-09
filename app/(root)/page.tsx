import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const page = () => {


  const loggedIn = { firstName :' Fares'}
  return (
    <div>
      <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
              <HeaderBox
              type = "greeting"
              title="welcome"
              user= {loggedIn?.firstName || 'Guest'}
              subtext="Acces and manage your account and transactions efficently."
              />


              <TotalBalanceBox
              accounts ={[]}
              totalBanks={2}
              totalCurrentBalance={15245}
              />

          </header>
        </div>
      </section>
    </div>
  )
}

export default page
