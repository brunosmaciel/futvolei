/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [timeAPontos, settimeAPontos] = useState(0);
  const [timeBPontos, settimeBPontos] = useState(0);
  const [timeCPontos, settimeCPontos] = useState(0);
  const [timeDPontos, settimeDPontos] = useState(0);
  const [timea, setTimea] = useState('');
  const [timeb, setTimeb] = useState('');
  const [timec, setTimec] = useState('');
  const [timed, setTimed] = useState('');
  useEffect(() => {
    const localstorage = localStorage.getItem('times');
    const times = JSON.parse(localstorage);
    setTimea(times.timea);
    setTimeb(times.timeb);
    setTimec(times.timec);
    setTimed(times.timed);
  }, []);
  const handleChangeA = (e) => {
    setTimea(e.target.value);
  };
  const handleChangeB = (e) => {
    setTimeb(e.target.value);
  };
  const handleChangeC = (e) => {
    setTimec(e.target.value);
  };
  const handleChangeD = (e) => {
    setTimed(e.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const times = {
      timea, timeb, timec, timed,
    };
    localStorage.setItem('times', JSON.stringify(times));
  };

  return (
    <div className="main-content">
      <div className="times">
        <input type="text" placeholder="time a" onChange={handleChangeA} value={timea} />
        <input type="text" placeholder="time b" onChange={handleChangeB} value={timeb} />
        <input type="text" placeholder="time c" onChange={handleChangeC} value={timec} />
        <input type="text" placeholder="time d" onChange={handleChangeD} value={timed} />
        <button type="submit" onClick={handleSave}>Salvar</button>
      </div>
      <div className="pontos">
        <p>{timea}</p>
        <p>{timeAPontos}</p>
        <button onClick={() => settimeAPontos(timeAPontos + 3)}>+</button>
        <button onClick={() => settimeAPontos(timeAPontos - 3)}>-</button>
      </div>
      <div className="pontos">
        <p>{timeb}</p>
        <p>{timeBPontos}</p>
        <button onClick={() => settimeBPontos(timeBPontos + 3)}>+</button>
        <button onClick={() => settimeBPontos(timeBPontos - 3)}>-</button>
      </div>
      <div className="pontos">
        <p>{timec}</p>
        <p>{timeCPontos}</p>
        <button onClick={() => settimeCPontos(timeCPontos + 3)}>+</button>
        <button onClick={() => settimeCPontos(timeCPontos - 3)}>-</button>
      </div>
      <div className="pontos">
        <p>{timed}</p>
        <p>{timeDPontos}</p>
        <button onClick={() => settimeDPontos(timeDPontos + 3)}>+</button>
        <button onClick={() => settimeDPontos(timeDPontos - 3)}>-</button>
      </div>
      <div className="">
        <div className="tabela">
          <p>{timed}</p>
          <input type="number" defaultValue={0} />
          X
          <input type="number" defaultValue={0} />
          <p>{timeb}</p>

        </div>
        <div className="tabela">
          <p>{timec}</p>
          <input type="number" defaultValue={0} />
          X
          <input type="number" defaultValue={0} />
          <p>{timea}</p>

        </div>
        <div className="tabela">
          <p>{timed}</p>
          <input type="number" defaultValue={0} />
          X
          <input type="number" defaultValue={0} />
          <p>{timea}</p>

        </div>
        <div className="tabela">
          <p>{timeb}</p>
          <input type="number" defaultValue={0} />
          X
          <input type="number" defaultValue={0} />
          <p>{timec}</p>

        </div>
        <div className="tabela">
          <p>{timed}</p>
          <input type="number" defaultValue={0} />
          X
          <input type="number" defaultValue={0} />
          <p>{timec}</p>

        </div>
        <div className="tabela">
          <p>{timea}</p>
          <input type="number" defaultValue={0} />
          X
          <input type="number" defaultValue={0} />
          <p>{timeb}</p>

        </div>

      </div>
    </div>
  );
}
