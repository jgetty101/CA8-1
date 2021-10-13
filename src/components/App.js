import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavBar from "./NavBar.js";
import SideMenu from "./SideMenu.js";
import ModeTabs from "./ModeTabs.js";
import FloatingButton from "./FloatingButton.js";
import LoginPage from "./LoginPage.js";
import FeedPage from "./FeedPage.js";

function App() {
  const [showFeedPage, updateFeedPage] = useState(false);

  function toggleFeedPage() {
    if (showFeedPage) {
      updateFeedPage(false);
    } else {
      updateFeedPage(true);
    }
  }

  return (
    <div>
      <NavBar title="Welcome to SpeedScore" />
      <SideMenu />
      <ModeTabs />
      {showFeedPage ? (
        <FeedPage updatePage={toggleFeedPage} />
      ) : (
        <LoginPage updatePage={toggleFeedPage} />
      )}

      <FloatingButton
        icon={faCalendar}
        label={"Log Round"}
        action={() => {
          alert("Log Round");
        }}
      />
    </div>
  );
}

export default App;