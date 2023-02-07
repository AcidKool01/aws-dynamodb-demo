const uuidv4 = require("uuid");
const AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
// AWS.config.update({ region: "ap-northeast-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1. Create an organisations => 1. Happy Inc 2. ABC Inc
// const orgId = uuidv4.v4();

// var params = {
//     TableName: 'happy-projects',
//     Item: {
//         PK: `ORG#${orgId}`,
//         SK: `#METADATA#${orgId}`,
//         name: "ABC Inc",
//         tier: "free-tier"
//     }
// };

// dynamodb.put(params, function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });

// 2. Create => 1. an agile Project in Happy Inc 2. fixed-bid project in Happy Inc 3. fixed-bid in ABC 4. agile in ABC
// const happyIncOrgId = "e7e15b69-e165-4c21-9bcd-f7fa8408032d"; // retrieved from dynamoDB console.
// const abcOrgId = "c782633a-2ffb-45bf-abf2-3a2fd5f54ebf";
// const projectId = uuidv4.v4();

// var params = {
//     TableName: 'happy-projects',
//     Item: {
//         PK: `ORG#${abcOrgId}`,
//         SK: `PRO#agile#${projectId}`,
//         name: "Project B",
//         project_id: projectId
//     }
// };

// dynamodb.put(params, function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });

// // 3. Edit an Organisation 1. add org id attribute for both happy & ABC.
// const happyIncOrgId = "e7e15b69-e165-4c21-9bcd-f7fa8408032d";
// const abcOrgId = "c782633a-2ffb-45bf-abf2-3a2fd5f54ebf";

// var params = {
//     TableName: 'happy-projects',
//     Key: { PK: `ORG#${abcOrgId}`, SK: `#METADATA#${abcOrgId}` },
//     UpdateExpression: 'set #org_id = :org_id',
//     ExpressionAttributeNames: { '#org_id': 'org_id' },
//     ExpressionAttributeValues: {
//         ':org_id': abcOrgId,
//     }
// };

// var documentClient = new AWS.DynamoDB.DocumentClient();

// documentClient.update(params, function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });


// 4. Query => Find an organisation

// var params = {
//     TableName: 'happy-projects',
//     Key: {
//         PK: 'ORG#e7e15b69-e165-4c21-9bcd-f7fa8408032d',
//         SK: '#METADATA#e7e15b69-e165-4c21-9bcd-f7fa8408032d'
//     }
// };

// var documentClient = new AWS.DynamoDB.DocumentClient();

// documentClient.get(params, function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });

// 5. Query => Find all the projects of Happy Inc.

// var params = {
//     TableName: 'happy-projects',
//     KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
//     ExpressionAttributeNames: { "#PK": "PK", "#SK": "SK" },
//     ExpressionAttributeValues: {
//         ':PK': 'ORG#e7e15b69-e165-4c21-9bcd-f7fa8408032d',
//         ':SK': 'PRO#'
//     }
// };

// // var documentClient = new AWS.DynamoDB.DocumentClient();

// dynamodb.query(params, function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });



