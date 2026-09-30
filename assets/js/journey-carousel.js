document.addEventListener("DOMContentLoaded", () => {

    const dots = document.querySelectorAll(".journey-dot");
  
    dots.forEach((dot, index) => {
  
      dot.addEventListener("click", () => {
  
        dots.forEach(item => {
          item.classList.remove("active");
        });
  
        dot.classList.add("active");
  
        /*
         * Phase 1:
         * We are only implementing the first scene.
         *
         * Later:
         * index 0 = Elearning
         * index 1 = Training / Internship
         * index 2 = Cloud Services
         * index 3 = Web / Software Development
         * index 4 = Automation / CI/CD / Kubernetes
         * index 5 = Monitoring / Observability
         */
  
      });
  
    });
  
  });