let db;

const request = indexedDB.open("budget", 1);

request.onsuccess = ({target}) => {
    db = target.result;
};

request.onupgradeneeded =({target}) => {
    let db = target.result;
    db.storeObject("pending", { autoIncrement:true});
};

request.onerror = function(event) {
    console.log("Error:" + event.target.errorCode);
};

function saveRecord(record){
    const transaction = db.transcation("pending", "readwrite");
    const store = transaction.storeObject
}