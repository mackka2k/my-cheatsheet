// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

// PropTypes = a mechanism that ensures that the passed value
//             is of the correct data type.
//             age: PropTypes.number

// defaultProps = default values for props in case they are not
//                passed from the parent component
//                name: "Guest"

import Student from './Student'

function App() {
 return (
  <>
    <Student name="Spongebob" age={30} isStudent={true}/> 
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Squidward" age={35} isStudent={true}/>
    <Student name="Sandy" age={25} isStudent={false}/>
  </>
 );
}


export default App
