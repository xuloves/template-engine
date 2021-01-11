import Scanner from "./Scanner";
import nestTokens from "./nestTokens";

export default function parseTemplateToTokens(templateStr) {
    let tokens = [];
    const scanner = new Scanner(templateStr);
    let words;
    while (!scanner.eos()) {
        words = scanner.scanUntil("{{");
        //存起来
        if (words !== '') {
            //去空格<div class='box'>中div和class之间空格不去除
            let isInJJH = false;
            //空白字符串
            let _words = '';
            for (let i = 0; i < words.length; i++) {
                if (words[i] === '<') {
                    isInJJH = true;
                } else if (words[i] === '>') {
                    isInJJH = false;
                }
                if (!/\s/.test(words[i])) {
                    _words += words[i];
                } else {
                    //是空格，在标签内
                    if (isInJJH) {
                        _words += ' ';
                    }
                }
            }
            console.log(_words)
            tokens.push(['text', _words]);
        }

        scanner.scan("{{");
        words = scanner.scanUntil("}}");
        //存起来
        if (words !== '') {
            //{{}}之间的words，判断首字符
            if (words[0] === '#') {
                tokens.push(['#', words.substring(1)]);
            } else if (words[0] === '/') {
                tokens.push(['/', words.substring(1)]);
            } else {
                tokens.push(['name', words]);
            }

        }
        scanner.scan("}}");
    }
    return nestTokens(tokens);


};