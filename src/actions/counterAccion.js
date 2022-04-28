export const addFaq = (quest)=> {
    return {
        type: "ADDFAQ",
        payload: quest,
    }
}

export const removeFaq = (index)=> {
    return {
        type: "REMOVEFAQ",
        payload: index,
    }
}


export const removeAll = ()=> {
    return {
        type: "REMOVEALL"
    }
}



export const updateFaq = (NewContent,Index)=> {
    return {
        type: "UPDATEFAQ",
        payload: {
            NewContent,
            Index
        }
            ,
    }
}