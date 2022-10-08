import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useForm, Controller} from 'react-hook-form';

export default function App() {
  //definir los datos del formulario que vamos a controlar que se validaran
  const{control, handleSubmit, formState: {errors}} = useForm({
    defaultValues:{
      fullname:'',
      email:'',
      password:'',
      salary:''
    }
  })
  //Definir el metodo para mostrar los datos cuando sean validos
  const onSubmit =data => console.log(data)
  
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g ,
          maxLength:30,
          minLength:3 
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor: errors.fullname?.type == "required" || errors.fullname?.type == "pattern" || errors.fullname?.type == "maxLength" || errors.fullname?.type == "minLength" ? 'red' : 'green'}]}
          placeholder="Nombre Completo"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          />
        )}
        name='fullname'
        />
        {errors.fullname?.type == "required" && <Text style={{color:'red'}}>El nombre es obligatorio</Text>}
        {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>El nombre no puede superar los 30 caracteres</Text>}
        {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>El nombre no puede ser menor a 3 caracteres</Text>}
        {errors.fullname?.type == "pattern" && <Text style={{color:'red'}}>El nombre solo puede tener letras y/o espacios</Text>}
        
        <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^(([^<>()\[\] \\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@( (\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}] )|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/ ,
          maxLength:30,
          minLength:8 
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor: errors.email?.type == "required" || errors.email?.type == "pattern" || errors.email?.type == "maxLength" || errors.email?.type == "minLength" ? 'red' : 'green'}]}
          placeholder="Email"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          />
        )}
        name='email'
        />
        {errors.email?.type == "required" && <Text style={{color:'red'}}>El email es obligatorio</Text>}
        {errors.email?.type == "maxLength" && <Text style={{color:'red'}}>El email no puede superar los 30 caracteres</Text>}
        {errors.email?.type == "minLength" && <Text style={{color:'red'}}>El email no puede ser menor a 3 caracteres</Text>}
        {errors.email?.type == "pattern" && <Text style={{color:'red'}}>El email debe tener una direccion de correo valida</Text>}

        
        <Controller
        control={control}
        rules={{
          required:true,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/ ,
          maxLength:15,
          minLength:8 
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor: errors.password?.type == "required" || errors.password?.type == "pattern" || errors.password?.type == "maxLength" || errors.password?.type == "minLength" ? 'red' : 'green'}]}
          placeholder="Contraseña"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          />
        )}
        name='password'
        />
        {errors.password?.type == "required" && <Text style={{color:'red'}}>La contraseña es obligatoria</Text>}
        {errors.password?.type == "maxLength" && <Text style={{color:'red'}}>La contraseña no puede superar los 15 digitos</Text>}
        {errors.password?.type == "minLength" && <Text style={{color:'red'}}>La contraseña no puede ser menor a 8 digitos</Text>}
        {errors.password?.type == "pattern" && <Text style={{color:'red'}}>La contraseña debe tener Almenos una letra Mayuscula y una minuscula , almenos un digito, sin espacios en blanco y un caracter especial</Text>}


        <Controller
        control={control}
        rules={{
          required:true,
          pattern: /^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$/ ,
          maxLength:17,
          minLength:4 
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor: errors.salary?.type == "required" || errors.salary?.type == "pattern" || errors.salary?.type == "maxLength" || errors.salary?.type == "minLength" ? 'red' : 'green'}]}
          placeholder="Salario"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          />
        )}
        name='salary'
        />
        {errors.salary?.type == "required" && <Text style={{color:'red'}}>El Salario es obligatorio</Text>}
        {errors.salary?.type == "maxLength" && <Text style={{color:'red'}}>El Salario no puede superar los 17 digitos</Text>}
        {errors.salary?.type == "minLength" && <Text style={{color:'red'}}>El Salario no puede ser menor a 4 digitos</Text>}
        {errors.salary?.type == "pattern" && <Text style={{color:'red'}}>El Salario debe tener un monto valido</Text>}
        
        <TouchableOpacity
          style={{backgroundColor:'green', borderRadius:10, padding:5, width:200}}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={{color:'white', textAlign:'center'}}>Enviar</Text>
        </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    padding:10,
    borderRadius:10,
    color:'black',
    marginBottom:5,
    borderWidth:2,
    borderColor:'green'
  }
});
