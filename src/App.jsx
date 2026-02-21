import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import Header from "./layouts/defaultLayoutHeader";
import DetailedProductPage from "./pages/DetailedProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BudgetProvider } from "./context/budgetContext";

export default function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route index element={<Homepage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/ProductPage/:id" element={<DetailedProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  );
}
