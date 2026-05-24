<script lang="ts">
  let { currentPage }: { currentPage: "home" | "articles" } = $props();
</script>

<header class="site-header">
  <div class="header-container">
    <a href="/" class="header-logo">
      Осень<span>Народов</span>
    </a>

    <nav class="main-nav">
      <ul>
        <li>
          <a href="/" class={currentPage === "home" ? "nav-link active" : "nav-link"}
            >Главная</a
          >
        </li>
        <li>
          <a
            href="/articles"
            class={currentPage === "articles" ? "nav-link active" : "nav-link"}
            >Статьи</a
          >
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .site-header {
    background-color: #ffffff;
    border-bottom: 2px solid #a33835;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .header-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo {
    font-size: 24px;
    font-weight: bold;
    color: #1a252f;
    text-decoration: none;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
  }

  .header-logo span {
    color: #a33835;
  }

  .main-nav ul {
    list-style: none;
    display: flex;
    gap: 25px;
  }

  .nav-link {
    text-decoration: none;
    color: #34495e;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
    position: relative;
  }

  .nav-link:hover {
    color: #a33835;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #a33835;
    transition: width 0.2s ease-in-out;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .nav-link.active {
    color: #a33835;
  }

  @media (max-width: 600px) {
    .header-container {
      flex-direction: column;
      gap: 15px;
    }
    .main-nav ul {
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .nav-link {
      font-size: 15px;
    }
  }
</style>
