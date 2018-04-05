"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EXIT_STATUS = (function () {
    function EXIT_STATUS() {
    }
    EXIT_STATUS.OK = 0;
    EXIT_STATUS.BAD_COMMAND = 1;
    EXIT_STATUS.PARSE_CLASS_ERROR = 2;
    EXIT_STATUS.WEBPACK_COMPILE_ERROR = 3;
    EXIT_STATUS.BUILD_ENTRY_ERROR = 4;
    EXIT_STATUS.BUILD_OUTDIR_ERROR = 5;
    EXIT_STATUS.BUILD_OUTFILE_ERROR = 6;
    EXIT_STATUS.BROKEN_ENV = 127;
    return EXIT_STATUS;
}());
exports.EXIT_STATUS = EXIT_STATUS;
