<script>
  import { articleData } from "$lib/articles/germany/data";
</script>

<div class="container">
  <header>
    <h1>«Осень народов» в ГДР: Падение Стены и конец разделенной Германии</h1>
  </header>

  <main>
    <p>
      «Осень народов» в ГДР — это один из самых драматичных и стремительных периодов в
      истории XX века. Осенью 1989 года казалось бы незыблемый коммунистический режим
      Восточной Германии рухнул под давлением собственного народа всего за несколько
      недель. Руководство СЕПГ во главе с Эрихом Хонеккером до последнего отказывалось
      от реформ, игнорируя советскую «перестройку» и глубокий внутренний кризис.
    </p>

    <p>
      Этот процесс стал ключевой частью общеевропейского падения социалистического
      блока, но именно в ГДР он завершился уникальным исходом — абсолютно мирным
      демонтажем тоталитарной системы, исчезновением самого государства с политической
      карты мира и историческим воссоединением Германии.
    </p>

    <div class="gallery">
      <div class="gallery-item">
        <img
          class="gallery-img"
          src={articleData.berlinImg}
          alt="Падение Берлинской стены 1989 год"
        />
        <div class="gallery-caption">
          Берлинцы у разрушаемой Берлинской стены на фоне Бранденбургских ворот, ноябрь
          1989 года.
        </div>
      </div>
      <div class="gallery-item">
        <img
          class="gallery-img"
          src={articleData.leipzigImg}
          alt="Понедельничные демонстрации в Лейпциге"
        />
        <div class="gallery-caption">
          Многотысячная «понедельничная демонстрация» в Лейпциге с лозунгами «Мы —
          народ!»
        </div>
      </div>
    </div>

    <h2>Хроника крушения режима</h2>
    <p>
      События осени 1989 года развивались по двум направлениям: массовое бегство граждан
      из страны через соседние государства и нарастающий внутренний протест.
    </p>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">Август — Сентябрь 1989</div>
        <div class="timeline-title">Великий исход через «Железный занавес»</div>
        <div class="timeline-content">
          Венгрия открывает границу с Австрией, и тысячи граждан ГДР устремляются на
          Запад. 30 сентября министр иностранных дел ФРГ Ганс-Дитрих Геншер объявляет
          тысячам беженцев в посольстве в Праге, что их выезд в Западную Германию
          официально разрешен.
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">9 октября 1989</div>
        <div class="timeline-title">Решающая демонстрация в Лейпциге</div>
        <div class="timeline-content">
          На улицы Лейпцига выходит более 70 000 человек. Власти стягивают войска и
          полицию, ожидая жесткого силового разгона. Однако силовики не решаются
          стрелять в безоружную толпу, скандирующую «Мы — народ!». Это становится
          поворотным моментом мирной революции.
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">9 ноября 1989</div>
        <div class="timeline-title">Падение Берлинской стены</div>
        <div class="timeline-content">
          Член Политбюро Гюнтер Шабовски ошибочно заявляет на пресс-конференции, что
          новые, свободные правила выезда за границу вступают в силу «немедленно».
          Тысячи людей устремляются к пропускным пунктам, и ошарашенные пограничники
          открывают шлагбаумы. Стена, разделявшая город 28 лет, пала.
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">18 марта 1990</div>
        <div class="timeline-title">Первые свободные выборы</div>
        <div class="timeline-content">
          СЕПГ полностью теряет монополию на власть. В ГДР проходят первые (и последние
          в ее истории) свободные парламентские выборы. Уверенную победу одерживает
          консервативный «Альянс за Германию», выступающий за скорейшее объединение с
          ФРГ.
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-badge"></div>
        <div class="timeline-date">3 октября 1990</div>
        <div class="timeline-title">Официальное воссоединение</div>
        <div class="timeline-content">
          После успешного завершения международных переговоров в формате «2+4»,
          Германская Демократическая Республика официально прекращает свое
          существование. Ее территория (пять новых земель) входит в состав Федеративной
          Республики Германия.
        </div>
      </div>
    </div>

    <h2>Три фактора успеха мирной революции</h2>
    <p>
      Анализируя крах ГДР, историки выделяют три ключевые причины, по которым казавшийся
      монолитным режим рухнул так быстро и бескровно:
    </p>

    <ul class="factors-list">
      <li>
        <strong>Отказ СССР от силового вмешательства.</strong> Михаил Горбачев дал ясно понять
        руководству СЕПГ, что советский контингент войск в Германии не будет вмешиваться во
        внутренние дела и подавлять народные выступления, лишив партийную верхушку главной
        силовой опоры.
      </li>
      <li>
        <strong>Массовость и ненасильственный характер.</strong> Протестующие (особенно на
        молитвах за мир в Лейпциге) были подчеркнуто миролюбивы. Отсутствие агрессии со стороны
        толпы парализовало волю силовиков Штази и армии — приказа стрелять в собственных безоружных
        граждан так и не последовало.
      </li>
      <li>
        <strong>Экономический и моральный тупик.</strong> Плановая экономика ГДР находилась
        на грани банкротства. Тотальный дефицит, цензура и слежка контрастировали с высоким
        уровнем жизни и свободой в ФРГ, информацию о которых граждане ГДР получали через западное
        телевидение.
      </li>
    </ul>

    <blockquote>
      <p>
        <strong>Главный итог:</strong> «Осень народов» в ГДР доказала, что даже самая жесткая
        тоталитарная система и всесильные спецслужбы бессильны, когда общество преодолевает
        страх и единодушно требует перемен. Немецкий народ вернул себе право решать свою судьбу,
        завершив эпоху холодной войны.
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
