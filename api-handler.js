function getVersion(req) {
    var ary = req.baseUrl.split('/');
    return ary[ary.length - 1];
}

exports.getVersion = getVersion;

function throwError(err) {
    return {
        status: 'error',
        message: err.message
    }
}

exports.throwError = throwError;

function success(resource) {
    return {
        code:   200,
        status: 'success',
        data:   resource
    }
}

exports.success = success;