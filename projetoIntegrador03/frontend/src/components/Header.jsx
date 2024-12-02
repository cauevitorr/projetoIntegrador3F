import { } from "../styles/styleFototer.js";
import imgLupa from "../../img/imgLupa.png"
import { DivBusca, InputBusca, Link, Nav, TextNav } from "../styles/styleHeader.js";



const Header = () => {
    return (
        <>
            <Nav>
                <Link href="paginaInicial">
                    <TextNav >HOME - PÁGINA INICIAL</TextNav>
                </Link>
                <DivBusca>
                    <InputBusca placeholder="Digite o CPF do colaborador" />
                    <img style={{ width: "7%", marginLeft: "5px" }} src={imgLupa} alt="" />
                </DivBusca>

            </Nav>
        </>
    )
}

export default Header;