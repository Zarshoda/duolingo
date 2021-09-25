import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const questions = [
    { frenchText: "Bonjour", answer: "Здравствуйте" },
    { frenchText: "Bonne nuit", answer: "Спокойной ночи" },
    { frenchText: "J'ai 19 ans", answer: "Мне 19 лет" },
    { frenchText: "J'etudie a l'universite", answer: "Я учусь в университете" },
    { frenchText: "Passe une bonne journee", answer: "Хорошего дня" }
]

export default function French() {

    const [answer, setAnswer] = useState("");
    const [natija, setNatija] = useState("");
    const [id, setId] = useState(0);
    const [next, setNext] = useState("d-none");

    const input = (e) => {
        setAnswer(e.target.value)
    }

    const check = () => {
        if (answer === questions[id].answer) {
            setNatija(<FontAwesomeIcon icon={faCheck} className="text-success" />);
            setNext("")
        }
        else {
            setNatija(<FontAwesomeIcon icon={faTimes} className="text-danger" />)
        }
    }

    const nextQues = () => {
        setAnswer("");
        setNatija("");
        setId(id + 1);
        setNext("d-none");
        document.getElementById('input').value = "";
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-sm-12 m-auto mt-5">
                    <div className="carddd text-white">
                        <p className="fs-2 fw-bold">Введите фразу</p>
                        <div className="d-flex sec1 mt-5">
                            <img src="https://i.pinimg.com/originals/b5/b3/11/b5b311b510298479a0d138beac652e71.png" alt="" />
                            <div className="text">{questions[id].frenchText}</div>
                        </div>
                        <div className="d-flex">
                            <input id="input" className="my-4" type="text" placeholder="Введите перевод на русский" onChange={input} />
                            <div className="m-auto fs-2">{natija}</div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <button className="button">ПРОПУСТИТЬ</button>
                            <button className="button" onClick={check}>ПРОВЕРИТЬ</button>
                            <button className={'button ' + next} onClick={nextQues}>СЛЕДУЮЩИЙ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}