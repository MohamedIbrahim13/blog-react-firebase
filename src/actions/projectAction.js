const projectAction =(project)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId=getState().firebase.auth.uid;
        firestore.collection('projects').add({...project,authorFirstName:profile.firstName,
    authorLastName:profile.lastName,created_at: new Date(),authorId:authorId}).then(()=>{
        dispatch({type:'CREATE_PROJECT',project})
    }).catch((err)=>{dispatch({type:'CREATE_PROJECT_ERR',err})})
    }
}

export default projectAction