/*
Copyright 2020 Bruno Windels <bruno@windels.cloud>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {TemplateView} from "../../../general/TemplateView.js";
import {renderMessage} from "./common.js";

export class TextMessageView extends TemplateView {
    render(t, vm) {
        return renderMessage(t, vm,
            [t.p([vm => vm.text, t.time({className: {hidden: !vm.date}}, vm.date + " " + vm.time)])]
        );
    }
}
