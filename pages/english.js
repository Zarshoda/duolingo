import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const questions = [
    { englishText: "Hello", answer: "Здравствуйте" },
    { englishText: "Good night", answer: "Спокойной ночи" },
    { englishText: "I am 19 years old", answer: "Мне 19 лет" },
    { englishText: "I study in University", answer: "Я учусь в университете" },
    { englishText: "Have a good day", answer: "Хорошего дня" }
]

export default function English() {

    const [answer, setAnswer] = useState("");
    const [natija, setNatija] = useState("");
    const [id, setId] = useState(0);
    const [next, setNext] = useState("d-none");
    const [body, setBody] = useState("");
    const [end, setEnd] = useState("d-none")

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

    const propusk = () => {
        if (id <= 3) setId(id + 1);
        else fin();
    }

    const nextQues = () => {
        if (id <= 3) {
            setAnswer("");
            setNatija("");
            setId(id + 1);
            setNext("d-none");
            document.getElementById('input').value = "";
        }
        else fin();
    }

    const fin = () => {
        setEnd("");
        setBody("d-none");
    }


    return (
        <div className="container">
            <div className={"row " + body}>
                <div className="col-lg-8 col-sm-12 m-auto mt-5">
                    <div className="carddd text-white">
                        <p className="fs-2 fw-bold">Введите фразу</p>
                        <div className="d-flex sec1 mt-5">
                            <img src="https://i.pinimg.com/originals/b5/b3/11/b5b311b510298479a0d138beac652e71.png" alt="" />
                            <div className="text">{questions[id].englishText}</div>
                        </div>
                        <div className="d-flex">
                            <input id="input" className="my-4" type="text" placeholder="Введите перевод на русский" onChange={input} />
                            <div className="m-auto fs-2">{natija}</div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <button className="button" onClick={propusk}>ПРОПУСТИТЬ</button>
                            <button className="button" onClick={check}>ПРОВЕРИТЬ</button>
                            <button className={'button ' + next} onClick={nextQues}>СЛЕДУЮЩИЙ</button>
                        </div>
                        <br /> <br /> <br />
                    </div>
                </div>
            </div>
            <div className={"text-center mt-5 " + end}>
                <h1 className="text-white">The End</h1>
            </div>
        </div>
    )
}