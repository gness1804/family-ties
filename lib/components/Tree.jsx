import React, { Component } from 'react';

class Tree extends Component {

  addNewPerson() {
    const person =
      {
        masterId: `${this.firstName.value}${this.lastName.value}`,
        firstName: this.firstName.value || '',
        lastName: this.lastName.value || '',
        fullName: `${this.firstName.value} ${this.lastName.value}`,
        gender: this.gender.value || '',
        maiden: this.maiden.value || '',
        mother: this.mother.value || '',
        father: this.father.value || '',
        stepMother1: this.stepMother1.value || '',
        stepMother2: this.stepMother2.value || '',
        stepFather1: this.stepFather1.value || '',
        stepFather2: this.stepFather2.value || '',
        childOldest: this.childOldest.value || '',
        childSecondOldest: this.childSecondOldest.value || '',
        childThirdOldest: this.childThirdOldest.value || '',
        childFourthOldest: this.childFourthOldest.value || '',
        childFifthOldest: this.childFifthOldest.value || '',
        childSixthOldest: this.childSixthOldest.value || '',
        childOther: this.childOther.value || '',
        spouse1: this.spouse1.value || '',
        spouse2: this.spouse2.value || '',
        spouse3: this.spouse3.value || '',
        spouseOther: this.spouseOther.value || '',
      };
    // console.log(person);
  }

  render() {


    // class Node {
    //   constructor(options) {
    //     this.masterId = options.masterId;
    //     this.firstName = options.firstName;
    //     this.lastName = options.lastName;
    //     this.fullName = options.fullName;
    //     this.gender = options.gender;
    //     this.maiden = options.maiden;
    //     this.mother = options.mother;
    //     this.father = options.father;
    //     this.stepMother1 = options.stepMother1;
    //     this.stepMother2 = options.stepMother2;
    //     this.stepFather1 = options.stepFather1;
    //     this.stepFather2 = options.stepFather2;
    //     this.childOldest = options.childOldest;
    //     this.childSecondOldest = options.childSecondOldest;
    //     this.childThirdOldest = options.childThirdOldest;
    //     this.childFourthOldest = options.childFourthOldest;
    //     this.childFifthOldest = options.childFifthOldest;
    //     this.childSixthOldest = options.childSixthOldest;
    //     this.childOther = options.childOther;
    //     this.spouse1 = options.spouse1;
    //     this.spouse2 = options.spouse2;
    //     this.spouse3 = options.spouse3;
    //     this.spouseOther = options.spouseOther;
    //   }
    // }

    return (
      <div>
        <input placeholder="First Name" ref={(c) => { this.firstName = c; }} />
        <input placeholder="Last Name" ref={(c) => { this.lastName = c; }} />
        <input placeholder="Gender" ref={(c) => { this.gender = c; }} />
        <input placeholder="Maiden" ref={(c) => { this.maiden = c; }} />
        <input placeholder="Mother (First and Last)" ref={(c) => { this.mother = c; }} />
        <input placeholder="Father (First and Last)" ref={(c) => { this.father = c; }} />
        <input placeholder="Stepmother 1 (First and Last)" ref={(c) => { this.stepMother1 = c; }} />
        <input placeholder="Stepmother 2 (First and Last)" ref={(c) => { this.stepMother2 = c; }} />
        <input placeholder="Stepfather1 (First and Last)" ref={(c) => { this.stepFather1 = c; }} />
        <input placeholder="Stepfather 2 (First and Last)" ref={(c) => { this.stepFather2 = c; }} />
        <input placeholder="Oldest Child (First and Last)" ref={(c) => { this.childOldest = c; }} />
        <input placeholder="Second Oldest Child (First and Last)" ref={(c) => { this.childSecondOldest = c; }} />
        <input placeholder="Third Oldest Child (First and Last)" ref={(c) => { this.childThirdOldest = c; }} />
        <input placeholder="Fourth Oldest Child (First and Last)" ref={(c) => { this.childFourthOldest = c; }} />
        <input placeholder="Fifth Oldest Child (First and Last)" ref={(c) => { this.childFifthOldest = c; }} />
        <input placeholder="Sixth Oldest Child (First and Last)" ref={(c) => { this.childSixthOldest = c; }} />
        <input placeholder="Other Child (First and Last)" ref={(c) => { this.childOther = c; }} />
        <input placeholder="Spouse 1 (First and Last)" ref={(c) => { this.spouse1 = c; }} />
        <input placeholder="Spouse 2 (First and Last)" ref={(c) => { this.spouse2 = c; }} />
        <input placeholder="Spouse 3 (First and Last)" ref={(c) => { this.spouse3 = c; }} />
        <input placeholder="Other Spouse (First and Last)" ref={(c) => { this.spouseOther = c; }} />
        <button onClick={ () => { this.addNewPerson() } }>Submit</button>
      </div>
    );
  }

}


export default Tree;
