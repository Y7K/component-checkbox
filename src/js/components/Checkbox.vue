<script>

    /**
     *
     */
    export default {

        props: {
            label: {
                type: String,
                default: '',
            },
            value: {
                type: Boolean,
                default: false,
            },
        },


        computed: {
            classes() {
                return {
                    'checkbox-isChecked': this.value,
                };
            },
        },


        methods: {
            input() {
                this.$emit('input', !this.value);
            },
        },
    };

</script>

<template>
    <div class="checkbox" :class="classes">
        <label>
            <input
                type="checkbox"
                class="checkbox-input"
                :checked="value"
                @input="input"
            >
            <span class="checkbox-span"></span>
            {{ label }}
        </label>
    </div>
</template>
