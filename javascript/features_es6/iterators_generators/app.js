// Iterator Example
/*
function nameIterator(names) {
  let nextIndex = 0;
  return {
      next : function(){
        return nextIndex < names.length ?
        { value : names[nextIndex++], done: false} :
        { done : true }
      }
  };
}

//Create an array of names
const namesArr = ['John','Doe','Jack','Hill'];
//Init iterator and pass in names array
const names = nameIterator(namesArr);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
*/

/*
//Generator
function* sayNames(){
    yield 'Jack';
    yield 'Jill';
    yield 'John';
    yield 'Jess';
}
const name = sayNames();
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
*/

//Id creater
function* createIds(){
    let index = 0;
    while(true){
        yield index++;
    }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
