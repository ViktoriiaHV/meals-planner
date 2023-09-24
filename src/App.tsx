import { Card } from "./Layout/Card";
import { ContentPanel } from "./Layout/ContentPanel";
import { Layout } from "./Layout/Layout";
import { SidePanel } from "./Layout/SidePanel";
import { RecipeCard } from "./components/RecipeCard";
import { SideNav } from "./components/SideNav";
// import { db } from "./utils/firebase";
// import { onValue, ref } from "firebase/database";
import { RECIPES } from "./constants/recipes";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
      <Layout>
        <SidePanel>
          <SideNav />
          <div>Impressum</div>
        </SidePanel>
        <ContentPanel>
          <Router>
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
                path="/"
                element={
                  <div>
                    {RECIPES.map((recipe) => (
                      <Card key={recipe.id}>
                        <RecipeCard />
                      </Card>
                    ))}
                  </div>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
          {/* <h3>You have no recipes yet</h3> */}
        </ContentPanel>
      </Layout>
    </div>
  );
}

export default App;
