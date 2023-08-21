import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >

            <img
                src={fotoSobreMim}
                alt="Foto do Felipe sorrindo com fundo em preto e branco"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Desenvolvedor, cursando graduação em Análise de Desenvolvimento de Sistemas, com habilidades versáteis e um forte interesse na área de programação e tecnologia.

            </p>
            <p className={styles.paragrafo}>
                Sinceramente não consigo escolher entre Front-end ou Back-end, o que vale é a paixão por criar e inovar!
                A mágica de transformar linhas de código em interfaces incríveis e servidores poderosos me fascina todos os dias.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, após concluir o curso de Direito em 2017, ingressei um tempo depois na jornada do desenvolvimento e não consegui mais parar. Hoje dedico-me integralmente para o mundo da tecnologia e desenvolvimento, com foco sempre em otimizar os projetos que faço parte.
            </p>
            <p className={styles.paragrafo}>
                Com meu primeiro estágio voluntário, aprendo diariamente boas práticas da programação, gestão de prazos e resolução dos problemas diários que um dev enfrenta.
            </p>
            <p className={styles.paragrafo}>
                Não somente no front-end, recentemente recebi um desafio com foco em back-end para utilizar o Node.js com a biblioteca Puppeteer por oferecer uma API de alto nível para controlar navegadores Chrome ou Chromium por meio do protocolo DevTools.

            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados. Mais um motivo para quem é viciado em conhecimento e desafios como eu.
            </p>
        </PostModelo>
    )
}