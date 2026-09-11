import { useState } from "react";
import "./App.css";

function App() {
  const [modalAntes, setModalAntes] = useState(false);
  const [abertoDepois, setAbertoDepois] = useState(false);

  return (
    <main className="pagina">
      <div className="overlay"></div>

      <section className="hero">
        <div className="hero-conteudo">
          <p className="mini">pra você</p>

          <h1>antes da sua provinha</h1>

        

          <div className="fotos-giovanna">
            <div className="foto foto-1">
              <img src="/giovanna-1.png" alt="Giovanna de jaleco" />
            </div>

            <div className="foto foto-2">
              <img src="/giovanna-2.png" alt="Giovanna de jaleco" />
            </div>
          </div>

          <div className="linha-coracao">
            <span></span>
            <b>♡</b>
            <span></span>
          </div>

          <div className="cards">
            <article className="card">
              <p className="card-mini">primeiro</p>
              <h2>pra você lembrar</h2>

              <p>
                você estudou, correu atrás e chegou até aqui por mérito seu.
                não precisa saber tudo, só precisa confiar no que você já sabe.
              </p>
            </article>

            <article className="card destaque-card">
              <p className="card-mini">antes da prova</p>
              <h2>abre isso</h2>

              <p>
                tem uma coisinha que eu queria que você visse antes de entrar.
              </p>

              <button onClick={() => setModalAntes(true)}>
                abrir mensagem
              </button>
            </article>

            <article className="card">
              <p className="card-mini">um lembrete</p>
              <h2>vai com calma</h2>

              <p>
                respira fundo, lê com calma, não se atropela e não deixa uma
                questão difícil fazer você esquecer todas as outras que sabe.
              </p>
            </article>

            <article className="card depois">
              <p className="card-mini">depois da prova</p>
              <h2>quando terminar</h2>

              {!abertoDepois ? (
                <button
                  className="botao-claro"
                  onClick={() => setAbertoDepois(true)}
                >
                  abrir depois
                </button>
              ) : (
                <div className="mensagem">
                  <p>
                    acabou, amor. agora esquece um pouco a prova e descansa a
                    cabeça.
                  </p>

                  <p>
                    independente de como você saiu de lá, eu já tô orgulhoso de
                    você por ter ido, tentado e continuado correndo atrás do que
                    quer.
                  </p>

                  <p className="frase">
                    agora vem me contar tudo, até as questões que você vai jurar
                    que marcou errado kkkkk.
                  </p>

                  <p className="assinatura">te amo. — kauã ♡</p>
                </div>
              )}
            </article>
          </div>

          <footer>
            <p>arrasa momoziii</p>
          </footer>
        </div>
      </section>

      {modalAntes && (
        <div
          className="modal-fundo"
          onClick={() => setModalAntes(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="fechar"
              onClick={() => setModalAntes(false)}
            >
              ×
            </button>

            <p className="modal-mini">antes de você entrar</p>

            <h2>amor, escuta isso primeiro</h2>

            <p className="modal-texto">
              eu queria muito estar aí com você hoje, mas como não posso,
              fiz isso pra tentar ficar um pouquinho mais perto.
            </p>

            <div className="audio-box">
              <p>uma mensagem minha pra você</p>

              <audio controls>
                <source src="/audio-kaua.mp3" type="audio/mpeg" />
                seu navegador não conseguiu reproduzir o áudio.
              </audio>
            </div>

            <p className="modal-texto">
              eu sei o quanto você correu atrás disso. então entra lá com
              calma, confia em você e faz o que sabe.
            </p>

            <p className="modal-frase">
              não importa o nervosismo. você continua sendo a mesma pessoa
              inteligente e dedicada que chegou até aqui.
            </p>

            <p className="modal-assinatura">
              tô daqui torcendo por você. te amo. — kauã ♡
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;