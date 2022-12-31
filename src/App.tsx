import {ChakraProvider} from "@chakra-ui/react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

import {Kuttle} from "./components/kuttle";
import {Blueprints} from "./pages/blueprints";
import {Dashboard} from "./pages/dashboard";
import {Review} from "./pages/review";
import {UIKit} from "./pages/ui-kit";
import {ROUTES} from "./routes";
import {kuttieThemeV1} from "./theme";


const App = () => (
  <ChakraProvider theme={kuttieThemeV1}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Kuttle />}>
          <Route
            path={ROUTES.dashboard}
            element={<Dashboard />} />
          <Route
            path={ROUTES.blueprints}
            element={<Blueprints />} />
          <Route
            path={ROUTES.review}
            element={<Review />} />
          <Route
            path={ROUTES.showcase}
            element={<UIKit />} />
          <Route
            path={ROUTES.uikit}
            element={<UIKit />} />
          <Route
            path=""
            element={<Navigate
              replace
              to={ROUTES.dashboard} />} />
        </Route>
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
