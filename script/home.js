
const homeBtn = document.getElementById('home-btn').addEventListener('click', function(){

    const cashoutNumber = inputValue("cashout-number");

    if (cashoutNumber.length != 11) {
      alert("Invalid Number");
      return;
    }

    const cashoutAmount = inputValue("cashout-amount");
    console.log(cashoutAmount);

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);

    if(newBalance < 0){
        alert("Insufficient Balance");
        return
    }

    const cashoutPin = inputValue("cashout-pin");
    console.log(cashoutPin);
    
      if (cashoutPin === "1234") {
        alert("Successfull Caseout");
        console.log("New Balance", newBalance);
        setBalance(newBalance);

        // New Create Element
        const history = document.getElementById("history-container");

        const newElement = document.createElement("div");

        newElement.innerHTML = `
        <div class="bg-base-200 px-6 py-10">
            Cashout ${cashoutAmount} TAKA Successfull Account No: ${cashoutNumber} at ${new Date()}
        </div>`
        
        history.appendChild(newElement);

      } else {
        alert("Invalid Pin");
        return;
      }
});


// const homeBtn = document.getElementById('home-btn').addEventListener('click', function(){

//     // Agent Number validation
//     const agentNumber = document.getElementById("agent-number");
//     const numberValue = agentNumber.value;
//     console.log(numberValue);

    // if(numberValue.length != 11){
    //     alert('Invalid Number')
    //     return
    // }

//     // Agent Amount
//     const agentAmount = document.getElementById("agent-amount");
//     const amountValue = agentAmount.value;
//     console.log(amountValue);

//     // Agent valance
//     const mainValance = document.getElementById("balance");
//     const Valance = mainValance.innerText;
//     console.log(Valance)

//     // new Balance
//     const newBalance = Number(Valance) - Number(amountValue);
    
//     if(newBalance < 0){
//         alert('Invalid Number')
//         return
//     }
    
//     // agent pin number
//     const agentPin = document.getElementById("agent-pin");
//     const pin = agentPin.value;
//     console.log(pin);
    
    // if(pin === '1234'){
    //     alert('Successfull Caseout')
    //     console.log('New Balance', newBalance);
    //     mainValance.innerText = newBalance;
    // }
    // else{
    //     alert('Invalid Pin')
    //     return
    // }
// })
