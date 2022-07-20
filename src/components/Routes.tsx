import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import TopicPage from "./TopicPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/:topic" element={<TopicPage />}/>
      <Route path="*" element={<Navigate to="/react" replace/>}/>
    </Routes>
  )
}