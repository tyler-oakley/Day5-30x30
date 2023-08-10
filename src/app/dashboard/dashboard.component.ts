import { Component } from '@angular/core';
import { CHILDREN } from './mock-data';
import { Child } from '../child';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  santaList = CHILDREN;
  currentChild = new Child('', '', false);

  saveChild() {

    // boolean to tell if adding new child or saving existing child info
    let alreadyExists = false;

    for (let child of this.santaList) {
      if (child.name == this.currentChild.name) {
        alreadyExists = true;
      }
    }

    if (alreadyExists) {
      alert("Info for " + this.currentChild.name + " saved.");
    }
    else {
      this.santaList.push(this.currentChild);
    }
    this.clearCurrent();
  }
  
  childSelected(selectedChild: Child) {
    this.currentChild = selectedChild;
  }

  deleteChild(childToDelete: Child) {
    const children = [...this.santaList];
    this.santaList = children.filter(child => child.name !== childToDelete.name);
    this.clearCurrent();
  }

  clearCurrent() {
    this.currentChild = new Child('', '', false);
  }
}
