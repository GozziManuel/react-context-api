import { NavLink, Outlet } from "react-router-dom";
import { UseBudget } from "../context/budgetContext";
export default function Header() {
  const { FormCheck, CheckValue } = UseBudget();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/ProductPage">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AboutUs">
                  About US
                </NavLink>
              </li>
            </ul>
            <div className="form-check form-switch checkbox">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                //
                checked={CheckValue.public}
                onChange={FormCheck}
                name="public"
              />
              <label className="form-check-label" for="switchCheckDefault">
                Budget Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
