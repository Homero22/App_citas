import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./ListadoPacientes"
function App() {
 
 
  return (
   <div className="container mx-auto mt-20">
    <Header />
    <div className="mt-12 md:flex mx-auto">
      <Formulario/>
      <ListadoPacientes/>
    </div>
   
   </div>
  )
}

export default App
