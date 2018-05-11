export const selectType = (client) =>{
    console.log(client.contact.email);
    console.log(this)
    return {
        type: "SELECTED",
        payload: client
    }
}

//export to client-list