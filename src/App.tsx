import { ContentPanel } from "./Layout/ContentPanel";
import { Layout } from "./Layout/Layout";
import { SidePanel } from "./Layout/SidePanel";
import { SideNav } from "./components/SideNav";
// import { db } from "./utils/firebase";
// import { onValue, ref } from "firebase/database";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Recipe } from "./pages/Recipe";
import { Recipes } from "./pages/Recipes";

function App() {
  // useEffect(() => {
  //   const fetchData = () => {
  //     const testRef = ref(db, 'recipes');
  //     onValue(testRef, (snapshot) => {
  //       console.log('HERE')
  //       const data = snapshot.val();
  //     });
  //   }
  //   fetchData();
  // })

  return (
    <div className="app-container">
      <Router>
        <Layout>
          <SidePanel>
            <SideNav />
            <div>Impressum</div>
          </SidePanel>
          <ContentPanel>
            <Routes>
              <Route
                path="/list"
                element={<div>This is your shopping list</div>}
              />
              <Route
                path="/planner"
                element={<div>This is your food planner</div>}
              />
              <Route
                path="/recipe"
                element={<Recipe />}
              />
              <Route
                path="/"
                element={<Recipes />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            {/* <h3>You have no recipes yet</h3> */}
          </ContentPanel>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
