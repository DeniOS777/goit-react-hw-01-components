import styled from 'styled-components';

export const Table = styled.table`
  border-spacing: 0;
  border: 1px solid #000000;
  border-radius: 10px;
  overflow: hidden;
`;

export const TableHeadCell = styled.th`
  padding: 15px 80px;
  width: 100px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.4px;
  color: #ffffff;
  text-transform: uppercase;
  background-color: #42bdd6;

  &:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
`;

export const TableBodyRow = styled.tr`
  &:nth-child(2n + 1) {
    background-color: #ffffff;
  }
`;

export const TableBodyCell = styled.td`
  padding: 15px 0;
  font-size: 16px;
  color: #82878d;

  &:not(:last-child) {
    border-right: 1px solid #82878d;
  }

  &:nth-child(3n + 3) {
    text-align: center;
  }

  &:nth-child(3n + 1) {
    text-transform: capitalize;
    padding-left: 100px;
    padding-right: 100px;
  }

  &:nth-child(3n + 2) {
    text-align: right;
    padding-left: 105px;
    padding-right: 105px;
  }
`;
