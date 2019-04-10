import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  path="../../assets/images/";
  images=["node.png","mongo.png","angular.png","express.png","redis.png","mysql.png","socket.png","html5.png","git.png","css3.png","bootstrap.png","java.png"];
  constructor() { }

  ngOnInit() {
  }

}
