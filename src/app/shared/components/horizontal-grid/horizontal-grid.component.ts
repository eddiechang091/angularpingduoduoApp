import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emoji, Confirmable } from '../../decorator';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  private _username = '';
  @Output() usernameChange = new EventEmitter();
  @Emoji() result = '您好';
  constructor() { }

  ngOnInit() {
  }

  @Input()
  public get userName():string{
    return this._username;
  }
  public set userName(value:string){
    this._username = value;
    this.usernameChange.emit(this._username);
  }

  @Confirmable('已经点击，是否确认执行？')
  handleClick(){
    console.log('点击已执行');
  }

}
