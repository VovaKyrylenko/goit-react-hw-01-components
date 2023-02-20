import styled from '@emotion/styled';

export const StatisticsBlock = styled.section`
  margin: 50px auto;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StatisticsTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 200px;
  margin: 0 10px;
  text-align: center;
  transition: all 0.3s ease;
`;

export const StatisticsLabel = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const StatisticsPerc = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #06c5d5;
`;
