
//Put functions that may need to be shared across multiple components here.

//These functions should not use this.props or this.state since it is unknown what the execution context will be. They should not refer to external libraries or global variables (except for fn itself). They should not be used to setState.

//Pass in props or state as arguments to the function. Return values and use React component methods to setState or pass props.

// fn is added as a global variable so it doesn't need to be imported separately into each component.

const fn = {};

//Use in the contructor to bind class functions by name
fn.bindFunctions = function (_this, funcNamesArr) {
    for (let i = 0; i < funcNamesArr.length; i++) {

        const funcName = funcNamesArr[i];
        // console.log('function', _this[funcName]);
        _this[funcName] = _this[funcName].bind(_this)
    }
}


fn.listItemsToStringWithAnd = function (list) {
    const readyToJoin = list.map((item, index, list) => {
        if (index === list.length - 2) {
            return item + ' and ';
        } else if (index === list.length - 1) {
            return item;
        } else {
            return item + ', '
        }
    });

    return readyToJoin.join('');
}

fn.isPostalCode = function (string) { //Tests if a string is a postal code. Works with hypens and spaces.
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if (string.trim().match(regex)) {
        return true;
    } else {
        return false;
    } ;
}


//Better method of rounding to a given number of decimals. It ensures that edge cases don't round the wrong direction.
fn.roundToXDecimalPlaces = function (number, numberOfDecimalPlaces) {
    return Number(Math.round(number+'e'+numberOfDecimalPlaces)+'e-'+numberOfDecimalPlaces);
}



//Returns the dimensions of a specific HTML element
fn.getDimensions = function (element) {
        if (element) {
            const boundingRect = element.getBoundingClientRect();
            const {height,width} =  boundingRect;
            return {height,width};
        } else { //Gives an placeholder object in case element is not initialized yet
            return {width: 0, height: 0}
        }
}

export default fn;