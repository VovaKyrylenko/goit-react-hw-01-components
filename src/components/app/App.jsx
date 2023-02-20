import { Profile } from '../profile/Profile.jsx';
import users from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import Statistics from 'components/statistics/Statistics.jsx';
import FriendList from 'components/friends/FriendsList.js';
import TransactionHistory from 'components/transactions/Transactions.js';

export const App = () => {
  return (
    <div>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        followers={users.stats.followers}
        likes={users.stats.likes}
        views={users.stats.views}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
