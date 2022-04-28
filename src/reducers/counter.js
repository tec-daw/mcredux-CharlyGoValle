const initialState = {
    question : {
        Qs : ["Pregunta Default"],
        Ans : [""],
    },
};
const questionReducer = (
    state = initialState,
    action,
) => {
    switch(action.type){
        case 'ADDFAQ': {
            return {
                ...state,
                question : {
                    ...state.question,
                   Qs: [
                       ...state.question.Qs,
                       action.payload,
                   ]
                },   
            }
        }

        case 'REMOVEFAQ': {
            let NewString = [""];
            NewString = [...state.question.Qs];
            console.log(NewString)

            if(action.payload === 0){
                NewString.shift()
            }
            else
                NewString.splice(action.payload, 1);

            return {
                ...state,
                question : {
                    ...state.question,
                   Qs: NewString,
                },   
            }
        }

        case 'REMOVEALL': {
            let NewString = [""];
            return {
                ...state,
                question : {
                    ...state.question,
                   Qs: NewString.splice(1)
                },      
            }
        }
        case 'UPDATEFAQ': {
            let NewString = [""];
            NewString = [...state.question.Qs];
            NewString[action.payload.Index]= action.payload.NewContent;
            return {
                ...state,
                question : {
                    ...state.question,
                   Qs:NewString
                },      
            }
        }

        default: {
            return state;}
    }

};

export default questionReducer;