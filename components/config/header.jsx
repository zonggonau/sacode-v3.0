import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
      <div className="container position-relative">
        <Link className="navbar-brand" href="/">
          <Image
            className="navbar-brand-regular"
            src="/assets/img/logo/logo-sacode.png"
            width={50}
            height={50}
            alt="brand-logo"
          />
          <Image
            className="navbar-brand-sticky"
            src="/assets/img/logo/logo-sacode.png"
            width={50}
            height={50}
            alt="sticky brand-logo"
          />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="navbarToggler"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-inner">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="navbarToggler"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/kursus"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-laptop-code"></i> Kursus
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="dropdown-submenu">
                    <Link
                      className="dropdown-item dropdown-toggle"
                      href="javascript"
                    >
                      Kelas Offline
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/kursus-html-css">
                          HTML, CSS
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/kursus-php-mysql"
                        >
                          PHP & MySQL
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/kelas-online">
                      Kelas Online
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/kopicoding">
                      KoPiCoding
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/pelatihan">
                  <i className="fas fa-book-open"></i> Pelatihan
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    className="svg-inline--fa fa-globe fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="globe"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                    ></path>
                  </svg>{" "}
                  <i className="fas fa-globe"></i>
                  Komunitas
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" href="/">
                      SaCode's Weekend
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/komunitas/sacodeweekend/2023"
                        >
                          2023
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/komunitas/sacodeweekend/2022"
                        >
                          2022
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="komunitas/sacodeweekend/2021"
                        >
                          2021
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" href="/">
                      SaCode Live
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/sacode-live-2023"
                        >
                          2023
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn text-white" href="/donasi">
                  <i className="fas fa-hand-point-up"></i> Donasi
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
