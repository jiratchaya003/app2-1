import React from 'react'
import {Navbar,Header,Footer} from './func-components'
import MsgBox from './func-props'
import {MyAbout,MyImage,MyData} from './func-mydata'
import Caledar from './class-component'
import MsgBox2 from './func-props'

function App() {
  //return [<Navbar />,<Header />,<Caledar/>,<Footer />]
  return(
    <MsgBox2
      text="Using props in function compoment"
      color="red"
      bgcolor="#ccc"
      fontsize="16px"
      border="dotted 1px black" 
    />

  )
  //return [<MyAbout/>,<MyImage/>,<Caledar/>,<MyData/>]
}


export default App;
