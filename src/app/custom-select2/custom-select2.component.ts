import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-custom-select2',
  templateUrl: './custom-select2.component.html',
  styleUrls: ['./custom-select2.component.scss']
})
export class CustomeSelect2Component implements OnInit {

  @Input() title;
  @Input() show: boolean;
  @Input() dataSource: any;
  @Input() colName: any;
  @Input() hideBankNotListed: boolean;

  @Output() selectedBank = new EventEmitter();
  @Output() closecusModal = new EventEmitter();

  public activeModal = false;
  public searchString: any = '';
  public selectedItem: any = '';
  public noBank: any = '';
  public indexvalue = -1;
  public height = 0;
  public lHeight = 0;
  public uHeight = 0;
  public currentBanksList = [];

  constructor() { }

  ngOnInit() {
    this.currentBanksList = this.dataSource;
    if (this.show) {
      this.opencusModal();
    }
  }

  filterList() {
    this.currentBanksList = _.filter(this.dataSource, (o) => {
      return o[this.colName].toLowerCase().indexOf(this.searchString.toLowerCase()) > -1;
    });
  }
  selectedFunc(cuntry, index) {
    this.selectedItem = cuntry;
    this.selectedBank.emit(this.selectedItem);
    this.indexvalue = index;
    this.activeModal = false;
    document.getElementById('searchText').focus();
  }
  arrowFunc(e) {
    let totalheight;
    let colheight;
    colheight = document.getElementsByClassName('list-item')[0] ? document.getElementsByClassName('list-item')[0].clientHeight : null;
    totalheight = document.getElementsByClassName('bank-list')[0] ? document.getElementsByClassName('bank-list')[0].scrollHeight : null;
    if (e.keyCode === 40) {
      if (this.height < totalheight) {
        document.getElementsByClassName('bank-list')[0].scrollTo(0, this.height);
        this.height = this.height + colheight;
      }
      if (this.indexvalue >= (this.currentBanksList.length - 1)) {
        this.indexvalue = this.currentBanksList.length - 1;
      } else {
        this.indexvalue++;
      }
    } else if (e.keyCode === 38) {
      if (this.height >= 0) {
        document.getElementsByClassName('bank-list')[0].scrollTo(0, this.height);
        this.height = this.height - colheight;
      }
      if ((this.indexvalue <= (this.currentBanksList.length - 1)) && (this.indexvalue !== 0) && this.currentBanksList.length !== 0) {
        this.indexvalue--;
      } else {
        this.indexvalue = 0;
      }
    } else if (e.keyCode === 13 && this.indexvalue !== -1) {
      this.selectedItem = this.currentBanksList[this.indexvalue];
      this.selectedBank.emit(this.selectedItem);
      this.activeModal = false;
    }

  }
  opencusModal() {
    this.activeModal = true;
    setTimeout(() => {
      document.getElementById('searchText').focus();
    }, 0);
  }
  closecusmodal() {
    this.activeModal = false;
    this.searchString = '';
    this.currentBanksList = this.dataSource;
    this.closecusModal.emit(this.activeModal);
  }
}
