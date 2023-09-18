import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hello, World!
                </h1>

                <p className={styles.paragrafo}>
                    Bem-vindo ao meu projeto React. Sou o Felipe, desenvolvedor de software!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de perfil do Felipe"
                />
            </div>
        </div>
    )
}