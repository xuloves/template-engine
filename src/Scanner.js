/*扫描类*/

export default class Scanner {
    constructor(templateStr) {
        this.templateStr = templateStr;
        //指针
        this.pos = 0;
        //尾巴
        this.tail = templateStr
    }

    scan(tag) {
        if (this.tail.indexOf(tag) === 0) {
            //走过标记
            this.pos += tag.length;
            this.tail = this.templateStr.substring(this.pos);
        }
    }

    //指针扫描，遇到指定内容结束，返回路径前内容
    scanUntil(stopTag) {
        //记录开始位置
        const pos_backup = this.pos;
        //&&，没找到最后停止
        while (this.tail.indexOf(stopTag) !== 0 && this.pos < this.templateStr.length) {
            //指针向下走
            this.pos++;
            //返回标记位置，包括标记 {{ ，}}
            this.tail = this.templateStr.substring(this.pos);
        }
        //返回标记之前内容，{{，}}
        return this.templateStr.substring(pos_backup, this.pos);
    }

    eos() {
        return this.pos >= this.templateStr.length;
    }
}