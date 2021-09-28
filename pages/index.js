import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@material-ui/core";
import { useState } from "react";
export default function Home() {

  const [lang, setLang] = useState("d-none");

  const change = () => {
    if (lang == 'd-none') setLang("");
    else setLang("d-none")
  }

  return (
    <div>
      <header className="d-flex justify-content-between align-items-center py-4 px-5 header">
        <img className="d-none d-lg-flex" src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg" alt="" />
        <button className="text-white fw-bold m-0" onClick={change}>ЯЗЫК САЙТА: РУССКИЙ <FontAwesomeIcon className="icon" icon={faAngleDown} /> </button>
      </header>
      <div className={lang + " langs"}>
        <ul>
          <li>Русский</li>
          <li>Английский</li>
          <li>Французский</li>
        </ul>
      </div>
      <div className="container">
        <img className="d-block m-auto d-lg-none w-25 mt-5" src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg" alt="" />
        <div className="row mb-5">
          <div className="col-lg-4 col-md-12">
            <div className="cardd">
              <img className="d-block m-auto mt-4" src="https://static.wixstatic.com/media/2cd43b_af35a03a70e144ddba269287704a6465~mv2.png/v1/fill/w_256,h_256,q_90/2cd43b_af35a03a70e144ddba269287704a6465~mv2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="cardd">
              <p className="fw-bold fs-2 text-align-center mb-5">
                Учите языки бесплатно, весело и эффективно!
              </p>
              <button className="d-block m-auto my-3 start but">
                <Link href="/english">
                  <a>
                    НАЧАТЬ
                  </a>
                </Link>
              </button>
              <button className="d-block m-auto yet">У МЕНЯ УЖЕ ЕСТЬ АККАУНТ</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-flex languages py-3 d-none">
        <button>
          <Link href="/english">
            <a>
              АНГЛИЙСКИЙ
            </a>
          </Link>
        </button>
        <button>
          <Link href="/french">
            <a>
              ФРАНЦУЗСКИЙ
            </a>
          </Link>
        </button>
      </div>
    </div >
  )
}
