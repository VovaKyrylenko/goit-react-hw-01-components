import styled from '@emotion/styled';
export const Image = styled.img``;
export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;
export const DescriptionText = styled.p`
  font-size: 16px;
  color: #999;
  margin: 0 0 5px 0;
`;

export const DescriptionImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const DescriptionName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 15px 0;
`;

export const Statistics = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
  }
`;

export const StatisticsLabel = styled.div`
  font-size: 16px;
  color: #999;
`;

export const StatisticsQuantity = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  border: 2px solid #e6e6e6;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;
