import PropTypes from 'prop-types';
import {
  DescriptionBlock,
  DescriptionText,
  DescriptionImg,
  DescriptionName,
  Statistics,
  StatisticsLabel,
  StatisticsQuantity,
  ProfileBlock,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileBlock className="profile">
      <DescriptionBlock>
        <DescriptionImg src={avatar} alt="User avatar" className="avatar" />
        <DescriptionName className="name">{username}</DescriptionName>
        <DescriptionText className="tag">@{tag}</DescriptionText>
        <DescriptionText className="location">{location}</DescriptionText>
      </DescriptionBlock>

      <Statistics className="stats">
        <li>
          <StatisticsLabel className="label">Followers</StatisticsLabel>
          <StatisticsQuantity className="quantity">
            {followers}
          </StatisticsQuantity>
        </li>
        <li>
          <StatisticsLabel className="label">Likes</StatisticsLabel>
          <StatisticsQuantity className="quantity">{likes}</StatisticsQuantity>
        </li>
        <li>
          <StatisticsLabel className="label">Views</StatisticsLabel>
          <StatisticsQuantity className="quantity">{views}</StatisticsQuantity>
        </li>
      </Statistics>
    </ProfileBlock>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
