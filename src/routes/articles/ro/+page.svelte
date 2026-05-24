<script>
  import { articleData } from "$lib/articles/romania/data";
</script>

<div class="container">
  <header>
    <h1>«Осень народов» в Румынии: Самая кровавая глава революций конца XX века</h1>
  </header>

  <main>
    <p>
      Термин <strong>«Осень народов»</strong> обычно ассоциируется с мирным, бархатным демонтажем
      социалистических режимов в Центральной и Восточной Европе в 1989 году. В Польше, Чехословакии,
      ГДР и Венгрии смена власти произошла путем круглых столов, переговоров и мирных демонстраций.
    </p>

    <p>
      Но в Румынии «Осень народов» наступила с опозданием — уже глубокой зимой — и
      превратилась в самую кровавую и драматичную главу европейских революций конца XX
      века.
    </p>

    <div class="gallery">
      <div class="gallery-item">
        <img
          class="gallery-img"
          src={articleData.flagImg}
          alt="Румынский флаг с вырезанным гербом"
        />
        <div class="gallery-caption">
          Символ революции — национальный флаг Румынии, из центра которого был вырезан
          социалистический герб.
        </div>
      </div>
      <div class="gallery-item">
        <img
          class="gallery-img"
          src={articleData.tankImg}
          alt="Танки и протестующие на улицах Бухареста"
        />
        <div class="gallery-caption">
          Революционеры на танке в центре Бухареста. Декабрь 1989 года.
        </div>
      </div>
    </div>

    <h2>Анатомия румынского взрыва</h2>
    <p>
      К концу 1989 года режим Николае Чаушеску оказался в полной изоляции. Пока в СССР
      шла перестройка, а соседние страны заменяли партийных лидеров на реформаторов,
      Бухарест жестко держался за неосталинистскую модель. Крах румынского социализма
      предопределили три ключевых фактора:
    </p>

    <ul class="factors-list">
      <li>
        <strong>Сверхжесткая экономия.</strong> Чтобы выплатить внешний долг в размере $11
        млрд, Чаушеску ввел жесткие ограничения. В стране нормировались продукты питания,
        бензин, электроэнергия (свет в жилых домах давали на несколько часов в день), а отопление
        зимой фактически отсутствовало.
      </li>
      <li>
        <strong>Тотальный контроль.</strong> Спецслужба «Секуритате» создала одну из самых
        плотных сетей информаторов в Европе. Любое инакомыслие пресекалось на корню.
      </li>
      <li>
        <strong>Отсутствие альтернативы.</strong> В отличие от Польши с ее профсоюзом «Солидарность»,
        в Румынии не было организованной оппозиции или легальных контрэлит.
      </li>
    </ul>

    <h2>Хроника перелома: от Тимишоары до Бухареста</h2>
    <p>
      Декабрьские события развивались стремительно — режим, казавшийся монолитным,
      рассыпался всего за 10 дней.
    </p>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">16 декабря 1989</div>
        <div class="timeline-title">Искра в Тимишоаре</div>
        <div class="timeline-content">
          В городе Тимишоара верующие вышли на защиту протестантского пастора Ласло
          Тёкеша, которого власти пытались выселить за критику режима. Протест быстро
          перерос в антикоммунистический митинг. В город были введены войска, открывшие
          огонь по демонстрантам.
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">21 декабря 1989</div>
        <div class="timeline-title">Роковая ошибка Чаушеску</div>
        <div class="timeline-content">
          Желая продемонстрировать народную поддержку, Чаушеску созвал стотысячный
          митинг в Бухаресте. Во время его речи из толпы раздались крики «Долой!».
          Прямой эфир прервался, начались хаотичные протесты и столкновения с полицией,
          которые продолжались всю ночь.
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">22 декабря 1989</div>
        <div class="timeline-title">Бегство и переход армии</div>
        <div class="timeline-content">
          Утром протестующие прорвались к зданию ЦК. Министр обороны Василе Миля погиб
          при невыясненных обстоятельствах, после чего армия отказалась стрелять в народ
          и перешла на сторону восставших. Николае и Елена Чаушеску бежали из Бухареста
          на вертолете.
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">25 декабря 1989</div>
        <div class="timeline-title">Суд и казнь</div>
        <div class="timeline-content">
          После задержания диктатора в городе Тырговиште был организован скорый военный
          трибунал. Николае и Елена Чаушеску были признаны виновными в геноциде и
          разрушении экономики, после чего незамедлительно расстреляны. На этом активная
          фаза боев в стране прекратилась.
        </div>
      </div>
    </div>

    <h2>Специфика румынского сценария</h2>
    <p>
      Румынская революция кардинально отличалась от событий в других странах соцблока по
      нескольким параметрам:
    </p>

    <table>
      <thead>
        <tr>
          <th>Критерий</th>
          <th>«Бархатные революции» (ЧССР, ГДР, Венгрия)</th>
          <th>Румынский сценарий</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Уровень насилия</td>
          <td>Мирный (трансформация через диалог)</td>
          <td>Вооруженное восстание, уличные бои</td>
        </tr>
        <tr>
          <td>Жертвы</td>
          <td>Единичные случаи или отсутствие жертв</td>
          <td>Более 1100 погибших, тысячи раненых</td>
        </tr>
        <tr>
          <td>Судьба лидера</td>
          <td>Отставка, уход на пенсию или в оппозицию</td>
          <td>Немедленный расстрел без права на апелляцию</td>
        </tr>
        <tr>
          <td>Смена элиты</td>
          <td>К власти пришли диссиденты и правозащитники</td>
          <td>Власть переняла номенклатура «второго эшелона»</td>
        </tr>
      </tbody>
    </table>

    <blockquote>
      <p>
        <strong>Главный парадокс:</strong> Большая часть погибших (около 900 человек из
        1100) была убита <em>после</em> бегства Чаушеску 22 декабря. Страну захлестнули паника
        и дезинформация о загадочных «террористах Секуритате». Военные, гражданские ополченцы
        и полиция в хаосе часто открывали огонь друг по другу.
      </p>
    </blockquote>

    <h2>Итоги и наследие</h2>
    <p>
      Вместо классических диссидентов руководство страной взял на себя <strong
        >Фронт национального спасения (ФНС)</strong
      > во главе с Ионом Илиеску — бывшим функционером компартии, некогда опальным соратником
      Чаушеску.
    </p>

    <p>
      С одной стороны, Румыния мгновенно демонтировала тоталитарные институты: была
      распущена компартия, ликвидирована «Секуритате», возвращена многопартийность и
      свобода слова. С другой стороны, из-за того, что у власти остались люди из прежней
      системы, процесс реальной демократизации и перехода к рыночной экономике затянулся
      на все 1990-е годы, сопровождаясь шахтерскими протестами («минериадами») и
      затяжным политическим кризисом.
    </p>

    <p>
      Тем не менее, именно кровавый декабрь 1989 года стал для Румынии точкой
      невозврата, открывшей ей дорогу в НАТО и Европейский союз.
    </p>
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
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    overflow: hidden;
  }
  th,
  td {
    padding: 15px;
    border: 1px solid #e1e8ed;
    text-align: left;
    font-size: 15px;
  }
  th {
    background-color: #f4ece1;
    color: #a33835;
    font-weight: bold;
  }
  td:first-child {
    font-weight: bold;
    color: #1a252f;
    background-color: #fdfbf7;
    width: 25%;
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
    table,
    th,
    td {
      display: block;
    }
    td:first-child {
      width: 100%;
    }
  }
</style>
