const uuidv4 = require("uuid");
const AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');

const dynamodb = new AWS.DynamoDB.DocumentClient();

// Create Employees

// const happyIncOrgId = "e7e15b69-e165-4c21-9bcd-f7fa8408032d";
// const ramit = uuidv4.v4();

// var params = {
//     TableName: 'happy-projects',
//     Item: {
//         PK: `ORG#${happyIncOrgId}`,
//         SK: `EMP#${ramit}`,
//         name: "Ramit Sarkar",
//         email: "ramitsarkar902@gmail.com"
//     }
// };

// dynamodb.put(params, function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });

// Assign an employee to a project

// const happyInc = 'e7e15b69-e165-4c21-9bcd-f7fa8408032d';

// const projectX = 'a4b4d376-1ca9-42da-b479-864323212430';
// // const projectA = '';
// const projectF = '29fcc2e1-0cc3-47eb-be46-b5990f6642d5';

// const tushar = '2696e5f2-cdeb-4deb-aa6f-5eae7e6d1835';
// const ramit = '7456c4c2-2ce5-4b4e-a776-713eef4d925c';

// var params = {
//     TableName: 'happy-projects',
//     Item: {
//         PK: `ORG#${happyInc}#PRO#${projectX}`,
//         SK: `ORG#${happyInc}#EMP#${tushar}`,
//         name: "Tushar",
//         project: "Project X",
//         date_of_join: new Date().toUTCString()
//     }
// };

// dynamodb.put(params, function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });


// Find all Employees assigned to Project X of Happy INC.

const happyInc = 'e7e15b69-e165-4c21-9bcd-f7fa8408032d';
const projectX = 'a4b4d376-1ca9-42da-b479-864323212430';


var params = {
    TableName: 'happy-projects',
    KeyConditionExpression: '#PK = :PK',
    ExpressionAttributeNames: { "#PK": "PK" },
    ExpressionAttributeValues: {
        ':PK': `ORG#${happyInc}#PRO#${projectX}`,
    }
};

dynamodb.query(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});



//