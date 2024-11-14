export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props}>
    <section data-theme="dark" class="layout">
      <main class="container">
        <div class="card border-0 shadow rounded">
          <div class="headerBackground row">
            <div class="col">
              <h1>Chaotischer Catalysator Stipendien</h1>
            </div>
          </div>
          <section class="shadow header">
            <nav class="navbar">
              <a href="/">Startseite</a>
              <a class="active" href="/blog/page/1/">
                Blog
              </a>
            </nav>
          </section>
          <div class="card-body content">
            <main class="p-md-4">
              {children}
              <hr />
            </main>
          </div>
        </div>
      </main>
      <footer class="p-4">
        <props.comp.Footer {...props} />
      </footer>
    </section>
  </props.comp.Base>
);
