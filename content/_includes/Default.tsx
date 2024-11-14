export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props}>
    <section data-theme="dark" class="layout">
      <main class="container">
        <div class="card border-0 shadow rounded">
          <div class="headerBackground row">
            <div class="col">
              <h1 class="headLine">Call for Stories</h1>
              <p>{props.text.subtitle}</p>
              <ul class="list-inline">
                {props.alternates?.map((alt) => (
                  <li class="list-inline-item">
                    <a
                      class={
                        alt.lang === props.lang
                          ? "fw-bold text-white btn btn-outline-light"
                          : "text-white btn"
                      }
                      aria-current={alt.lang === props.lang ? "page" : "false"}
                      href={alt.url}
                    >
                      {alt.lang}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <props.comp.Header {...props} />
          <div class="card-body content">
            <main class="p-md-4">{children}</main>
          </div>
        </div>
      </main>
      <footer class="p-4">
        <props.comp.Footer {...props} />
      </footer>
    </section>
  </props.comp.Base>
);
