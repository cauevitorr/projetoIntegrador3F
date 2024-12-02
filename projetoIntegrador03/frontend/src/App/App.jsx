import React from "react"
import axios from "axios"
import Footer from "../components/Footer.jsx"
import Body from "../components/Body.jsx"
import List from "../components/List.jsx"
import Header from "../components/Header.jsx"

function App() {

  
  const [funcionarios, setFuncionarios] = React.useState([])

  const handleGetList = async () => {
    try {
      const response = await axios.get("http://localhost:3333/api/funcionarios")
      setFuncionarios(response.data.funcionarios)
    } catch(error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    handleGetList()
  }, [])

  return (
    <>
    <Header/>
    <Body/>
    <List funcionarios={funcionarios} setFuncionarios={setFuncionarios} />
    <Footer/>
    </>
  )
}

export default App
