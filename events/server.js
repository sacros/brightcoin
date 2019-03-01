console.log("Listening to all events...");

// token_events = require('./contacts/token/event');
// for (let event of token_events) {
//     event.on("data", function (event) {
//             console.log(event);
//         })
//         .on("error", console.error);
// }


// test_events = require('./contracts/token/event');
test_events = require('./contracts/testfile/events');
console.log(test_events);
for (let event of test_events) {
    event.on("data", function (event) {
            console.log(event);
        })
        .on("error", console.error);
}
