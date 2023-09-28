# Серверна частина проекту PowerPulse Fitness&Diet

## Призначення

Для налагодження взаємодії сайту (frontend частини) з базою даних.

## Технології

Проєкт створений на платформі [Node.js](https://nodejs.org/en/docs/)

з використанням фреймворку [Express](https://devdocs.io/express/)

Зв'язок з базою даних забезпечує бібліотека [mongoose](https://mongoosejs.com/docs/documents.html)

через систему керування базами даних [MongoDB](https://www.mongodb.com/docs/)

## Опис API

Детально робота з ендпоінтами описана в документації [Power Pulse API](https://power-pulse.onrender.com/api/api-docs/#/).

Документація проєкту створена за допомогою пакета [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

### auth

Запити авторизації

- POST (публічний), **/api/auth/register** - реєстрація нового користувача в системі;
- POST (публічний), **/api/auth/login** - авторизація існуючого користувача в системі;
- POST (приватний), **/api/auth/logout** - вихід користувача з системи;
- GET (приватний), **/api/auth/current** - отримання інформації про поточного користувача;
- GET (публічний), **/api/auth/oauth** - отримання URL для авторизації через Google.

### users

Приватні запити для роботи з даними користувача

- POST, **/api/users/params** - додавання параметрів користувача в систему;
- PUT, **/api/users/params** - оновлення параметрів користувача в системі;
- GET, **/api/users/params** - отримання параметрів користувача;
- PATCH, **/api/users/username** - оновлення імені користувача в системі;
- PATCH, **/api/users/avatars** - оновлення аватара користувача в системі.

### exercises

Приватні запити на одержання інформації про тренування

- GET, **/api/exercises** - список всіх доступних вправ і тренувань, які доступні у застосунку. Інформація про кожну вправу включає такі дані, як назва вправи, область тіла, яку вона залучає, обладнання, яке потрібно для її виконання, URL з гіфкою, тривалість та кількість спалених калорій;
- GET, **/api/exercises/body-parts** - список доступних областей тіла, які можуть бути використані для фільтрації вправ. Наприклад, користувач може обрати вправи для розвитку конкретних груп м'язів або областей тіла;
- GET, **/api/exercises/muscles** - список м'язів, які можуть бути використані для фільтрації вправ. Він надає інформацію про різні м'язні групи, які задіяні в різних вправах;
- GET, **/api/exercises/equipment** - повертає список обладнання, яке може бути використано для виконання вправ. Він допомагає користувачам знайти вправи, які можна виконати з використанням конкретного обладнання або без нього.

### products

Приватні запити на одержання інформації про харчування

- GET, **/api/products/categories** - список усіх доступних категорій продуктів;
- GET, **/api/products/byBloodType** - список продуктів, які рекомендовано або не рекомендовано для конкретної групи крові користувача.

### diary

Приватні запити для роботи з щоденником

- GET, **/api/diary/meal{?date}** - інформація про спожиті користувачем продукти за обрану дату;
- GET, **/api/diary/workout{?date}** - інформація про виконані користувачем вправи за обрану дату;
- POST, **/api/diary/meal** - збереження продукту, що був спожитий користувачем, та його закріплення за обраною датою;
- POST, **/api/diary/workout** - збереження вправи, що була виконана користувачем, та її закріплення за обраною датою;
- DELETE, **/api/diary/meal/{id}** - видалення продукту, що був спожитий користувачем в обрану дату;
- DELETE, **/api/diary/workout/{id}** - видалення вправи, що була виконана користувачем в обрану дату.

### statistics

Публічні запити на одержання загальної статистичної інформації

- GET, **/api/statistics/users** - загальна кількість зареєстрованих у застосунку користувачів;
- GET, **/api/statistics/exercises** - загальна кількість тренувань, виконаних зареєстрованими користувачами;
- GET, **/api/statistics/workouts** - кількість відео-тренувань у застосунку;
- GET, **/api/statistics/time** - загальна кількість годин, проведених зареєстрованими користувачами за тренуванням;
- GET, **/api/statistics/calories** - загальна кількість спалених усіма зареєстрованими користувачами калорій.

## Команда розробників

Вадим Агієнко (Vadym Agienko), Team lead [linkedin](https://www.linkedin.com/in/vadym-agienko), [github](https://github.com/made-by-curiosity)

Віктор Бірук (Viktor Biruk), Scrum master [linkedin](https://www.linkedin.com/in/viktor-biruk), [github](https://github.com/vikttur)

Ігор Кулінський (Ihor Kulinskyi)
Developer
https://www.linkedin.com/in/ihor-kulinskyi
https://github.com/IhorKulinskyi

Уляна Гринишин (Uliana Hrynyshyn)
Developer
https://www.linkedin.com/in/ulianahrynyshyn
https://github.com/Uliana2022ua

Олег Власюк (Oleg Vlasiuk)
Developer
https://www.linkedin.com/in/oleg-vlasiuk-1480a6265
https://github.com/VlasiukOleg

Артем Шаповал (Artem Shapoval)
Developer
https://www.linkedin.com/in/artem-shapoval
https://github.com/TyomaShapoval

Віталій Дунюшкін (Vitaliy Dunyushkin)
Developer
https://github.com/VitaliyDunyushkin
https://www.linkedin.com/in/vitaliy-dunyushkin

Каріна Ткаченко (Karina Tkachenko)
Developer
https://www.linkedin.com/in/karina--tkachenko
https://github.com/Karina-98

Кирило Литовченко (Kirill Litovchenko)
Developer
https://www.linkedin.com/in/kirill-litovchenko
https://github.com/Oknehcvotil

Микита Слабушевський (Nikita Slabushevskiy)
Developer
https://www.linkedin.com/in/nikita-slabushevskiy
https://github.com/ArbalestARX7

Михайло Гривінський (Mykhailo Hryvinskyi)
Developer
https://www.linkedin.com/in/mykhailo-hryvinskyi
https://github.com/MishaHryvinskyi

Юрій Глушко (Yurii Hlushko)
Developer
https://www.linkedin.com/in/yurii-hlushko
https://github.com/xtxthby

Павло Пономаренко (Paul Ponomarenko)
Developer
https://www.linkedin.com/in/paul-ponomarenko
https://github.com/PaulPonomarenko
