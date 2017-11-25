


function min(a, b, c){
    var result = a;

    if(result > b){
        result = b;
    }

    if(result > c){
        result = c;
    }

    return result;
}


var res = min(-1, 10, 3);

alert(res);