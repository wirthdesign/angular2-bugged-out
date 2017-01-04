"use strict";
(function (STATUS) {
    STATUS[STATUS['Logged'] = 0] = 'Logged';
    STATUS[STATUS['Recreated'] = 1] = 'Recreated';
    STATUS[STATUS['In Progress'] = 2] = 'In Progress';
    STATUS[STATUS['Fixed'] = 3] = 'Fixed';
    STATUS[STATUS['Declined'] = 4] = 'Declined';
})(exports.STATUS || (exports.STATUS = {}));
var STATUS = exports.STATUS;
(function (SEVERITY) {
    SEVERITY[SEVERITY['Severe'] = 0] = 'Severe';
    SEVERITY[SEVERITY['Low'] = 1] = 'Low';
    SEVERITY[SEVERITY['Medium'] = 2] = 'Medium';
    SEVERITY[SEVERITY['Cosmetic'] = 3] = 'Cosmetic';
})(exports.SEVERITY || (exports.SEVERITY = {}));
var SEVERITY = exports.SEVERITY;
//# sourceMappingURL=constants.js.map