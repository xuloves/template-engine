/*
* tokens变成Dom字符串
 */
import lookup from "./lookup";
import parseArray from "./parseArray";

export default function renderTemplate(tokens, data) {
    let resultStr = '';
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        //根据类型拼接
        if (token[0] === 'text') {
            resultStr += token[1];
        } else if (token[0] === 'name') {
            resultStr += lookup(data, token[1])
        }else if (token[0] === '#') {
            resultStr += parseArray(token, data);
        }

    }
    return resultStr;

};