import PropTypes from 'prop-types';
import {
  Friends,
  FriendItem,
  FriendStatus,
  FriendAvavtar,
  FriendName,
} from './Friends.styled';
export default FriendList;

function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendAvavtar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendList, FriendListItem };
