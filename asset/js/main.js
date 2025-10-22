AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 2000);
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.glassy-nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function () {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const teamMembers = [
    {
        id: 1,
        name: "Rumeshi Bandara",
        role: "Team Leader",
        description: "System architecture and project management.",
        image: "asset/image/Rumeshi.jpg",
        isLeader: true,
        padding: "0px 0px 15px 0px"
    },
    {
        id: 2,
        name: "Rasika Madushanka",
        role: "Business Analyst",
        description: "Specializes in process optimization and requirement analysis for complex systems.",
        image: "asset/image/Rasika.jpg",
        isLeader: false,
        padding: "0px 0px 200px 0px"
    },
    {
        id: 3,
        name: "Sahan Samaravicrama",
        role: "Project Manager",
        description: "Expert in agile methodologies and ensuring timely project delivery.",
        image: "asset/image/sahan.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    },
    {
        id: 4,
        name: "Amila Suranjith",
        role: "Senior Developer",
        description: "Full-stack developer with expertise in modern web technologies.",
        image: "asset/image/amila.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    },
    {
        id: 5,
        name: "Isuru Deemantha",
        role: "UX/UI Designer",
        description: "Creates intuitive and engaging user experiences for digital products.",
        image: "asset/image/isuru.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    },
    {
        id: 6,
        name: "Jaya Shankar Karan",
        role: "Data Analyst",
        description: "Transforms complex data into actionable insights for decision making.",
        image: "asset/image/karan.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    },
    {
        id: 7,
        name: "Sarasi Prarthana",
        role: "System Architect",
        description: "Designs scalable and robust system architectures for enterprise solutions.",
        image: "asset/image/sarasi.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    },
    {
        id: 8,
        name: "Shwetha Lokugamage",
        role: "Quality Assurance",
        description: "Ensures product quality through comprehensive testing methodologies.",
        image: "asset/image/shwetha.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    },
    {
        id: 9,
        name: "Udara Dewshan",
        role: "DevOps Engineer",
        description: "Implements CI/CD pipelines and cloud infrastructure solutions.",
        image: "asset/image/udara.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    },
    {
        id: 10,
        name: "Wasuda Sandaruwan",
        role: "Frontend Developer",
        description: "Specializes in creating responsive and performant user interfaces.",
        image: "asset/image/wasuda.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    },
    {
        id: 11,
        name: "Dilan Dissanayake",
        role: "Backend Developer",
        description: "Builds robust server-side applications and API integrations.",
        image: "asset/image/dilan.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    },
    {
        id: 12,
        name: "Praveen Wijewardana",
        role: "Technical Writer",
        description: "Creates comprehensive documentation for systems and processes.",
        image: "asset/image/praveen.jpg",
        isLeader: false,
        padding: "0px 0px 0px 0px"
    }
];

const teamTrack = document.getElementById('teamTrack');
const panelGrid = document.getElementById('panelGrid');

teamMembers.forEach(member => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'team-member';
    carouselItem.innerHTML = `
        <div class="member-image" style="padding: ${member.padding}">
            <img src="${member.image}" alt="${member.name}">
            ${member.isLeader ? '<div class="leader-badge">Leader</div>' : ''}
        </div>
        <div class="member-info">
            <h5 class="mb-1">${member.name}</h5>
            <p class="member-role">${member.role}</p>
            <p class="member-description">${member.description}</p>
        </div>
    `;
    teamTrack.appendChild(carouselItem);

    const panelItem = document.createElement('div');
    panelItem.className = 'panel-member';
    panelItem.innerHTML = `
        <div class="member-image" style="padding: ${member.padding}">
            <img src="${member.image}" alt="${member.name}">
            ${member.isLeader ? '<div class="leader-badge">Leader</div>' : ''}
        </div>
        <div class="member-info">
            <h5 class="mb-1">${member.name}</h5>
            <p class="member-role">${member.role}</p>
            <p class="member-description">${member.description}</p>
        </div>
    `;
    panelGrid.appendChild(panelItem);
});

let currentPosition = 0;
const slideWidth = 330;
const totalSlides = teamMembers.length;
const visibleSlides = Math.floor(window.innerWidth / slideWidth);

function autoSlide() {
    currentPosition -= slideWidth;

    if (Math.abs(currentPosition) >= (totalSlides - visibleSlides) * slideWidth) {
        currentPosition = 0;
    }

    teamTrack.style.transform = `translateX(${currentPosition}px)`;
}

let slideInterval = setInterval(autoSlide, 3000);

teamTrack.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

teamTrack.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 3000);
});

const viewAllTeamBtn = document.getElementById('viewAllTeam');
const teamPanel = document.getElementById('teamPanel');
const closePanelBtn = document.getElementById('closePanel');

viewAllTeamBtn.addEventListener('click', () => {
    teamPanel.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closePanelBtn.addEventListener('click', () => {
    teamPanel.style.display = 'none';
    document.body.style.overflow = 'auto';
});

teamPanel.addEventListener('click', (e) => {
    if (e.target === teamPanel) {
        teamPanel.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && teamPanel.style.display === 'block') {
        teamPanel.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

const viewAllProjectsBtn = document.getElementById('viewAllProjects');
const projectDetailPanel = document.getElementById('projectDetailPanel');
const closeProjectDetailPanelBtn = document.getElementById('closeProjectDetailPanel');

viewAllProjectsBtn.addEventListener('click', () => {
    projectDetailPanel.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeProjectDetailPanelBtn.addEventListener('click', () => {
    projectDetailPanel.style.display = 'none';
    document.body.style.overflow = 'auto';
});

projectDetailPanel.addEventListener('click', (e) => {
    if (e.target === projectDetailPanel) {
        projectDetailPanel.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectDetailPanel.style.display === 'block') {
        projectDetailPanel.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

function initAboutCarousel() {
    const aboutCarouselTrack = document.getElementById('aboutCarouselTrack');
    const aboutIndicators = document.querySelectorAll('.about-carousel-indicator');
    
    if (!aboutCarouselTrack) return;
    
    let currentSlide = 0;
    let aboutSlideInterval = null;
    let isCarouselVisible = false;

    const images = [
        'asset/image/teamPic.jpg',
        'asset/image/image2.jpg'
    ];
    
    aboutCarouselTrack.innerHTML = '';
    
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'about-carousel-slide';
        slide.innerHTML = `<img src="${image}" alt="About INNOSOLIX ${index + 1}">`;
        aboutCarouselTrack.appendChild(slide);
    });
    
    function nextAboutSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        updateAboutCarousel();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateAboutCarousel();
    }
    
    function updateAboutCarousel() {
        aboutCarouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        aboutIndicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    function startCarousel() {
        if (aboutSlideInterval) {
            clearInterval(aboutSlideInterval);
        }
        aboutSlideInterval = setInterval(nextAboutSlide, 3000);
    }
    
    function stopCarousel() {
        if (aboutSlideInterval) {
            clearInterval(aboutSlideInterval);
            aboutSlideInterval = null;
        }
    }
    
    function checkCarouselVisibility() {
        const carouselRect = aboutCarouselTrack.getBoundingClientRect();
        const isVisible = (
            carouselRect.top < window.innerHeight * 0.8 &&
            carouselRect.bottom > window.innerHeight * 0.2
        );
        
        if (isVisible && !isCarouselVisible) {
            isCarouselVisible = true;
            startCarousel();
        } else if (!isVisible && isCarouselVisible) {
            isCarouselVisible = false;
            stopCarousel();
        }
    }
    
    aboutIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopCarousel();
            goToSlide(index);
            startCarousel();
        });
    });
    
    aboutCarouselTrack.addEventListener('mouseenter', () => {
        stopCarousel();
    });
    
    aboutCarouselTrack.addEventListener('mouseleave', () => {
        if (isCarouselVisible) {
            startCarousel();
        }
    });
    
    window.addEventListener('scroll', checkCarouselVisibility);
    window.addEventListener('resize', checkCarouselVisibility);
    
    checkCarouselVisibility();
}

document.addEventListener('DOMContentLoaded', initAboutCarousel);