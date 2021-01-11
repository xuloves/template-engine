/*折叠tokens,#,/*/
export default function nestTokens(tokens) {

    let nestedTokens = [];
    //收集器
    let collector = nestedTokens;
    let sections = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        switch (token[0]) {
            case '#':
                collector.push(token);
                //入栈
                sections.push(token);
                collector = token[2] = [];
                break;
            case '/':
                let section_pop = sections.pop();
                console.log("出栈:" ,section_pop)
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens;
                break;
            default:
                collector.push(token);
                break;
        }

    }
    return nestedTokens;
};