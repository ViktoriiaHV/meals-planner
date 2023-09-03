import { ContentPanel } from "./Layout/ContentPanel";
import { Layout } from "./Layout/Layout";
import { SidePanel } from "./Layout/SidePanel";
import { SideNav } from "./components/SideNav";

function App() {
  return (
    <div className="app-container">
      <Layout>
        <SidePanel>
          <SideNav />
          <div>Impressum</div>
        </SidePanel>
        <ContentPanel>{}</ContentPanel>
      </Layout>
    </div>
  );
}

export default App;
