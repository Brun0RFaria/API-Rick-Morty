import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Characters from "../pages/Characters"
import CharacterDetails from "../pages/CharacterDetails"
import Episodes from "../pages/Episodes"
import EpisodeDetails from "../pages/EpisodeDetails"
import NotFound from "../pages/NotFound"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />

      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episodes/:id" element={<EpisodeDetails />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes