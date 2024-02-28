import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage();

  return <div>Feed</div>;
};

export default FeedPage;
