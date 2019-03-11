import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-mobile-filter-list',
  templateUrl: './mobile-filter-list.component.html',
  styleUrls: ['./mobile-filter-list.component.scss']
})
export class MobileFilterListComponent implements OnInit {
  modalRef: BsModalRef;
  filterItems = ['First', 'Second', 'Third'];
  config = { animated: true, class: 'filter-modal' };
  tabs: any[] = [
    {
      title: this.filterItems[0],
      content: 'Dynamic content 1',
      customClass: 'customClass'
    },
    {
      title: this.filterItems[1],
      content: 'Dynamic content 2',
      customClass: 'customClass'
    },
    {
      title: this.filterItems[2],
      content: 'Dynamic content 3',
      customClass: 'customClass'
    }
  ];
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}
  openModal(filterModal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(filterModal, this.config);
  }
}