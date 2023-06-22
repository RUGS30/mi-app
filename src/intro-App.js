import logo from './logo.svg';
// import './App.css';
import './main.css';

const estilo = (bg = '#333') => ({
  backgroundColor : bg,
  color: '#FFF',
  padding: '10px 15px',
  margin: '10px 15px'
})

const estilo2 = {
  boxShadow : '0 5px 3px rgba(0,0,0,0.5) '
}

const Li = ( {children} ) => {
  return (
    <li className='class-li'> {children} </li>
  )
}


const App = () =>  {

  const valor = 'feliz';
  return (
    <ul className='clase-ul'>
      <Li estado = {'feliz'}>Valor de Li</Li>
     
    </ul>
  );
}

export default App;
