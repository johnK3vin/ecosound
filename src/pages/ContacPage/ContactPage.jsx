import { useState } from "react"

const initialState = {
    name: '',
    lastName: '',
    gmail: '',
    message: '',
}

const ContactPage = () => {
    const [values, setValues] = useState(initialState);
    const [alertA, setAlertA] = useState(false);
    const [alertB, setAlertB] = useState(false);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (values.name == '' && values.lastName == '' && values.gmail == '' && values.message == '') {
            console.log('ingresar todos los datos correspondientes');
            setAlertA(!alertA);
            setTimeout(()=>{
                setAlertA(false);
            }, 3000)
        } else {
            console.log('mensaje enviado');
            setAlertB(!alertB);
            setValues(initialState);
        }
    }


    return <div className="contactContainer">
        <form className="formContact" onSubmit={onSubmit}>
            <span style={{ fontSize: '1.2rem', color: "red" }}>{alertA ? "Por favor rellenar los campos correspondientes" : null}</span>
            <div className="divContact">
                <label htmlFor="">Nombre:</label>
                <input type="text" placeholder="Ingrese su nombre.." value={values.name}  onChange={handleOnChange} name="name"/>
            </div>
            <div className="divContact">
                <label htmlFor="">Apellido:</label>
                <input type="text" placeholder="Ingrese su apellido.." value={values.lastName} onChange={handleOnChange}  name="lastName"/>
            </div>
            <div className="divContact">
                <label htmlFor="">Correo:</label>
                <input type="text" placeholder="@gmail.com" value={values.gmail} onChange={handleOnChange} name="gmail" />
            </div>
            <div className="divContact">
                <label htmlFor="">Mensaje:</label>
                <textarea name="message" id="" cols="30" rows="10" value={values.message} onChange={handleOnChange}></textarea>
            </div>
            <div className="divContact">
                <span style={{ fontSize: '1.2rem', color: "white" }}>{alertB ? "Gracias! su comentario se respondera en breve " : null}</span>
                <button type='submit'>{alertB ? "Enviado" : 'Enviar'}</button>
            </div>
        </form>
    </div>
}

export default ContactPage;