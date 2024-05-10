import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MyProjectsPage, ContactPage, HomePage } from "./pages"
import AppWrapper from "./components/AppWrapper"

export const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="my_projects" element={<MyProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  )
}
