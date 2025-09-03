const svgContent = `
<svg width="850" height="1100" viewBox="0 0 850 1100" xmlns="http://www.w3.org/2000/svg" style="background-color: #ffffff; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <style>
    .header { font-size: 36px; font-weight: bold; text-anchor: middle; fill: #111827; }
    .contact { font-size: 14px; text-anchor: middle; fill: #4b5563; }
    .section-title { font-size: 18px; font-weight: bold; fill: #111827; text-transform: uppercase; letter-spacing: 1px;}
    .item-title { font-size: 15px; font-weight: bold; fill: #111827; }
    .item-subtitle { font-size: 14px; font-style: italic; fill: #4b5563; }
    .item-date { font-size: 14px; text-anchor: end; fill: #4b5563; }
    .body-text { font-size: 12px; line-height: 1.5; fill: #374151; }
    .bullet { font-size: 12px; fill: #374151; }
  </style>

  <text x="425" y="60" class="header">POTHU ANKHITH</text>
  <text x="425" y="85" class="contact">ankhith.pothu@gmail.com | +1 979-324-6252</text>
  <line x1="50" y1="110" x2="800" y2="110" stroke="#d1d5db" stroke-width="1"/>

  <!-- SUMMARY -->
  <text x="50" y="150" class="section-title">Summary</text>
  <text x="50" y="175" class="body-text">
    <tspan x="50" dy="0em">An aspiring Web Developer with entry-level experience specializing in user interface design, application development, data</tspan>
    <tspan x="50" dy="1.4em">security, and continuous improvement. Adept at identifying opportunities to enhance the user experience and develop new</tspan>
    <tspan x="50" dy="1.4em">features to improve app functionality. As an undergraduate with a strong academic background in Computer science, I am eager</tspan>
    <tspan x="50" dy="1.4em">to pursue my master's program as I want to explore new frontiers in technology, collaborate with experts in the field, and make a</tspan>
    <tspan x="50" dy="1.4em">meaningful impact on society through advancements in computing and software engineering.</tspan>
  </text>
  
  <!-- EDUCATION -->
  <text x="50" y="275" class="section-title">Education</text>
  <text x="50" y="305" class="item-title">Oklahoma City university</text>
  <text x="800" y="305" class="item-date">2024-2026</text>
  <text x="50" y="325" class="item-subtitle">Master’s in Data Science</text>
  
  <text x="50" y="355" class="item-title">MALLA REDDY INSTITUTE OF ENGINEERING AND TECHNOLOGY</text>
  <text x="800" y="355" class="item-date">2020 - 2024</text>
  <text x="50" y="375" class="item-subtitle">Bachelor of Technology- Computer Science and Information Technology</text>
  <text x="70" y="395" class="bullet">• Academics: 7.3 CGPA</text>
  <text x="70" y="410" class="bullet">• Honors: Placement Coordinator of Malla Reddy Institute of Technology and Technology</text>

  <!-- EXPERIENCE -->
  <text x="50" y="450" class="section-title">Experience</text>
  <text x="50" y="480" class="item-title">BRAIN-O-VISION | web development boot-camp</text>
  <text x="800" y="480" class="item-date">Hyderabad | Oct 2022 – Nov 2022</text>
  <text x="70" y="500" class="bullet">• Implementation in HTML/CSS/AngularJS (frontend) and Node.js (backend) using node and gulp servers.</text>
  <text x="70" y="515" class="bullet">• Experienced with Git and GitHub for efficient code collaboration and version control.</text>
  <text x="70" y="530" class="bullet">• Built a website in 24 hours.</text>

  <!-- ACADEMIC PROJECTS -->
  <text x="50" y="570" class="section-title">Academic Projects</text>
  <text x="50" y="600" class="item-title">ENLIGHT</text>
  <text x="800" y="600" class="item-date">WordPress</text>
  <text x="50" y="618" class="body-text">This project is to provide an online shopping experience that is both seamless and engaging for customers while offering</text>
  <text x="50" y="633" class="body-text">robust management tools for the students.</text>

  <text x="50" y="660" class="item-title">DYNAMIC WEB SITE</text>
  <text x="800" y="660" class="item-date">SQL, JavaScript, Java, Microsoft Visual Code</text>
  <text x="50" y="678" class="body-text">This project is a simple dynamic website with the combination of SQL database. It contains login page</text>
  <text x="50" y="693" class="body-text">where user can sign up and login with those credentials.</text>

  <text x="50" y="720" class="item-title">CREDIT CARD FRAUD DETECTION USING FUZZY SEARCH AND NEURAL NETWORKS</text>
  <text x="800" y="720" class="item-date">Python</text>
  <text x="50" y="738" class="body-text">
    <tspan x="50" dy="0em">This Project Presents two-stage neuro-fuzzy expert system for credit card fraud detection. The first stage utilizes fuzzy</tspan>
    <tspan x="50" dy="1.4em">clustering and address matching to assess transaction deviation and classify it as genuine, suspicious, or fraudulent. Suspicious</tspan>
    <tspan x="50" dy="1.4em">transactions are further analyzed by a neural network in the second stage, using historical data for verification.</tspan>
  </text>
  
  <text x="50" y="800" class="item-title">ONLINE DEPRESSION DETECTION APPLICATION</text>
  <text x="800" y="800" class="item-date">Python, Support vector machine</text>
  <text x="50" y="818" class="body-text">
    <tspan x="50" dy="0em">This project we detect depression from user’s post, user can upload post in the form of text file, image file or audio file,</tspan>
    <tspan x="50" dy="1.4em">this project can help peoples who are in depression by sending motivated messages to them.</tspan>
  </text>

  <!-- CERTIFICATIONS -->
  <text x="50" y="865" class="section-title">Certifications</text>
  <text x="70" y="890" class="bullet">• Python - Hacker Rank</text>
  <text x="70" y="905" class="bullet">• Web Development Bootcamp - BRAIN-O-VISION.</text>
  <text x="70" y="920" class="bullet">• Introduction to IoT - Cisco</text>
  <text x="70" y="935" class="bullet">• JavaScript Essentials - Cisco</text>
  <text x="70" y="950" class="bullet">• Google Cloud Essentials - Google Cloud Skills Boost</text>
  <text x="450" y="890" class="bullet">• SQL and Relational Databases - Cognitive Class</text>
  <text x="450" y="905" class="bullet">• JAVA – Hacker Rank</text>
  <text x="450" y="920" class="bullet">• Build and Optimize Data Warehouses with Big Query</text>
  <text x="450" y="935" class="bullet">• Get Started with API Gateway - Google Cloud</text>

  <!-- SKILLS AND INTERESTS -->
  <text x="50" y="985" class="section-title">Skills and Interests</text>
  <text x="50" y="1010" class="body-text"><tspan font-weight="bold">Technical Skills:</tspan> Python, Java, DBMS, HTML, CSS, JavaScript, React, Figma, MongoDB, Adobe Lightroom.</text>
  <text x="50" y="1030" class="body-text"><tspan font-weight="bold">Other skills:</tspan> Leadership Skills, Time management.</text>
</svg>
`.trim();

export const resumeDataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
