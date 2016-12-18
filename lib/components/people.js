// class Node {
//   constructor(options) {
//     this.firstName = options.firstName;
//     this.lastName = options.lastName;
//     this.fullName = `${options.firstName} ${options.lastName}`;
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

  const DorothyTerwilliger = new Node(
    {
      firstName: 'Dorothy',
      lastName: 'Terwilliger',
      gender: 'F',
      maiden: 'Feemster',
      childOldest: SusanTerwilliger,
      // childSecondOldest: CurtTerwilliger;
      spouse1: GordonTerwilliger,
    });

;


  const GordonTerwilliger = new Node(
    {
      firstName: 'Gordon',
      lastName: 'Terwilliger',
      gender: 'M',
      childOldest: SusanTerwilliger,
      // childSecondOldest: CurtTerwilliger;
      spouse1: DorothyTerwilliger,
    });

const SusanTerwilliger = new Node(
  {
    firstName: 'Susan',
    lastName: 'Terwilliger',
    gender: 'F',
    maiden: 'Terwilliger',
    mother: DorothyTerwilliger,
    father: GordonTerwilliger,
    childOldest: GrahamNessler,
    childSecondOldest: ReedNessler,
    childThirdOldest: LauraNessler,
    spouse1: CraigNessler,
  });

const CraigNessler = new Node(
  {
    firstName: 'Craig',
    lastName: 'Nessler',
    gender: 'M',
    // mother: EthelNessler,
    // father: ThomasNesslerI,
    childOldest: GrahamNessler,
    childSecondOldest: ReedNessler,
    childThirdOldest: LauraNessler,
    spouse1: SusanTerwilliger,
  });

const ReedNessler = new Node(
  {
    firstName: 'Reed',
    lastName: 'Nessler',
    gender: 'M',
    mother: SusanTerwilliger,
    father: CraigNessler,
  });

  const GrahamNessler = new Node(
    {
    firstName: 'Graham',
    lastName: 'Nessler',
    gender: 'M',
    mother: SusanTerwilliger,
    father: CraigNessler,
    // spouse1: NatalieCottonNessler,
    });

  const LauraNessler = new Node(
    {
    firstName: 'Laura',
    lastName: 'Nessler',
    gender: 'F',
    mother: SusanTerwilliger,
    father: CraigNessler,
    });
