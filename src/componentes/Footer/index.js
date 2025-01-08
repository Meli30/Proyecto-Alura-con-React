import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
            <a href="">
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href="">
                <img src="/img/instagram.png" alt="Instagram"/>
            </a>
            
        </div>

        <img className="logo" src="/img/Logo.png" alt="Logo"/>
       <strong>Desarrollado por Melisa Fernández</strong>
    </footer>
}

export default Footer