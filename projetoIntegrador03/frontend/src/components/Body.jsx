import { ButtonVoltar, Divtitulo, TituloRelatorio, DivTreinamento, Subtitulo } from "../styles/styleBody";

const Body = () => {
    return (
        <>
            <ButtonVoltar href="PáginaInicial">Voltar</ButtonVoltar>
            <Divtitulo>
                <TituloRelatorio>Relatorio de Busca</TituloRelatorio>
            </Divtitulo>
            <DivTreinamento>
                <Subtitulo>Treinamentos em Geral</Subtitulo>
            </DivTreinamento>
        </>
    )
}

export default Body