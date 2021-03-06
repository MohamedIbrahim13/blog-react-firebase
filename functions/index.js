const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Developers!");
});

const createNoti =(notification)=>{
    admin.firestore().collection('notifications').add(notification).then(doc=>console.log('You have a project',doc));
}

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(
    doc=>{
        const project= doc.data();
        const notification ={content:'A new project has been added',user:`${project.authorFirstName} ${project.authorLastName}`,time:admin.firestore.FieldValue.serverTimestamp()};
        return createNoti(notification);
    }
    
)
