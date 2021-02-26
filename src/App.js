import React from 'react';

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendsList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

import user from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
