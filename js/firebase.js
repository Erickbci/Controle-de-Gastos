const firebaseConfig = {
    apiKey: "AIzaSyCe-Jw3kUnocpn0vi1LDIKhyr1rSlGc3rU",
    authDomain: "controle-de-gastos-b1cdb.firebaseapp.com",
    projectId: "controle-de-gastos-b1cdb",
    storageBucket: "controle-de-gastos-b1cdb.appspot.com",
    messagingSenderId: "380106976204",
    appId: "1:380106976204:web:e1a98cb353963461560b69"
};
firebase.initializeApp(firebaseConfig);
console.log("ANTES");

firebase.auth().signInWithEmailAndPassword("batista.erick07@hotmail.com", "123456").then(response => {
    console.log("success", response);
}).catch(error => {
    console.log("error", error);
})
console.log("DEPOIS");