export const select = (client) =>{
    console.log(client.contact.email);
    return {
        type: "SELECTED",
        payload: client
    }
}