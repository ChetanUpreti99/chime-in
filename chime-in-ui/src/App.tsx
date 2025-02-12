import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {

  const lightTheme = createTheme({
	palette:{
	  mode:"dark"
	}
  })

  return (
	<>
	  <ThemeProvider theme={lightTheme}>
		<CssBaseline/>
		<Container>
	  		<div>Hye</div>
	  </Container>
	  </ThemeProvider>

	</>
  )
}

export default App
