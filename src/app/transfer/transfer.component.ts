import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  money = 5824.76;
  userAccount = `Free Checking(4692) - $${this.money}`;
  transferForm: FormGroup;

  ngOnInit(): void {
    this.transferForm = new FormGroup({
      from_account: new FormControl('', [Validators.required, this.lowBalance.bind(this)]),
      to_account: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    });
    this.transferForm.get('from_account').setValue(this.userAccount);
  }

  onSubmit() {
    this.money = this.money - this.transferForm.value.amount;
    this.transferForm.get('from_account')
      .setValue(`Free Checking(4692) - $${this.money.toFixed(2)}`);
  }

  validInput(controller: string): boolean {
    return !this.transferForm.get(controller).valid &&
      this.transferForm.get(controller).touched;
  }

  lowBalance(): {[s: string]: boolean} {
    return this.money < -500 ?
      {lowMoneyBalance: true} : null;
  }
}
