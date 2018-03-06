import { KeyValuePair } from "./KeyValuePair";

    export class HtmlAndCss {

        static CreateAndAppendCssClass(className: string, propertyList: Array<KeyValuePair>): void {
            let propertyString: string="";

            // tslint:disable-next-line:typedef
            propertyList.forEach(function (element) {
                    propertyString = propertyString + " " + element.Name + ":" + element.Value + ";";
            });

            $("<style type='text/css'>" + " ." + className + " { " + propertyString + " } " + "</style>").appendTo("head");
        }

    }