const Home = {
    template: `
      <section class="home">
        <h2>Bem-vindo à Impacto Digital</h2>
        <p>Somos especialistas em transformar a presença online do seu negócio.</p>
        <img src="https://via.placeholder.com/800x400?text=Marketing+Digital" alt="Marketing Digital">
      </section>
    `
  };
  
  const About = {
    template: `
      <section class="about">
        <h2>Sobre Nós</h2>
        <p>A Impacto Digital é uma agência focada em inovação e resultados. Com uma equipe dedicada, ajudamos empresas a alcançarem seu público-alvo de forma eficiente.</p>
        <img src="https://via.placeholder.com/800x400?text=Equipe+Criativa" alt="Equipe Criativa">
      </section>
    `
  };
  
  const Contact = {
    template: `
      <section class="contact">
        <h2>Entre em Contato</h2>
        <p>Tem uma ideia? Vamos conversar!</p>
        <form @submit.prevent="submitForm">
          <label for="name">Nome:</label>
          <input type="text" id="name" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" required>
          
          <label for="message">Mensagem:</label>
          <textarea id="message" rows="4" required></textarea>
          
          <button type="submit">Enviar</button>
        </form>
      </section>
    `,
    methods: {
      submitForm() {
        alert("Mensagem enviada com sucesso!");
      }
    }
  };
  
  const app = Vue.createApp({
    data() {
      return {
        currentPage: 'home'
      };
    },
    components: {
      home: Home,
      about: About,
      contact: Contact
    }
  });
  
  app.mount('#app');
  