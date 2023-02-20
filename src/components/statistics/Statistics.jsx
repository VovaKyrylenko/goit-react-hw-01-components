import PropTypes from 'prop-types';
import {
  StatisticsBlock,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPerc,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  let random;
  return (
    <StatisticsBlock className="statistics">
      {title && <StatisticsTitle className="title">{title}</StatisticsTitle>}
      <StatisticsList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            className="item"
            style={{ backgroundColor: (random = randomColor()) }}
          >
            <StatisticsLabel
              style={{ color: contrastColor(random) }}
              className="label"
            >
              {label}
            </StatisticsLabel>
            <StatisticsPerc
              style={{ color: contrastColor(random) }}
              className="percentage"
            >
              {percentage}%
            </StatisticsPerc>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsBlock>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

function contrastColor(random) {
  const [r, g, b] = random
    .substring(4, random.length - 1)
    .replace(/ /g, '')
    .split(',');
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}

export default Statistics;
