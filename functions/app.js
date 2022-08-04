const Cloudant = require("@cloudant/cloudant");

main();


const cloudant = Cloudant({
    url: "https://20c446e9-b7d6-47c4-9aba-260d13815831-bluemix.cloudantnosqldb.appdomain.cloud",
    plugins: {
        iamauth: {
            iamApiKey: "ng9v3anfOCobH63DPcohiQERqqu4Bdcm-oXVH40ntjU5"
        }
    }
})



console.log("creating connection ....\n");
const db = cloudant.db.use('dealer-part');
console.log("********* Connection created *************\n");

async function main() {
    try {
    } catch (error) {
        console.log(error);
    }
}






async function post(object) {
    let res = "";
    res = await db.insert(doc0);
    console.log(res);
    console.log(`added doc to db:${res}`);
}

async function posts(objects) {




}

async function get(key) {
    console.log('get doc from DataBase');
    res = await db.get(doc0._id);
    console.log(res);
}

async function getList() {
    console.log('getting db list');
    let allDBS = await cloudant.db.list();
    console.log(`got db list [${allDBS}]`);
}

async function getStateList(state) {
    console.log('getting list bt partition');
    res = await db.partitionedList(`${state}`, { include_docs: true });
    console.log(res);
}


async function update(_rev, params) {

}

async function trash(obj) { }
