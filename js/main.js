let nameinput=document.getElementById("nameinput")
let urlinput=document.getElementById("urlinput")
let alertmassage=document.getElementById("jj")



allproducts=[]

if (localStorage.getItem("list array")==null){
    let allproducts=[]
}
else{
    allproducts=JSON.parse(localStorage.getItem("list array"))
    display()
}

function add(element){


        let prodect1={
            name:nameinput.value,
            url:urlinput.value,
    
        }
        allproducts.push(prodect1)
        localStorage.setItem("list array",JSON.stringify(allproducts))
        display()
    
    



}



function display(){
     cartona=""
    for(var i=0; i<allproducts.length;i++){
       
        cartona+=`
                <div class="addetion-two d-flex justify-content-around" >
            <h5>${i}</h5>
            <h5>${allproducts[i].name}</h5>
             <a href="${allproducts[i].url}" class="btn btn-primary"><i class="ri-eye-line"></i> visit</a>
             <a href="" class="btn btn btn-danger" onclick="deletinput()"><i class="ri-delete-bin-6-fill"></i>delet</a>

        </div>
        <hr>
        
        
        `
        document.getElementById("two").innerHTML=cartona
    }
}

// function clear(){
//     name.value=""
//     cat.value=""
//     desc.value=""
//     price.value=""
// }


function deletinput(index){
    allproducts.splice(index,1)
    localStorage.setItem("list array",JSON.stringify(allproducts))
    display()
}




function validation(element){
var regex={
    nameinput:/^[a-zA-Z]{3,10}$/,
    urlinput:/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
}

if(regex[element.id].test(element.value)==true){
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
    jj.classList.add("d-none");
    jj.classList.remove("d-block");


}
else{
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
    jj.classList.add("d-block");
    jj.classList.remove("d-none");
     
    }

}


