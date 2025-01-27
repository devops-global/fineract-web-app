import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'mifosx-external-identifier',
  templateUrl: './external-identifier.component.html',
  styleUrls: ['./external-identifier.component.scss']
})
export class ExternalIdentifierComponent implements OnInit {
  @Input() externalId: string;
  @Input() completed = false;
  @Input() display = 'right';

  iconVisible = false;
  displayL = false;
  displayR = true;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.displayL = (this.display === 'left');
    this.displayR = (this.display === 'right');
  }

  isLongValue(): boolean {
    if (this.externalId == null) {
      return false;
    }
    return (this.externalId.length > 15);
  }

  copyValue(): void {
    this.clipboard.copy(this.externalId);
  }

  mouseEnter() {
    this.iconVisible = true;
  }

  mouseLeave() {
    this.iconVisible = false;
  }
}
