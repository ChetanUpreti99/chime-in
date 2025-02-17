import { RouterProvider } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ApolloProvider } from "@apollo/client";

import router from "@components/auth/Routes";
import client from "@constants/apollo-client";
function App() {

  const lightTheme = createTheme({
	palette:{
	  mode:"dark"
	}
  })

  return (
	<>
	<ApolloProvider client={client}>
	  <ThemeProvider theme={lightTheme}>
		<CssBaseline/>
		<Container>
	  		<RouterProvider router={router}/>
	  </Container>
	  </ThemeProvider>
	  </ApolloProvider>

	</>
  )
}

export default App
