import { Card } from "./Layout/Card";
import { ContentPanel } from "./Layout/ContentPanel";
import { Layout } from "./Layout/Layout";
import { SidePanel } from "./Layout/SidePanel";
import { RecipeCard } from "./components/RecipeCard";
import { SideNav } from "./components/SideNav";
// import { db } from "./utils/firebase";
// import { onValue, ref } from "firebase/database";
import { RECIPES } from "./constants/recipes";

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
         {RECIPES.map((recipe) => <Card key={recipe.id}><RecipeCard /></Card>)}
         {/* <h3>You have no recipes yet</h3> */}
        </ContentPanel>
      </Layout>
    </div>
  );
}

export default App;
