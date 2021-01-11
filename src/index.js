import renderTemplate from "./renderTemplate";
import parseTemplateToTokens from "./parseTemplateToTokens";

window.TemplateEngin = {
    render(templateStr, data) {
        let tokens = parseTemplateToTokens(templateStr);
        console.log('tokens:', tokens);
        let domStr = renderTemplate(tokens, data);
        return domStr;
    }

}