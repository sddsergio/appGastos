const transactionForm = document.getElementById("transactionForm");

transactionForm.addEventListener("submit", function(event){
        event.preventDefault();
        if (transactionForm.price.value > 0) {
            let transactionFormData = new FormData(transactionForm);
            let transactionObj = convertFormDataToObj(transactionFormData);
            console.log(transactionObj)
            saveTransactionObj(transactionObj);
            insertRowTable(transactionObj);
            transactionForm.reset()
        }
        else{
            alert("Monto ignresado no es correcto");
        }
    })

document.addEventListener("DOMContentLoaded", function(event) {
    draw_category();
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
    transactionObjArr.forEach(function(arrayElement) {
    insertRowTable(arrayElement)
    })
})

function getNewTransactionId() {
    let lastTransactionId = localStorage.getItem("lastTransactionId") || "-1";
    let newTransactionId = JSON.parse(lastTransactionId) + 1;
    localStorage.setItem("lastTransactionId", JSON.stringify(newTransactionId));
    return newTransactionId;
}

function convertFormDataToObj(transactionFormData) {
    let typeSelector = transactionFormData.get("typeSelector");
    let description = transactionFormData.get("description");
    let price = transactionFormData.get("price");
    let category = transactionFormData.get("category");
    let transactionId = getNewTransactionId();
    return{
        "typeSelector": typeSelector,
        "description": description,
        "price": price,
        "category": category,
        "transactionId": transactionId
    }
}

function insertRowTable(transactionObj) {
        let transactionTableRef = document.getElementById("transactionTable");
        let newTypeRowRef = transactionTableRef.insertRow(-1);//ingreso una fila al final
        newTypeRowRef.setAttribute("data-transaction-id", transactionObj["transactionId"]);
        
        let newTypeCellRef = newTypeRowRef.insertCell(0);//ingreso una celda en la posicion(0)
        newTypeCellRef.textContent = transactionObj["typeSelector"]//le agrego un valor

        newTypeCellRef = newTypeRowRef.insertCell(1);
        newTypeCellRef.textContent = transactionObj["description"]

        newTypeCellRef = newTypeRowRef.insertCell(2);
        newTypeCellRef.textContent = transactionObj["price"]

        newTypeCellRef = newTypeRowRef.insertCell(3);
        newTypeCellRef.textContent = transactionObj["category"]

        let newDeleteCell = newTypeRowRef.insertCell(4);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar"
        newDeleteCell.appendChild(deleteButton);

        deleteButton.addEventListener("click", (event) => {
            let newTypeRowRef = event.target.parentNode.parentNode;
            let transactionId = newTypeRowRef.getAttribute("data-transaction-id");
            newTypeRowRef.remove();
            deleteTransactionObj(transactionId);
        })
}

function deleteTransactionObj(transactionId){
    //Obtengo el array del LS en "transactionObjArr"
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
    //Busco el indice cuando se presiona el boton delete
    let transactionIndexInArray = transactionObjArr.findIndex(element => element.transactionId === transactionId)
    //Lo borro
    transactionObjArr.splice(transactionIndexInArray, 1)
    //lo convierto en string y lo guardo en el LS
    let transactionArrayJSON = JSON.stringify(transactionObjArr);
    localStorage.setItem("transactionData", transactionArrayJSON)
    ///transactionIndexInArray.remove()
}

function saveTransactionObj(transactionObj) { 
    let myTransactionArray = JSON.parse(localStorage.getItem("transactionData")) || [];//obtengp el array
    myTransactionArray.push(transactionObj);//agrego un array
    //Convierto el array en JSON
    let transactionArrayJSON = JSON.stringify(myTransactionArray);
    //Guardo en formato JSON
    localStorage.setItem("transactionData", transactionArrayJSON)
}

function draw_category() {
    let allCategories = [
        "Alquiler", "Comida", "Diversion", "Salario", "Trabajo", "Gastos Varios", "Ahorro", "Inversiones"
    ]
    for (let index = 0; index < allCategories.length; index++) {
        insertCategory(allCategories[index])
    }
}
function insertCategory(categoryName) {
    const selectElement = document.getElementById("category");
    let htmlToInsert = `<option> ${categoryName} </option>`
    selectElement.insertAdjacentHTML("beforeend", htmlToInsert)
}
    
