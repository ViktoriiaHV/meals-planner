import { Card } from "./Layout/Card";
import { ContentPanel } from "./Layout/ContentPanel";
import { Layout } from "./Layout/Layout";
import { SidePanel } from "./Layout/SidePanel";
import { RecipeCard } from "./components/RecipeCard";
import { SideNav } from "./components/SideNav";

const cards = new Array(10).fill('test card')

function App() {
  return (
    <div className="app-container">
      <Layout>
        <SidePanel>
          <SideNav />
          <div>Impressum</div>
        </SidePanel>
        <ContentPanel>
         {cards.map(card => <Card><RecipeCard /></Card>)}
         {/* <h3>You have no recipes yet</h3> */}
        </ContentPanel>
      </Layout>
    </div>
  );
}

export default App;
