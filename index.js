console.log("Hello World")


addit = document.getElementById("addit")


function update() {
    console.log("Updating List")
    tit = document.getElementById('title').value;
    desc = document.getElementById('Description1').value;
    if (tit == "") {
        console.log("nothing was added")
        if (localStorage.getItem("itemsJson")=="null") {

            itemsJsonArray = [];

            localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
        }
        else {
            console.log("not this one")

            itemsJsonArrayStr = localStorage.getItem('itemsJson')
            itemsJsonArray = JSON.parse(itemsJsonArrayStr)
            localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
            let tablebody = document.getElementById("tablebody");
            let str = "";

            itemsJsonArray.forEach((element, index) => {
                str += `
                <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-primary" onclick="deletem(${index})">Delete</button></td>
        
            </tr>
        
            
        
                
                
                `

            });
            tablebody.innerHTML = str;
        }


        //Now write on page









    }
    else {
        console.log("lolololol")
        if (localStorage.getItem("itemsJson") == null) {
            itemsJsonArray = [];
            itemsJsonArray.push([tit, desc])
            localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
        }
        else {
            itemsJsonArrayStr = localStorage.getItem('itemsJson')
            itemsJsonArray = JSON.parse(itemsJsonArrayStr)
            itemsJsonArray.push([tit, desc])
            localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
        }


        //Now write on page

        let tablebody = document.getElementById("tablebody");
        let str = "";

        itemsJsonArray.forEach((element, index) => {
            str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-primary" onclick="deletem(${index})">Delete</button></td>
    
          </tr>
    
          
    
            
            
            `

        });
        tablebody.innerHTML = str;
    }
}

function deletem(itemindex) {
    console.log("delete", itemindex + 1)
    itemsJsonArrayStr = localStorage.getItem('itemsJson')
    itemsJsonArray = JSON.parse(itemsJsonArrayStr)
    if (itemindex == 0) {

        itemsJsonArray.splice(0, 1)
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))

    }
    else {

        itemsJsonArray.splice(itemindex, 1);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))

    }

    newupdate();




}

function newupdate() {

    itemsJsonArrayStr = localStorage.getItem('itemsJson')
    itemsJsonArray = JSON.parse(itemsJsonArrayStr)
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))


    let tablebody = document.getElementById("tablebody");
    let str = "";

    itemsJsonArray.forEach((element, index) => {
        str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-primary" onclick="deletem(${index})">Delete</button></td>
    
        </tr>
    
        
    
            
            
            `

    });
    tablebody.innerHTML = str;



    //Now write on page
    //Now write on page





}

addit.addEventListener("click", update)

update();

function cleari(){
   
    console.log('Clearing the storage')
    localStorage.clear();
    update()
}