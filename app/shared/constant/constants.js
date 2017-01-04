"use strict";
(function (STATUS) {
    STATUS[STATUS['Logged'] = 0] = 'Logged';
    STATUS[STATUS['Recreated'] = 1] = 'Recreated';
    STATUS[STATUS['In Progress'] = 2] = 'In Progress';
    STATUS[STATUS['Fixed'] = 3] = 'Fixed';
    STATUS[STATUS['Declined'] = 4] = 'Declined';
})(exports.STATUS || (exports.STATUS = {}));
var STATUS = exports.STATUS;
//# sourceMappingURL=constants.js.map