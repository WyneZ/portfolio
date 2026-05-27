import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'portfolio';
  currentLang = signal<'en' | 'my'>('en');

  translations = {
    en: {
      navHome: 'About',
      navExperience: 'Experience',
      navSkills: 'Stack',
      navProjects: 'Systems',
      navContact: 'Contact',
      heroTag: 'Full-Stack Software Engineer',
      heroTitle: "Wyne Kyaw Han [Krait]",
      heroSubtitle: 'Specializing in robust backend architectures, complex business logic, and database optimization. Passionate about system design, scalable APIs, and performance-critical operations.',
      heroCta: 'Explore Engineering Docs',
      expTitle: 'My Working Experience',
      skillsTitle: 'Technical Stack',
      projectsTitle: 'Built Systems',
      contactTitle: "Get in Touch",
      contactSubtitle: 'Interested in backend roles, system architecture design, and database-intensive projects in Dubai, Europe, or Germany.',
      contactBtn: 'Send Message'
    },
    my: {
      navHome: 'အကြောင်း',
      navExperience: 'အတွေ့အကြုံ',
      navSkills: 'နည်းပညာများ',
      navProjects: 'စနစ်များ',
      navContact: 'ဆက်သွယ်ရန်',
      heroTag: 'Backend-Focused Developer',
      heroTitle: "ဝိုင်းကျော်ဟံ",
      heroSubtitle: 'ခိုင်မာတဲ့ backend architecture တွေ၊ ရှုပ်ထွေးတဲ့ business logic တွေနဲ့ database optimization တွေမှာ အထူးပြုပါတယ်။ System design နဲ့ scalable API တွေ တည်ဆောက်ရတာကို ဝါသနာပါပါတယ်။',
      heroCta: 'လုပ်ဆောင်ချက်များကို ကြည့်ရန်',
      expTitle: 'လုပ်ငန်းအတွေ့အကြုံ',
      skillsTitle: 'နည်းပညာများ',
      projectsTitle: 'တည်ဆောက်ခဲ့သော စနစ်များ',
      contactTitle: 'ဆက်သွယ်ရန်',
      contactSubtitle: 'Backend roles များ၊ system architecture design များနှင့် database-intensive projects များအတွက် ဆက်သွယ်နိုင်ပါတယ်။',
      contactBtn: 'Message ပို့ရန်'
    }
  };

  t = computed(() => this.translations[this.currentLang()]);

  experiences = signal([
    {
      role: 'Full-Stack Developer (Backend Focus)',
      company: 'Myanmar Information Technology Pte Ltd',
      period: 'Feb 2025 – Present',
      description: 'Designing and optimizing PostgreSQL stored procedures and functions for payroll and attendance calculation. Implementing high-performance REST APIs with NestJS.',
      skills: ['Angular', 'Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'Database Design', 'Jest']
    },
    {
      role: 'IoT Backend Developer',
      company: 'National Cyber City Co., Ltd',
      period: 'Sep 2024 – Feb 2025',
      description: 'Developed core backend logic for IoT hubs on Raspberry Pi. Implemented real-time data communication protocols and hardware-software integration.',
      skills: ['C++', 'Python', 'Raspberry Pi', 'Linux', 'MQTT', 'IoT Protocols', 'Socket.io']
    }
  ]);

  skills = signal([
    { name: 'TypeScript', icon: '/typescript.png', level: 85 },
    { name: 'JavaScript', icon: '/js.png', level: 85 },
    { name: 'Angular', icon: '/angular.svg', level: 90 },
    { name: 'Node.js', icon: '/nodejs.svg', level: 90 },
    { name: 'Express', icon: '/express.png', level: 100 },
    { name: 'NestJS', icon: '/nestjs.svg', level: 90 },
    { name: 'Python', icon: '/python.png', level: 80 },
    { name: 'Django', icon: '/django.svg', level: 80 },
    { name: 'FastAPI', icon: '/fastapi.svg', level: 80 },
    { name: 'C++', icon: '/C++.png', level: 75 },
    { name: 'PostgreSQL', icon: '/postgre.png', level: 95 },
    { name: 'MongoDB', icon: '/mongodb.svg', level: 85 },
    { name: 'Raspberry Pi', icon: '/RaspberryPi.png', level: 75 },
    { name: 'Linux', icon: '/linux.png', level: 75 },
    { name: 'Docker', icon: '/docker.png', level: 75 }
  ]);

  projects = signal([
    {
      title: 'Automatic Number Plate Recognition (ANPR) System',
      description: 'Automatic Number Plate Recognition system focusing on processing efficiency and live stream optimization. Developed with YOLOv8 for high-speed detection and a custom interface for real-time monitoring.',
      icon: '🔍',
      repoLink: 'https://github.com/WyneZ/ANPR-Desktop-App',
      tech: 'Python, Computer Vision, YOLOv8, CustomTkinter, SQLite',
      video: 'anpr-test-vid-1.mp4'
    },
    {
      title: 'Online Auction System',
      description: 'Built with rigorous validation logic, bid race-condition prevention, and automated expiration handling. Features include real-time bid updates and secure transaction workflows.',
      icon: '/eagle1.jpg',
      repoLink: 'https://github.com/WyneZ/Django_Online_Auction_System',
      deployLink: 'https://wynez.pythonanywhere.com/',
      tech: 'Python, JavaScript, Django, SQLite',
      image: 'auction.jpg'
    },
    // {
    //   title: 'IoT Environmental Hub',
    //   description: 'Reliable backend services for sensor data aggregation and remote hardware control. Implemented central hub logic on Raspberry Pi to bridge hardware and cloud dashboards.',
    //   icon: '📡',
    //   link: '#',
    //   tech: 'Pyt, Raspberry Pi, MQTT, C++',
    //   image: 'iot.jpg'
    // }
  ]);

  toggleLang() {
    this.currentLang.update(l => l === 'en' ? 'my' : 'en');
  }
}
