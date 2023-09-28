import './App.css'
import Card from './Components/Card/Card'


// Component
// function NewComponent(){
//   return <h3>Dhaka, Bangladesh</h3>
// }
// multiple component
// function MultipleComponents() {
//   return (
//     // <> this is fragments
//     <> 
//       <h1>Dhaka</h1>
//       <h3>This is Dhaka, Bangladesh </h3>
//   </>
//   );
// }

function App() {
  const myData = [
    {
      id: 1 ,
      name: "Item 1"
    },
    {
      id: 2 ,
      name: "Item 2"
    },
    {
      id: 3 ,
      name: "Item 3"
    },
  ]
  
  return (
    <>
      <h1 
      style={
        {
          color: 'red'
        }
      } className='text-4xl text-center font-semibold py-8'>Well Come to Our Comapany</h1>
      {/* <NewComponent></NewComponent>
    <MultipleComponents></MultipleComponents> */}
      <div >
        {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto items-center">
               {
                myData.map( (data) => <Card key={data.id} Name={data.name}></Card>)
               }
            </div>
           
        }
      </div>
      
    </>
  )
}

export default App
