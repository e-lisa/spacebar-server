export function cleanNestedReponse(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = cleanNestedReponse(obj[key]);
        } else if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}
