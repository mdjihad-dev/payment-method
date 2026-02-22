document.getElementById("add-btn").addEventListener('click', function(){

    // select bank
    const selectBank = inputValue("select-bank");
    console.log(selectBank);

    if(selectBank == 'Select back'){
        alert('Please Select a Bank')
        return
    }

    // bank account number
    const bankAccountNumber = inputValue("account-number");
    if(bankAccountNumber.length !== 11){
        alert('Invalid Number')
        return
    }

    const addmoney = inputValue("add-money-number");
    const newBalane = getBalance() + Number(addmoney)

    // bank account pin
    const addPin = inputValue("add-money-pin");

    if(addPin === '1234'){
        alert(`Add Money Successfull ${selectBank} at ${new Date()}`);
        setBalance(newBalane)

        // New Create Element 
        const history = document.getElementById('history-container');

        const newElement = document.createElement('div');

        newElement.innerHTML = `
        <div class="bg-base-200 px-6 py-10">
            Add Money Successfull ${selectBank}, Account No: ${bankAccountNumber} at ${new Date()}
        </div>
        `;

        history.appendChild(newElement);
    }
    else{
        alert('Invaild Pin! Please try')
    }

    // document.getElementById("parent");
    // const addNewElement = document.createElement('div');
    // addNewElement.innerText =`<div id="transtion" class="bg-slate-300 p-8 rounded-xl"></div>`;
    // parent.appendChild(addNewElement);
});