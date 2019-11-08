import { html, PolymerElement } from '@polymer/polymer';
import '@polymer/polymer/lib/elements/dom-repeat';

class FacetsOverview extends PolymerElement {
    static get properties(){
        return {
            dataInput: {type: Array}
        }
    }
    constructor() {
        super();
    }
    static get template() {
        return html`
        <p>overview is working</p>
        
         <div class="table-row">
            <div id="legend-box"></div>
            <template is="dom-repeat" items="[[dataInput]]">
            <div> [[index]] [[item.name]] [[item.total]] [[item.max]] [[item.min]] [[item.medium]]<br/></div>
            </template>
         </div>
        `;
    }
   
}

customElements.define('facets-overview', FacetsOverview);