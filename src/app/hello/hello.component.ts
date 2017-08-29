import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  title = '';
  message: any = {};
  messages: any = [];

  constructor() {
  }

  ngOnInit() {
    this.title = 'hello works!';
    this.message.remember = true;
    this.messages = [
      { title : '제목 입니다.1', content : '내가 할일 입니다.'},
      { title : '제목 입니다.2', content : '내용입니다.'},
      { title : '제목 입니다.3', content : '내용'}
    ];

  }

  doSubmit(event) {
    event.preventDefault();

    if (!this.message.title) {
      alert('제목을 입력 해 주세요');
      return;
    }

    if (!this.message.content) {
      alert('내용을 입력 해 주세요');
      return;
    }

    if (!confirm('등록 하시겠습니까?')) {
      return;
    }

    this.messages.push({
      title : this.message.title,
      content : this.message.content
    });

    this.message = {};
  }

  reset(event) {
    event.preventDefault();
    this.message = {};
    return;
  }
}
