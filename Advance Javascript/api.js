let user= {
    name: "morpheus",
    job: "leader",
}

fetch(`https://reqres.in/api/users`,{
    method: "POST",
    header: {
        "contenent-type":"application/json",
    },
    body:JSON.stringify(user),
    }).then((response)=>{
        console.log(response)
    })