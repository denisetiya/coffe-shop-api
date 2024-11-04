"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = (res, status, message, data, error, header) => {
    if (header) {
        Object.entries(header).forEach(([key, value]) => {
            res.setHeader(key, value);
        });
    }
    res.status(status).json({
        status,
        message,
        data,
        error,
    });
};
exports.default = response;
//# sourceMappingURL=Response.js.map