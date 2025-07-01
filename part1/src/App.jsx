// const App = () => {
//   const now = new Date()
//   const a = 30
//   const b = 20
//   console.log(now, a+b)

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plub {b} is {a+b}
//       </p>
//     </div>
//   )
// }

const Hello = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  )
}

export default App