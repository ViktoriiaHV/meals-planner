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
import { RecipeDetail } from "./pages/RecipeDetail";
import { Recipes } from "./pages/Recipes";
import { ShoppingList } from "./pages/ShoppingList";
import { Planner } from "./pages/Planner";

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
                element={<ShoppingList />}
              />
              <Route
                path="/planner"
                element={<Planner />}
              />
              <Route
                path="/recipe/:id"
                element={<RecipeDetail />}
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
