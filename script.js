function myAlert(element) {
    alert('You have clicked my tag!');
}

function submitHandler(event) {
    event.preventDefault();

    console.log(journalEntry.value);
    entries.innerHTML = 
    `
    <p>${journalEntry.value}</p> 
    ${entries.innerHTML}
    `
}