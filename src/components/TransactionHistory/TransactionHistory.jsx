import PropTypes from 'prop-types';
import {
  Table,
  TableHeadCell,
  TableBodyCell,
  TableBodyRow,
} from 'components/TransactionHistory/TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <TableBodyRow key={id}>
              <TableBodyCell>{type}</TableBodyCell>
              <TableBodyCell>{amount}</TableBodyCell>
              <TableBodyCell>{currency}</TableBodyCell>
            </TableBodyRow>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
