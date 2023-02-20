import styled from '@emotion/styled';
export const TransactionTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const TransactionHead = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  background-color: #f6f6f6;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #f9f9f9;
  }

  :hover {
    background-color: #f6f6f6;
  }
`;

export const TableDaughter = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  :first-of-type {
    width: 40%;
  }
  :last-child {
    width: 20%;
  }
`;
