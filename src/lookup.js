/*处理data对象
比如
dataObj:{
    a:{
        b:{
            c:100
        }
    }
}
lookup(dataObj, 'a.b.v')
结果是100
*/

export default function lookup(dataObj, keyName) {
    if (keyName.indexOf('.') !== -1 && keyName !== '.') {
        const keys = keyName.split('.');
        let temp = dataObj;
        for (let i = 0; i < keys.length; i++) {
            temp = temp[keys[i]];
        }
        return temp;
    }
    return dataObj[keyName];

};