import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

const Project = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="flex items-center gap-2">
            <img src="houses-logo.svg" alt="Logo" />
            <h1 className="text-4xl font-normal">SELHONO</h1>
          </div>
          <ul>
            <li>
              <Link to="project" />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="container">
          <img src="project.png" alt="project" />

          <div className="flex items-center gap-12 pt-14">
            <div>
              <img src="project2.png" alt="badroom2" />
              <p className="text-2xl font-normal pt-10 pb-1 ">
                Minimal Bedroom
              </p>
              <p className="text-gray-600">Decor / Artchitecture</p>
            </div>
            <div>
              <img src="project3.png" alt="badroom2" />
              <p className="text-2xl font-normal pt-10 pb-1">Minimal Bedroom</p>
              <p className="text-gray-600">Decor / Artchitecture</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;
