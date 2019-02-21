var app = new Vue({ 
    el: '#app',
    data: {
        errors: [],
        nome: null,
        telefone: null,
        email: null
    },
    methods: {
        checkForm: function (e) {
            if (this.name && this.age) {
              return true;
            }
            this.errors = [];

            if (!this.name) {
                this.errors.push('O nome é obrigatório.');
            }
            if (!this.age) {
                this.errors.push('O telefone é obrigatória.');
            }

            e.preventDefault();
        }
    }
});