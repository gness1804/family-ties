import React, { Component } from 'react';

class Tree extends Component {

  addNewPerson(Node) {
    const foo = new Node(
      {
        firstName: this.firstName.value || '',
        lastName: this.lastName.value || '',
        gender: this.gender.value || '',
        maiden: this.maiden.value || '',
      });
    // console.log(this.firstName.value);
    console.log(foo);
  }

  render() {


    class Node {
      constructor(options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.fullName = `${options.firstName} ${options.lastName}`;
        this.gender = options.gender;
        this.maiden = options.maiden;
        this.mother = options.mother;
        this.father = options.father;
        this.stepMother1 = options.stepMother1;
        this.stepMother2 = options.stepMother2;
        this.stepFather1 = options.stepFather1;
        this.stepFather2 = options.stepFather2;
        this.childOldest = options.childOldest;
        this.childSecondOldest = options.childSecondOldest;
        this.childThirdOldest = options.childThirdOldest;
        this.childFourthOldest = options.childFourthOldest;
        this.childFifthOldest = options.childFifthOldest;
        this.childSixthOldest = options.childSixthOldest;
        this.childOther = options.childOther;
        this.spouse1 = options.spouse1;
        this.spouse2 = options.spouse2;
        this.spouse3 = options.spouse3;
        this.spouseOther = options.spouseOther;
      }
    }

    const DorothyTerwilliger = new Node(
      {
        firstName: 'Dorothy',
        lastName: 'Terwilliger',
        gender: 'F',
        maiden: 'Feemster',
        // childOldest: SusanTerwilliger,
        // childSecondOldest: CurtTerwilliger;
        // spouse1: GordonTerwilliger,
      });

    return (
      <div>
        <input placeholder="First Name" ref={(c) => { this.firstName = c; }}/>
        <input placeholder="Last Name" ref={(c) => { this.lastName = c; }}/>
        <input placeholder="Gender" ref={(c) => { this.gender = c; }}/>
        <input placeholder="maiden" ref={(c) => { this.maiden = c; }}/>
        <button onClick={ () => { this.addNewPerson(Node) } }>Submit</button>
      </div>
    );
  }

}


export default Tree;
