import React, { useEffect } from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer';

interface props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}


export function PomodoroTimer(props: props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
  const [restTime, setRestTime] = React.useState(props.shortRestTime);
  const [timeCounting, settimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);
  var restingOrPause: string = timeCounting ? 'Pausar descanso' : 'Descanso'
  var startOrPause: string = resting ? 'Iniciar Pomodoro' : timeCounting ? 'Pause' : 'Start';
  var workingOrNotWorking: number = resting ? restTime : mainTime;
  useEffect(() => {
    if (working) {
      document.body.classList.add('working');
    } else {
      if (document.body.classList.contains('working')) document.body.classList.remove('working');

    }
  }, [working]);

  useEffect(() => {
    if (resting) {
      var domFinish = document.querySelector('.finish');
      console.log(domFinish);
      if (domFinish != null) domFinish.classList.add('hidden');
    } else {
      var domFinish = document.querySelector('.finish');
      console.log(domFinish);
      if (domFinish != null) domFinish.classList.remove('hidden');
    }
  }, [resting])
  useInterval(() => {
    resting ? setRestTime(workingOrNotWorking - 1) :
      setMainTime(workingOrNotWorking - 1);
  }, timeCounting ? 1000 : null)



  return (
    <div className='pomodoro'>
      <h2>You are: Working</h2>
      <Timer mainTime={workingOrNotWorking} />
      <div className="controls">
        <Button text={restingOrPause} onClick={() => {
          settimeCounting(!timeCounting);
          setResting(true);
        }}></Button>

        <Button text={startOrPause} onClick={() => {
          setResting(false);
          settimeCounting(!timeCounting);
          setWorking(!working);
        }}></Button>

        <Button text='Finalizar' className='finish' onClick={() => setMainTime(1500)}></Button>
      </div>
      <div className="details">
        <p> Hi, everyone</p>
        <p> Hi, assaasasas</p>

      </div>
    </div>
  );
}
