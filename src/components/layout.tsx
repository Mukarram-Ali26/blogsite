import React, { ReactNode } from "react"
import Header from "./header"
interface Props {
  children: ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
