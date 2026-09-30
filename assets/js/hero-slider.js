const slides = [

    {
    title:"Cloud Infrastructure",
    desc:"Scalable AWS, Azure and Google Cloud solutions for modern businesses.",
    image:"assets/img/services/services-1.webp"
    },
    
    {
    title:"DevOps & CI/CD",
    desc:"Automate deployments with Jenkins, Docker, Kubernetes and Helm.",
    image:"assets/img/services/services-2.webp"
    },
    
    {
    title:"Kubernetes Services",
    desc:"Production-ready Kubernetes cluster deployment and management.",
    image:"assets/img/services/services-3.webp"
    },
    
    {
    title:"Monitoring & Site Reliability",
    desc:"24x7 monitoring, observability, alerting and incident management.",
    image:"assets/img/services/services-4.webp"
    },
    
    {
    title:"Cloud Security",
    desc:"Protect your infrastructure with IAM, WAF, Backup and Disaster Recovery.",
    image:"assets/img/services/services-5.webp"
    }
    
    ];
    
    let current = 0;
    
    const hero = document.getElementById("hero");
    const title = document.getElementById("hero-title");
    const desc = document.getElementById("hero-desc");
    
    function changeSlide(){
    
        current = (current + 1) % slides.length;
    
        title.style.opacity = 0;
        desc.style.opacity = 0;
    
        setTimeout(() => {
    
            hero.style.backgroundImage =
                `url(${slides[current].image})`;
    
            title.innerText = slides[current].title;
            desc.innerText = slides[current].desc;
    
            title.style.opacity = 1;
            desc.style.opacity = 1;
    
        },300);
    
    }
    
    hero.style.backgroundImage = `url(${slides[0].image})`;
    
    setInterval(changeSlide,5000);