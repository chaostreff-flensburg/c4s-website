export default ({ text }) => (
  <section class="row">
    <div class="col-auto">
      <p>
        {text.footer_slogan}{" "}
        <a href="https://ccc.de/" target="_blank">Chaos Computer Club e.V.</a>
      </p>
    </div>
    <div class="col-auto">
      <p>
        <a href="https://www.ccc.de/de/imprint" target="_blank">
          {text.footer_imprint}
          {!text.footer_imprint && <span>Impressum</span>}
        </a>{" "}
        &{" "}
        <a href="https://www.ccc.de/de/datenschutz" target="_blank">
          {text.footer_privacy}
          {!text.footer_privacy && <span>Datenschutz</span>}
        </a>
      </p>
    </div>
  </section>
);
