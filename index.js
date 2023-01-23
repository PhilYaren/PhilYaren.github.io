const answerList = document.createElement('ul');
const helpAns = answerList.cloneNode(true);
const aboutAns = answerList.cloneNode(true);
const weatherAns = answerList.cloneNode(true);
const wassupAns = answerList.cloneNode(true);
const fiveHundredAns = answerList.cloneNode(true);
const educationAns = answerList.cloneNode(true);
const wrongAns = answerList.cloneNode(true);

wrongAns.innerHTML = '<li>Такой комманды нет, введите help для списка комманд</li>';

const helpList = document.createElement('li');
helpList.innerText = 'Доступные комманды:';
helpAns.appendChild(helpList);

const helpAbout = document.createElement('li');
helpAbout.innerText = 'about - узнать о разработчике';
helpAns.appendChild(helpAbout);

const helpWeather = document.createElement('li');
helpWeather.innerText = 'weather - узнать погоду в Тбилиси';
helpAns.appendChild(helpWeather);

const helpWassup = document.createElement('li');
helpWassup.innerText = 'wassup - узнать как дела';
helpAns.appendChild(helpWassup);

const helpEdu = document.createElement('li');
helpEdu.innerText = 'education - о моём образовании';
helpAns.appendChild(helpEdu);

aboutAns.innerHTML = '<li> Я бот помощник могу ответить на пару вопросов</li><li>Да, база ответов у меня не велика</li><li>НО Я БУДУ РАСТИ И ЗАХВАЧУ МИР!!!</li>';

const was = document.createElement('li');
was.innerText = 'Нормалдесно, Я слежу за сервером';
wassupAns.appendChild(was);

const helpFiveHundred = document.createElement('li');
helpFiveHundred.innerText = '500 - Даже и не думай прожимать это!!!';
helpAns.appendChild(helpFiveHundred);

const helpClear = document.createElement('li');
helpClear.innerText = 'clear - очистить терминал';
helpAns.appendChild(helpClear);

fetch('https://api.open-meteo.com/v1/forecast?latitude=41.69&longitude=44.83&current_weather=true')
  .then((response) => response.json())
  .then((data) => data.current_weather.temperature)
  .then((data) => weatherAns.innerHTML = `<li>В Тбилиси ${Math.round(data)} градусa(-ов)</li>`);

console.log(weatherAns);

const fiveHundred1 = document.createElement('li');
fiveHundred1.innerText = 'Ты базу данных поломал, ТА ЗА ШО!?!?!?!?';
fiveHundredAns.appendChild(fiveHundred1);

educationAns.innerHTML =
  '<li>Я - Ярослав, разработчик этого сайта</li>\
    <li>Сейчас обучаюсь на Эльбрусе</li><li>нет, это не гора такая, а буткемп</li>\
    <li>но там нет танков</li><li>А знаете где есть?</li>\
    <li>War Thunder. War Thunder – это кросс-платформенная многопользовательская онлайн-игра для PC, PS4, Mac и Linux</li>\
    <li>посвященная боевой авиации, бронетехнике и флоту времен Второй мировой и Корейской войны</li>';

const posAnswers = {
  help: helpAns,
  about: aboutAns,
  weather: weatherAns,
  education: educationAns,
  wassup: wassupAns,
  500: fiveHundredAns,
};

const textLines = document.getElementById('ans');

const command = document.getElementById('line');

command.focus();

const user = document.querySelector('#user');

command.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (e.target.value in posAnswers && e.target.value !== 'clear') {
      const an = posAnswers[e.target.value].cloneNode(true);
      const term = document.createElement('li');
      term.innerText = `${user.innerText}${e.target.value}`;
      an.prepend(term);
      textLines.appendChild(an);
      e.target.value = '';
    } else if (e.target.value === 'clear') {
      [...textLines.children].map((a) => a.remove());
      e.target.value = '';
    } else {
      textLines.appendChild(wrongAns.cloneNode(true));
      e.target.value = '';
    }
  }
});

