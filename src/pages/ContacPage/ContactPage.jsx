const ContactPage = () => {
    return <div className="contactContainer">
        <form className="formContact">
            <div className="divContact">
                <label htmlFor="">Nombre:</label>
                <input type="text" placeholder="Ingrese su nombre.." />
            </div>
            <div className="divContact">
                <label htmlFor="">Apellido:</label>
                <input type="text" placeholder="Ingrese su apellido.." />
            </div>
            <div className="divContact">
                <label htmlFor="">Correo:</label>
                <input type="text" placeholder="@gmail.com" />
            </div>
            <div className="divContact">
                <label htmlFor="">Mensaje:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="divContact">
                <button>Enviar</button>
            </div>
        </form>
    </div>
}

export default ContactPage;