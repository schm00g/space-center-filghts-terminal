import './App.css';
import SidePanel from './components/SidePanel';
import SpaceCenterGrid from './components/SpaceCenterGrid';

function App() {
  return (
    <div className="App">
      {/* TODO: break out from header */}
      <header className="App-header">
        <h1>Spacious</h1>
        <SpaceCenterGrid />
        <SidePanel />
      </header>
    </div>
  );
}

export default App;
