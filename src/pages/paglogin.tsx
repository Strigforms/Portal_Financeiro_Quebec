import '../pages/paglogin.css';
import Camposlogin from '../containers/boxlogin';

function Home() {
  return (
    <body className='background'>
      <header>

      </header>
      
      <main>
        <div className='principal'>
          <Camposlogin />;
        </div>
      </main>

      <footer className='waves'>
        <p className='copy'>Todos os direitos reservados Quebec Engenharia &copy;</p>
      </footer>
    </body>
  );
}

export default Home;