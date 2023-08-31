import { Layout } from "./Layout/Layout";
import { SideNav } from "./components/SideNav";

function App() {
  return (
    <div className="app-container">
      <Layout>
        <SideNav />
        <div className="test">SECOND PART</div>
      </Layout>
    </div>
  );
}

export default App;
