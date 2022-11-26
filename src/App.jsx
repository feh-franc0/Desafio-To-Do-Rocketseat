import { Header } from './components/Header';
import {Post} from './Post';

export function App() {
  return (
    <>
      <Header />
      <h1>Info:</h1>


      <Post 
        name="jony Felfer" 
        years="50"
        content="Jony Felfer é um senho de 50 anos!"
      />
      <Post 
        name="Golys" 
        years="23"
        content="Golys um jovem que faz contabilidade!"
      />
      <Post 
        name="Gates" 
        years="31"
        content="Gates um estudioso fascinado pelo saber!"
      />
    </>
  )
}
