<template>
  <v-layout align-center justify-space-around column fill-height >
    <h1 >ÚNETE...</h1>

    <v-form
    v-model="valid"
    >

      <v-text-field
      v-model="form.name"
      label="Nombre"
      :rules = "nameRules"
      solo

      ></v-text-field>

      <v-text-field
      v-model="form.email"
      autocomplete
      label="E-mail"
      :rules = "emailRules"
      solo
      ></v-text-field>

      <v-text-field
      v-model="form.celular"
      label="Celular"
      :rules = "numberRules"
      solo
      ></v-text-field>

      <v-text-field
      v-model="form.password"
      label="Contraseña"
      type="password"
      autocomplete
      :rules = "nameRules"
      solo
      ></v-text-field>

      <v-btn
      :disabled="!valid"
      block
      id="btnRegistrar"
      color="#d9527d"
      >
        Registrarme
      </v-btn>

    </v-form>

</v-layout>
</template>

<script>
export default {
  data () {
      return {
        valid: true,
        nameRules: [
          v => !!v || 'Este campo es requerido'
        ],
        numberRules:[
          v => !!v || 'Este campo es requerido',
          v => /^[0-9]+$/i.test(v) || 'Utiliza solo numeros, sin espacios'
        ],
        emailRules: [
          v => !!v || ' El E-mail es requerido',
          v => /.+@.+/.test(v) || 'El E-mail debe ser valido'
        ],
        form: {
          name: 'Enrique Peña',
          email: 'enriquep36@hotmail.com',
          celular: '3164961184',
          password: 'enriquep36@hotmail.com'
        },
        respuesta: '',
        error: ''
      }
    },
  methods:{
  }
}
</script>

<style scoped lang="css">
#btnRegistrar{
  color: white;
}

</style>
