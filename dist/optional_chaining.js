"use strict";
var _a;
function getUserName(id) {
    return id === 0 ? null : { name: 'John Doe' };
}
const userName = (_a = getUserName(0)) === null || _a === void 0 ? void 0 : _a.name;
console.log(userName);
