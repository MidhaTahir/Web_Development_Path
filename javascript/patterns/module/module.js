// Basic Structure
//IFEE
/*
(function () {
        //!Declare Private variables and functions

    return {
        //!what we will return is public
        // !Declare Public variables and functions
    }

})();
*/

///////////

//Standard MODULE PATTERN
const UICtrl = (function () {
    let text = 'Hello World';
    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = text;
    }
    return {
        callChangeText : function(){
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();

// UICtrl.changeText(); //error coz its private i-e UICtrl.changeText is not a function

console.log(UICtrl.text); //undefined , as it is private