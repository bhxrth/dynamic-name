import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[
{"name":"Rahul","age":19,"photo":"https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png"},
{"name":"Kirmada","age":20,"photo":"https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png"},
{"name":"Athul","age":18,"photo":"https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png"},
{"name":"Nibin","age":20,"photo":"https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png"},
{"name":"Jishnu","age":19,"photo":"https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png"},
{"name":"Shaheen","age":18,"photo":"https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__340.png"}
]

}

