// require("fs").writeFile("test.txt", "HW",(err) =>{
//     if(err) console.log(err)
//     else console.log("write file success!");
// } );
const fs = require("fs");
// fs.readFile("test.txt", {encoding: 'utf-8'}, (err, data) =>{
//     if(err) console.log(err)
//     else console.log(data);

// });

// const data = fs.readFileSync("test.txt", {encoding: 'utf-8'});
// console.log(data);

const obj = {
    name: 'Linh',
    age: 18
};
// const jsonObj = JSON.stringify(obj);
    
    // fs.writeFileSync('test.txt', obj);
    // console.log(obj);
    // const data = fs.readFileSync("test.txt", {encoding: 'utf-8'});
    // const objData = JSON.parse(data);
    // console.log(objData);
    // console.log(objData.name);

    const fileController = require("./fileController");
    const fileData = fileController.readFile('./test.txt');
    console.log(fileData);