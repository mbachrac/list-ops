//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.values=list?list:[];
    // list?
    // this.values=list
    // :this.values=[];
    // throw new Error("Remove this statement and implement this function");
  }

  append(otherList) {
    // for(let i=0;i<otherList.values.length();i++){
    //   this.values=this.values+otherList.values[i]
    // }
    this.values=[...this.values,...otherList.values];
    return this;
    // throw new Error("Remove this statement and implement this function");
  }

  concat(bigList) {
    const newBigList=new List()
    for(let i=0;i<bigList.values.length;i++){
      newBigList.values=[...newBigList.values,...bigList.values[i].values]
    }
    // console.log(newBigList)
    this.values=[...this.values,...newBigList.values];
    return this;
    // throw new Error("Remove this statement and implement this function");
  }

  filter(callback) {
    const newArray=new List();
    for(let a in this.values){
      if(callback(this.values[a])){
        newArray.values.push(this.values[a])
      }
    }
    console.log(callback)
    console.log(this.values)
    console.log(newArray)
    return newArray;
    // throw new Error("Remove this statement and implement this function");
  }

  map() {
    throw new Error("Remove this statement and implement this function");
  }

  length() {
    throw new Error("Remove this statement and implement this function");
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}
