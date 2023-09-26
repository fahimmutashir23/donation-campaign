


const getLocalStorage = () =>{
    const getStorage = localStorage.getItem("donation");
    if(getStorage){
        return JSON.parse(getStorage)
    }
    return []
}

const saveLocalStorage = (id) =>{
    const donateStorage = getLocalStorage();
        donateStorage.push(id);
        localStorage.setItem("donation", JSON.stringify(donateStorage))
}

export {saveLocalStorage, getLocalStorage}