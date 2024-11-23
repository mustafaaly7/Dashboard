import { EllipsisIcon } from 'lucide-react'
import './App.css'
import { CardDemo } from './components/card'
import Header from './components/header'
import { Infocard } from './components/infocard'
import Layout from './components/layout/layout'
import MedicalinfoCard from './components/medicalInfo'
import Patientnotes from './components/patientNotes'
import { Button } from './components/ui/button'
import SessionCard from './components/sessionCard'

function App() {

  return (
    <>
      {/* <Header /> */}
      <Layout>
        <div className=' mx-auto w-[80%]'>
        <div className='mx-auto flex md:flex-row flex-col gap-8 justify-center px-3'>

          <CardDemo className={"h-fit"} />
          <div className='flex flex-col gap-5'>
            <Infocard />
            <h1 className='text-bold text-lg text-gray-800 font-bold'>Patient Notes</h1>
            <div className="flex flex-wrap gap-5 items-center justify-center lg:justify-start md:justify-between">
  <Patientnotes />
  <Patientnotes />
  <Patientnotes />
</div>
          </div>

        </div>
        <div className=' flex justify-between flex-wrap my-4 items-center mx-auto '>
        <h1 className='text-bold text-xl my-4 text-gray-800 font-bold'>Medical Info  </h1>
        <h3 className='flex gap-2 items-center text-bold text-md text-gray-600' >Last Updated <span className='text-black'>28 Jun 2023 , 17 : 48 Pm </span><EllipsisIcon /> </h3> 
        </div>
        <div className='flex flex-col'>
        <MedicalinfoCard />
     
        <SessionCard/>
        </div>
        </div>
      </Layout>
    </>
  )
}

export default App
