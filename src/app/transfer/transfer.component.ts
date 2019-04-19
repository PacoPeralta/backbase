import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {INFO} from '../data.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  money = 5824.76;
  userAccount = `Free Checking(4692) - $${this.money}`;
  transferForm: FormGroup;
  showTransferDetails = false;


  ngOnInit(): void {
    this.createFormController();
  }

  createFormController() {
    this.transferForm = new FormGroup({
      from_account: new FormControl('',
        [Validators.required, this.lowBalance.bind(this)]),
      to_account: new FormControl('',
        Validators.required),
      amount: new FormControl('',
        [Validators.required, Validators.max(this.money + 500)])
    });
    this.transferForm.get('from_account').setValue(this.userAccount);
  }

  onSubmit() {
    if (this.transferForm.valid) {
      this.showTransferDetails = true;
    }
  }

  validInput(controller: string): boolean {
    return !this.transferForm.get(controller).valid &&
      this.transferForm.get(controller).touched;
  }

  lowBalance(): {[s: string]: boolean} {
    return this.money < -500 ?
      {lowMoneyBalance: true} : null;
  }

  getAmountError(): string {
    return this.transferForm.get('amount').hasError('max') ?
      `Oops! this amount pass the $ -500.00 balance allowed, please try another amount` :
      `Don't you want to send some money?`;
  }

  confirmTransfer() {
    const randomNumber = Math.floor(Math.random() * Math.floor(9));
    const data = {
      amount: '',
      categoryCode: INFO.data[randomNumber].categoryCode,
      merchant: '',
      merchantLogo: INFO.data[randomNumber].merchantLogo,
      transactionDate: Number(new Date()),
      transactionType: INFO.data[randomNumber].transactionType
    };
    data.amount = this.transferForm.get('amount').value;
    data.merchant = this.transferForm.get('to_account').value;
    INFO.data.unshift(data);
    this.money = this.money - this.transferForm.value.amount;
    this.createFormController();
    this.transferForm.get('from_account')
      .setValue(`Free Checking(4692) - $${this.money.toFixed(2)}`);
    this.closeTransferDetails();
  }

  closeTransferDetails() {
    this.showTransferDetails = false;
  }
}
