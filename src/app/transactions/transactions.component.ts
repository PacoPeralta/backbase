import { Component } from '@angular/core';
import {INFO} from '../data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactions = INFO.data;
  dateFilterOrder = 'desc';
  beneficiaryFilterOrder = 'desc';
  amountFilterOrder = 'desc';
  searchByTypeValue = '';

  sortString(key, order) {
    return (val1, val2) => {
      if (!val1.hasOwnProperty(key) || !val2.hasOwnProperty(key)) {
        return 0;
      }

      const val1TypeOf = (typeof val1[key] === 'string') ?
        val1[key].toUpperCase() : val1[key];
      const val2TypeOf = (typeof val2[key] === 'string') ?
        val2[key].toUpperCase() : val2[key];

      let comparison = 0;
      if (val1TypeOf > val2TypeOf) {
        comparison = 1;
      } else if (val1TypeOf < val2TypeOf) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  sortAmount() {
    this.dateFilterOrder === 'desc' ?
      this.transactions = this.transactions.sort((val1, val2) => Number(val1.amount) - Number(val2.amount)) :
      this.transactions = this.transactions.sort((val1, val2) => Number(val2.amount) - Number(val1.amount));
    this.dateFilterOrder = this.dateFilterOrder === 'desc' ? 'asc' : 'desc';
  }

  sortDate() {
    this.amountFilterOrder === 'desc' ?
      this.transactions = this.transactions.sort((val1, val2) =>
        val1.transactionDate - val2.transactionDate) :
      this.transactions = this.transactions.sort((val1, val2) =>
        val2.transactionDate - val1.transactionDate);
    this.amountFilterOrder = this.amountFilterOrder === 'desc' ? 'asc' : 'desc';
  }

  sortBeneficiary() {
    this.transactions = this.transactions.sort(this.sortString('merchant', this.beneficiaryFilterOrder));
    this.beneficiaryFilterOrder = this.beneficiaryFilterOrder === 'desc' ? 'asc' : 'desc';
  }

  searchByTyping(event: any) {
    const letter = event.target.value;
    const cloneInfo = [...INFO.data];
    this.transactions = cloneInfo.filter(
      transaction => transaction.merchant.toUpperCase().includes(letter.toUpperCase()));
  }

  searchByTypingReset() {
    this.searchByTypeValue = '';
    this.transactions = INFO.data;
  }
}
