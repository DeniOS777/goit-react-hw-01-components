import styled from 'styled-components';

export const Table = styled.table`
  border-spacing: 0;
  border: 1px solid #dedddd;
  border-radius: 5px;
  box-shadow: 0px 2px 0px #c5c4c4;
  overflow: hidden;
`;

export const TableHeadCell = styled.th`
  padding: 15px 0;
  width: 33%;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.4px;
  color: #ffffff;
  text-transform: uppercase;
  background-color: #42bdd6;

  &:nth-child(1) {
    padding-left: 89px;
    text-align: left;
  }

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

  &:nth-child(3n + 1) {
    text-transform: capitalize;
    padding-left: 89px;
    padding-right: 89px;
  }

  &:nth-child(3n + 2) {
    text-align: right;
    padding-left: 103px;
    padding-right: 103px;
  }

  &:nth-child(3n + 3) {
    text-align: center;
  }

  &:not(:last-child) {
    border-right: 1px solid #dedddd;
  }
`;
