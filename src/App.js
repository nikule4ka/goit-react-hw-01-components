import React from "react";

import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";

import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";

import FriendList from "./components/friendsList/FriendList";
import friends from "./components/friendsList/friends.json";

import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./components/transactionHistory/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
