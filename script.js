var buget_val;
var expense_val;
function user_budget(){
    buget_val = document.getElementById("budget").value

    if(buget_val <= 0 || buget_val == undefined){
        alert("Enter an amount in your budget");
        return
    }
    else{
        document.getElementById("pocket").innerHTML= buget_val
    }
}

function calculate(){
    expense_val = document.getElementById("expense").value

    if(expense_val <= 0 || expense_val == undefined){
        alert("Enter an amount in your budget");
        return
    }
    else if(expense_val > buget_val ||  buget_val == undefined){
        alert("It is not in your budget");
        return
    }
    else{
        bal = buget_val-expense_val
        document.getElementById("pocket").innerHTML= bal
        document.getElementById("spent").innerHTML= expense_val

        document.getElementById("budget").value = bal;

    }
}
