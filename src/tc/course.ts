interface ICourse{
  id:number;
  name:string;
  description:string;
  noOfSemester:number;
}

class Course implements ICourse{
  id:number;
  name:string;
  description:string;
  noOfSemester:number;

  constructor(public identifyier:number, public coursrName:string, public desc:string, public semestercount:number){
    this.id = identifyier;
    this.name = coursrName;
    this.desc = desc;
    this.noOfSemester = semestercount;
  }
}
