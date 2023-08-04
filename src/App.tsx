import "./index.css";

const App = () => {
  return (
    <div className="w-[full] h-[full] px-6 flex flex-col items-center justify-center">
      <img src="/arcoiris.png" alt="arcoiris" className="h-24 mt-8" />

      <div className="bg-white bg-opacity-70 w-full max-w-[640px] rounded-md p-3">
        <h1 className="font-bold text-lg text-center">Hola mi vida!</h1>
        <p className="mt-3">
          Como haz visto se me ocurrio hacer una carta un poco mas digital y
          novedosa.
        </p>
        <p className="mt-3">
          Ya te contare un poquito mejor a que iba esta idea y que queria hacer
          y al final no hice, como verás este regalito lleva ya un par de
          vueltas.
        </p>
        <p className="mt-3">
          Me gustaria recordarte lo mucho que te amo y decirte que me encanta
          estar cuando te dan el regalo, pense que no sucederia. Pense en
          regalarte esto para que en tus tiempos, cuando estes aburrida, o
          bueno... que si estabas mucho con la cabeza en el trabajo, que ya no
          te pasa, te puedas dispersar. Se que te mereces mucho mas que unos
          libritos y unos cuantos lapices pero es lo que me dio el presupuesto
          cuando fui a comprar.
        </p>
        <p className="mt-3">
          Espero que lo disfrutes mucho, que lo puedas usar y que podamos
          compartir ahora, alguna pintada juntos
        </p>
        <p className="mt-3">Te amo mucho ❤️</p>
        <p className="mt-3">Besitos y bueno, casi que feliz aniversario!</p>
        <p className="mt-3"></p>
      </div>
    </div>
  );
};

export default App;
