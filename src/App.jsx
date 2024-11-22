import './App.css'
import { CardDemo } from './components/card'
import Header from './components/header'
import { Infocard } from './components/infocard'
import Layout from './components/layout/layout'
import MedicalinfoCard from './components/medicalInfo'
import Patientnotes from './components/patientNotes'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      {/* <Header /> */}
      <Layout>
        <div>
        <div className='mx-auto flex md:flex-row flex-col gap-8 justify-center px-3'>

          <CardDemo className={"h-fit"} />
          <div className='flex flex-col gap-2'>
            <Infocard />
            <h1 className='text-bold text-lg text-gray-800 font-bold'>Patient Notes</h1>
            <div className='flex flex-wrap gap-5 '>
            <Patientnotes />
            <Patientnotes />
            <Patientnotes />
            </div>
          </div>
        </div>
        <h1 className='text-bold text-lg my-4 text-gray-800 font-bold'>Medical Info  </h1>
        
      {/*
        
      <MedicalinfoCard />
    */  } 
        </div>
      </Layout>
    </>
  )
}

export default App
