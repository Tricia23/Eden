<template>
  <footer id="footer" class="footer">
    <div class="footer__inner">
      <div class="footer__copyright">
        <span class="footer__copyright--text">Copyright 2019. Doggo inc</span>
      </div>
      <div class="footer__policy">
        <span class="footer__policy--text footer__policy--terms">Terms and conditions</span>
        <span class="footer__policy--text footer__policy--privacy">Privacy Policy</span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: inherit;
  bottom: 0;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%;
  overflow: hidden;
}
.footer__inner {
  margin: auto;
  padding: 1rem;
  text-align: center;
  display: flex;
  margin: auto;
  justify-content: space-between;
}
.footer__copyright--text {
  color: #564f6f;
  font-size: 10px;

  display: inline-block;
  margin-bottom: 10px;
}
.footer__policy--text {
  color: #564f6f;
  font-size: 10px;
  display: inline-block;
  margin-bottom: 10px;
}
.footer__policy--text {
  display: block;
}
.footer__policy--privacy {
  display: none;
}

@media (min-width: 768px) {
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;
    overflow: hidden;
  }
  .footer__inner {
    width: 70%;
    padding: 3rem;
  }

  .footer__copyright--text {
    display: inline-block;
    margin-right: 2rem;
    font-size: 12px;
  }

  .footer__policy--text {
    display: inline-block;
    margin-left: 2rem;
    font-size: 12px;
  }

  .footer__policy--text .footer__policy--terms {
    margin-right: 2rem;
  }
}
</style>
