

function inputValue(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

function getBalance (){
    const elementBalance = document.getElementById("balance");
    const balance = elementBalance.innerText;
    console.log('Current Balance', Number(balance));
    return Number(balance)
}

function setBalance (value){
    const elementBalance = document.getElementById("balance");
    elementBalance.innerText = value;
}


// maching => hide => call and show

function showOnly(id){
    console.log('show only ');
    const cashout = document.getElementById("cashout");
    const addmoney = document.getElementById("addmoney");
    const transtion = document.getElementById("history");
    // console.log(`add money - ${addmoney} cashout - ${cashout}`);

    addmoney.classList.add('hidden')
    cashout.classList.add('hidden')
    transtion.classList.add('hidden')

    // id wala document ke show koro

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
};
