// Revealing module pattern
// approx same as standard pattern but instead of returning public things , it map to private method that you reveal

const itemCtrl = (function (){
    //sometimes we do see _ before private variables --> convention
    let _data = []; 

    function _add (item) {
        _data.push(item);
        console.log('Item added');
    }

    function _get(id){
        return _data.find( item => {
            return item.id == id;
        });
    }

    function _all() {
        return _data;
    }
    return {
        add : _add,
        get : _get,
        all : _all
    }
})();

itemCtrl.add({ id : 1 , name : 'John' });
itemCtrl.add({ id : 2 , name : 'Mark' });

console.log(itemCtrl.get(1));
console.log(itemCtrl.get(2));

console.log(itemCtrl.all());