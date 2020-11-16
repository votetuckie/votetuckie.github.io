<template>
        <div class="card">
            <div class="card-head" v-if="header" 
            v-bind:style="{'card-head-soft': style == 'soft', 'card-head-bordered': style == 'bordered'}">
                {{header}}
            </div>
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
</template>

<script>
export default {
    props: ['header', 'style']
}
</script>