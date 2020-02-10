Vue.component('character-name', {
    props: {
        name: String,
        isAwesome: Boolean
    },
    template: `
        <article>
            <h2>- {{ name }} </h2>
            <h3>Is awesome: {{ isAwesome }}</h3>
        </article>
    `,
});

let App = new Vue({
    el: '#app',
    data: {
        message: "Stop, stop stop! You're going to take someone's eye out. Besides, you're saying it wrong." +
        " It's Levi-o-sa, not Levio-sar.",
        input: 'Christoffer'
    }
});
