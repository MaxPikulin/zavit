import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//TODO: наче зрозумів проблему, при кожній зміні(кліку) оновлюються всі елементи і плюс викликається функція яка вертає дату. переробити функцію і слідкувати за рендерінгом.

ReactDOM.render(<App />, document.getElementById('root'));