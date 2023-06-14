import CompFilterSearch from "../Component/CompFilterSearch";
import CompFooter from "../Component/CompFooter";
import Navbar from "../Component/CompNavbar";
import "./App.css";
import CompIconInput from "../Component/CompIconInput";
import CompPropertiPilihan from "../Component/CompPropertiPilihan";
import CompJelajahiProperti from "../Component/CompJelajahiProperti";
import CompDaftarPropertiBaru from "../Component/CompDaftarPropertiBaru";
import CompReview from "../Component/CompReview";
import CompInfoProperti from "../Component/CompInfoProperti";

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
