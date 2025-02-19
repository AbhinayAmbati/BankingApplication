import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {

  const isLoggedIn = await getLoggedInUser();
  
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={isLoggedIn?.name || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={isLoggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50},{currentBalance: 250.50}]}
      />
    </section>
  )
}

export default Home
