import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivacyPolicyPage policyName="privacy_policy" />} />
        <Route path="/user" element={<PrivacyPolicyPage policyName="privacy_policy_user" />} />
      </Routes>
    </Router>
  );
}
