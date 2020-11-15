# Критерии приема

- Создан репозиторий `goit-js-hw-12-countries`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на GitHub pages.
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений.
- Имена переменных и функций понятные, описательные.
- Проект собран с помощью `Webpack`.
- Код отформатирован с помощью `Prettier`.
- Добавь минимальную стилизацию.
- Есть файл `fetchCountries.js` с дефолтным экспортом функции
  `fetchCountries(searchQuery)`, возвращающей промис с массивом стран, результат
  запроса к API.

## Поиск стран

Создай небольшое приложение поиска данных о стране по ее частичному или полному
имени. Используй [Rest Countries API](https://restcountries.eu/), а именно
ендпоинт [/name](https://restcountries.eu/#api-endpoints-name), возвращающий
массив объектов стран попавших под критерий поиска.

Достаточно чтобы приложение работало для большинства стран. Некоторые страны,
такие как `Sudan`, могут создавать проблемы, поскольку название страны является
частью названия другой страны, `South Sudan`. Не нужно беспокоиться об этих
исключениях.

Интерфейс очень простой. Название страны для поиска пользователь вводит в
текстовое поле.

⚠️ **ВНИМАНИЕ!** HTTP-запросы на бекенд происходят не по сабмиту формы, формы
нет, а при наборе имени страны в инпуте, то есть по событию `input`. Но делать
HTTP-запрос при каждом нажатии клавиши нельзя, так как одновременно получится
много HTTP-запросов которые будут выполняться в непредсказуемом порядке (race
conditions). Поэтому на обработчик события необходимо применить подход
`debounce` и делать HTTP-запрос спустя `500мс` после того, как пользователь
перестал вводить текст. Используй npm-пакет
[lodash.debounce](https://www.npmjs.com/package/lodash.debounce).

Если бекенд вернул больше чем 10 стран подошедших под критерий введенный
пользователем, в интерфейсе отображается нотификация о том, что необходимо
сделать запрос более специфичным. Для оповещений используй плагин
[pnotify](https://github.com/sciactive/pnotify).
Если бекенд вернул от 2-х до 10-х стран, под инпутом отображается список имен
найденных стран.
Если бекенд вернул массив с одной страной, в интерфейсе рендерится разметка с
данными о стране: название, столица, население, языки и флаг.
