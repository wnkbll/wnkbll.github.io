<script>
  import { articleData } from "$lib/articles/czech/data";
</script>

<div class="container">
  <header>
    <h1>«Осень народов» в Чехословакии: 11 дней Бархатной революции</h1>
  </header>

  <main>
    <p>
      «Бархатная революция» 1989 года в Чехословакии — один из самых стремительных
      переломов в истории XX века. В то время как в Польше процесс декоммунизации зрел
      годами, а в Румынии закончился трагедией, в Праге тоталитарный режим рухнул всего
      за одиннадцать дней.
    </p>

    <p>
      События начались с мирного студенческого марша, который был жестоко разогнан
      полицией. Это стало искрой, зажегшей массовое гражданское неповиновение по всей
      стране, где главным оружием протестующих стали не камни, а звон связок ключей.
    </p>

    <div class="gallery">
      <div class="gallery-item">
        <img
          class="gallery-img"
          src={articleData.pragueImg}
          alt="Полиция с щитами противostоит протестующим"
        />
        <div class="gallery-caption">
          Разгон студенческой демонстрации на Национальном проспекте, 17 ноября 1989
          года.
        </div>
      </div>
      <div class="gallery-item">
        <img
          class="gallery-img"
          src={articleData.vaclavImg}
          alt="Огромная толпа людей на Вацлавской площади в Праге"
        />
        <div class="gallery-caption">
          Сотни тысяч людей собираются на Вацлавской площади в Праге с требованием смены
          власти.
        </div>
      </div>
    </div>

    <h2>Анатомия крушения: Хроника транзита</h2>
    <p>
      Ключевые события, которые превратили ЧССР в свободную Федеративную Республику,
      уместились в неполные две недели ноября.
    </p>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">17 ноября 1989</div>
        <div class="timeline-title">Студенческий марш</div>
        <div class="timeline-content">
          Студенты собираются в Праге, чтобы почтить память жертв нацизма. Мирная
          демонстрация перерастает в антикоммунистический протест. На Национальном
          проспекте полиция жестоко избивает демонстрантов. Слухи о гибели студента
          становятся катализатором народного взрыва.
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">19 ноября 1989</div>
        <div class="timeline-title">Создание Гражданского форума</div>
        <div class="timeline-content">
          В театре «Чиногерни клуб» под руководством драматурга-диссидента Вацлава
          Гавела основывается «Гражданский форум» — широкая оппозиционная коалиция. В
          Словакии возникает аналогичное движение «Общественность против насилия».
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">20-23 ноября 1989</div>
        <div class="timeline-title">Миллионные протесты</div>
        <div class="timeline-content">
          Каждый вечер на Вацлавской площади собирается до 500 тысяч человек. Люди
          звенят ключами — этот звук становится символом «последнего звонка» для партии.
          К забастовкам подключаются рабочие, лишая режим опоры на пролетариат.
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">27 ноября 1989</div>
        <div class="timeline-title">Всеобщая забастовка</div>
        <div class="timeline-content">
          Вся страна замирает на два часа под лозунгом «Конец правления одной партии».
          Забастовку поддерживает 75% населения. Поняв, что армия и полиция не будут
          стрелять в рабочих, руководство Коммунистической партии признает поражение.
        </div>
      </div>
    </div>

    <h2>Три фактора успеха «Бархатного» сценария</h2>
    <p>
      Почему чехословацкая «Осень народов» прошла так быстро и гладко? Эксперты выделяют
      три ключевые причины:
    </p>

    <ul class="factors-list">
      <li>
        <strong>Доктрина Синатры.</strong> Руководство СССР официально отказалось от военного
        вмешательства во внутренние дела союзников. Советские войска, дислоцированные в Чехословакии,
        получили строгий приказ оставаться в казармах.
      </li>
      <li>
        <strong>Готовность интеллектуальной элиты.</strong> В отличие от других стран, оппозиция
        имела четкую структуру и авторитетных лидеров (подписантов «Хартии-77»), готовых немедленно
        взять власть и сформировать правительство.
      </li>
      <li>
        <strong>Полная изоляция режима.</strong> В последние дни КПЧ пыталась созвать «народные
        дружины» из рабочих, но те массово перешли на сторону студентов. Режим остался без
        исполнителей собственной воли.
      </li>
    </ul>

    <blockquote>
      <p>
        <strong>Главный итог:</strong> Уже 29 декабря 1989 года парламент единогласно избрал
        Вацлава Гавела президентом. Чехия доказала, что для демонтажа жесткой системы иногда
        достаточно гражданского неповиновения и звона ключей в карманах сотен тысяч свободных
        людей.
      </p>
    </blockquote>
  </main>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  header {
    border-bottom: 3px solid #a33835;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }
  h1 {
    font-size: 28px;
    color: #1a252f;
    margin: 0 0 10px 0;
    line-height: 1.3;
  }
  p {
    margin: 0 0 20px 0;
    text-align: justify;
  }
  .gallery {
    margin: 30px 0;
    text-align: center;
  }
  .gallery-item {
    display: inline-block;
    width: 48%;
    vertical-align: top;
    margin-right: 2%;
    background: #fff;
    border: 1px solid #e1e8ed;
    border-radius: 6px;
    padding: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    text-align: left;
  }
  .gallery-item:last-child {
    margin-right: 0;
  }
  .gallery-img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 4px;
    background-color: #eaeaea;
  }
  .gallery-caption {
    font-size: 13px;
    color: #555;
    margin-top: 10px;
    line-height: 1.4;
  }
  h2 {
    font-size: 22px;
    color: #a33835;
    margin: 40px 0 20px 0;
    border-left: 4px solid #a33835;
    padding-left: 12px;
  }
  /* Таймлайн */
  .timeline {
    border-left: 2px solid #e1e8ed;
    padding-left: 20px;
    margin: 30px 0 30px 10px;
  }
  .timeline-item {
    position: relative;
    margin-bottom: 30px;
  }
  .timeline-item:last-child {
    margin-bottom: 0;
  }
  .timeline-badge {
    position: absolute;
    left: -31px;
    top: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #a33835;
    border: 4px solid #fdfbf7;
  }
  .timeline-date {
    font-weight: bold;
    color: #a33835;
    font-size: 14px;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .timeline-title {
    font-size: 16px;
    font-weight: bold;
    color: #1a252f;
    margin-bottom: 8px;
  }
  .timeline-content {
    font-size: 15px;
    color: #34495e;
    text-align: justify;
  }
  /* Список факторов */
  .factors-list {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }
  .factors-list li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 15px;
    text-align: justify;
  }
  .factors-list li::before {
    content: "■";
    position: absolute;
    left: 0;
    color: #a33835;
    font-size: 14px;
    top: -1px;
  }
  .factors-list strong {
    color: #1a252f;
  }
  blockquote {
    background: #f4ece1;
    border-left: 4px solid #a33835;
    margin: 40px 0 20px 0;
    padding: 20px;
    border-radius: 0 6px 6px 0;
  }
  blockquote p {
    margin: 0;
    font-style: italic;
    color: #1a252f;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
  }
  @media (max-width: 600px) {
    .gallery-item {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    .gallery-item:last-child {
      margin-bottom: 0;
    }
  }
</style>
