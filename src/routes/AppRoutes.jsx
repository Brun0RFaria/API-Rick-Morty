<Routes>
  <Route path="/" element={<Home />} />

  <Route path="/characters" element={<Characters />} />
  <Route path="/characters/:id" element={<CharacterDetails />} />

  <Route path="/episodes" element={<Episodes />} />
  <Route path="/episodes/:id" element={<EpisodeDetails />} />

  <Route path="*" element={<NotFound />} />
</Routes>