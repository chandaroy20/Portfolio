import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-questions',
  templateUrl: './interview-questions.component.html',
  styleUrls: ['./interview-questions.component.css']
})
export class InterviewQuestionsComponent implements OnInit {
  questions=[];
  selectedItem="";
  topics=["Node.js","Angular","MongoDB","Java","Others"]
  constructor() { }

  ngOnInit() {
    this.selectedItem="Node.js";
    this.questions=[
      {
        "question":"Write a function to reverse a string",
        "answer":""
      },
      {
        "question":"Write a function to check if a string is a palindrome",
        "answer":""
      },
      {
        "question":"How is abstract behavior achieved in javascript? ",
        "answer":""
      },
      {
        "question":"How to implement inheritance in javascript?",
        "answer":""
      },
      {
        "question":"Why is nodejs used ?",
        "answer":""
      },
      {
        "question":"alert(parseInt(010)); alert(+010); alert(+”010”);",
        "answer":""
      },
      {
        "question":"How will u scale nodejs application normally as well as heroku?",
        "answer":""
      },
      {
        "question":"Explain closure in JavaScript.",
        "answer":""
      },
      {
        "question":"Differences in ES5 & ES6.",
        "answer":""
      },
      {
        "question":"Why nodejs (compared to java)?",
        "answer":""
      },
      {
        "question":"Compare let and var keywords.",
        "answer":""
      },
      {
        "question":"How to pass data from a route to  another in express.js?",
        "answer":""
      },
      {
        "question":"Compare setImmediate, setTimeout, process.nextTick, setInterval.",
        "answer":""
      },
      {
        "question":"How to check how much time a function has taken in node.js?",
        "answer":""
      },
      {
        "question":"What is callback hell and how to deal with it?",
        "answer":""
      },
      {
        "question":"",
        "answer":""
      },
      {
        "question":"",
        "answer":""
      },
      {
        "question":"",
        "answer":""
      },
      {
        "question":"",
        "answer":""
      }

    ];

  }
  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
  }
}
