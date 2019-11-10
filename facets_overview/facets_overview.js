import { html, PolymerElement } from '@polymer/polymer';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/iron-list/iron-list'

class FacetsOverview extends PolymerElement {
    static get properties(){
        return {
            dataInput: {type: Array,},
            _entries: {type: String, computed:'update_input(dataInput)',},
            features: {type: Array, value: ['total', 'min', 'max', 'mean', 'nulls', 'zeros', 'name']},
        }
    }
    constructor() {
        super();
    }
    update_input(dataInput) {
        console.log('update', JSON.stringify(dataInput));
       return JSON.stringify(dataInput);
    }
    static get template() {
        return html`
        <p>overview is working, "[[_entries]]"</p>
        
         <div class="table-row">
          
            <template is="dom-repeat" items="[[dataInput]]">
                <div> [[index]] [[item.name]] [[item.total]] [[item.max]] [[item.min]] [[item.medium]]<br/></div>
            </template>
         </div>
        `;
    }
   
}

customElements.define('facets-overview', FacetsOverview);