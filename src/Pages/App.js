import CompFilterSearch from "../component/CompFilterSearch";
import CompFooter from "../component/CompFooter";
import Navbar from "../component/CompNavbar";
import "./App.css";
import CompIconInput from "../component/CompIconInput";
import CompPropertiPilihan from "../component/CompPropertiPilihan";
import CompJelajahiProperti from "../component/CompJelajahiProperti";
import CompDaftarPropertiBaru from "../component/CompDaftarPropertiBaru";
import CompReview from "../component/CompReview";
import CompInfoProperti from "../component/CompInfoProperti";

function App() {
  return (
    <div>
      <Navbar />
      <CompFilterSearch />
      <CompIconInput />
      <CompPropertiPilihan />
      <CompJelajahiProperti />
      <CompDaftarPropertiBaru />
      <CompReview />
      <CompInfoProperti />
      <CompFooter />
    </div>
  );
}

export default App;
