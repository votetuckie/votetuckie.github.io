Vue.component('card', {
    props: ['header', 'type'],
    template: `        
        <div class="card">
            <div class="card-head" v-if="header" 
            v-bind:style="{'card-head-soft': type == 'soft', 'card-head-bordered': type == 'bordered'}">
                {{header}}
            </div>
            <div class="card-body">
                <slot></slot>
            </div>
        </div>`
})

var app = new Vue({
    el: '#app',
    data: {
        portfolio_page: 'pixel art',
        name: 0,
        names: ['tuckie', 'twuky', 'twky', 'tukcey', 'tucky', 'wtiky', '???']
    },
    mounted() {
        window.setInterval(() => {
            // cycle through names
            this.name++
            this.name = this.name % this.names.length
        }, 2000)
    },
})