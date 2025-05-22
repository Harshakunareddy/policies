import { useEffect, useState } from "react";
import "./PrivacyPolicyPage.css";

export default function PrivacyPolicyPage({ policyName }) {
  const [htmlContent, setHtmlContent] = useState("<p>Loading policy...</p>");

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const res = await fetch(
          `https://mediumspringgreen-worm-457444.hostingersite.com/api/v1/get-policy-by-name?name=${policyName}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch policy data");
        }

        const data = await res.json();
        setHtmlContent(data?.data?.html_code || "<p>Policy content not available.</p>");
      } catch (error) {
        console.error(error);
        setHtmlContent("<p>Error loading policy content.</p>");
      }
    };

    fetchPolicy();
  }, [policyName]);

  return (
    <div className="policy-container">
      <div
        className="policy-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
