export default ({ text }) => (
  <section class="shadow header">
    <nav class="navbar">
      <a href="#headline" class="active">{text.startpage}</a>
      <a href={text.header_apply_link}>{text.header_apply}</a>
      <a href="#faq">F.A.Q.</a>
    </nav>
  </section>
);
