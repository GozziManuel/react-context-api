import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
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
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                //
                checked={CheckValue.public}
                onChange={FormCheck}
                name="public"
              />
              <label class="form-check-label" for="switchCheckDefault">
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
