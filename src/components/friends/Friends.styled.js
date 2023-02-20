import styled from '@emotion/styled';

export const Friends = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
  :last-child {
    border-bottom: none;
  }
`;

export const FriendStatus = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 12px;
  ${({ status }) =>
    status === true ? 'background-color: green;' : 'background-color: red;'}
`;

export const FriendAvavtar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const FriendName = styled.p`
  font-weight: bold;
`;
