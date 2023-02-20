import PropTypes from 'prop-types';
import {
  TransactionHead,
  TransactionTable,
  TableRow,
  TableDaughter,
} from './Transaction.styled';

function TransactionHistory({ transactions }) {
  return (
    <TransactionTable className="transaction-history">
      <thead>
        <tr>
          <TransactionHead>Type</TransactionHead>
          <TransactionHead>Amount</TransactionHead>
          <TransactionHead>Currency</TransactionHead>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <TableRow key={index}>
            <TableDaughter>{transaction.type}</TableDaughter>
            <TableDaughter>{transaction.amount}</TableDaughter>
            <TableDaughter>{transaction.currency}</TableDaughter>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
