import{r as s,j as e,u as x}from"./index-B07JRWb7.js";const j=({approach:o,challenges:a,description:r,imageName:n,imageAriaLabel:g,imagePositionStart:h=!1,impact:u,links:d=[],name:m,subheader:p,tags:b})=>{const f=h?"flex-col lg:flex-row":"flex-col lg:flex-row-reverse",[v,l]=s.useState(""),[t,y]=s.useState("impact");s.useEffect(()=>{const i=()=>{window.innerWidth>=1024?l(`url('${n}-1280.avif')`):window.innerWidth>=768?l(`url('${n}-600.avif')`):l(`url('${n}-300.avif')`)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[n]);const c=["challenges","approach","impact"];return e.jsxs("div",{"data-testid":"project-item",className:`flex gap-6 ${f}`,children:[n&&e.jsx("div",{role:"img","aria-label":g,className:"fade-in flex-none w-full lg:w-[25vw] min-h-[200px] bg-[var(--color-cyber-red-500)] bg-cover bg-no-repeat bg-center",style:{backgroundImage:v}}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("h3",{className:"text-xl font-bold",children:m}),e.jsx("div",{children:p}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold",children:"Description"}),e.jsx("div",{children:r})]}),d.length>0&&e.jsx("div",{"data-testid":"project-links",className:"flex gap-4",children:d.map(i=>e.jsx("a",{href:i.url,target:"_blank",className:"text-blue-500 underline",children:i.name},i.name))}),e.jsx("div",{className:"flex flex-wrap gap-2",children:b.map(i=>e.jsx("div",{className:"text-xs border border-cyber-red-500 bg-cyber-yellow-400 rounded-lg px-2 py-1",children:i},i))}),e.jsxs("div",{className:"flex flex-col gap-2 min-h-[40vh]",children:[e.jsx("div",{className:"flex flex-row gap-2",children:c.map((i,w)=>e.jsxs("span",{className:"flex flex-row gap-1 items-center",children:[e.jsx("button",{className:`${t===i?"bg-cyber-yellow-600 border-1":"interactive"}  p-2 rounded-sm text-xs md:text-base`,onClick:()=>y(i),children:e.jsx("span",{className:"capitalize",children:i})}),w<c.length-1&&"→"]},i))}),t==="challenges"&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold",children:"Challenges"}),e.jsx("div",{children:a})]}),t==="approach"&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold",children:"Approach"}),e.jsx("div",{children:o})]}),t==="impact"&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold",children:"Impact"}),e.jsx("div",{children:u})]})]})]})]})},I=[{name:"Contract Consultant",subheader:"Delivering High-Impact Solutions in Tight Timeframes",approach:"I refactored complex user interfaces using modern, scalable frameworks while ensuring backwards compatibility. I introduced robust testing layers, resolving previously undetected defects and improving overall system reliability. I implemented real-time text recognition using React Native Vision Camera and machine learning libraries, enabling advanced mobile functionality. Additionally, I developed interactive camera overlays and collaborated closely with designers to standardize UI components and UX patterns, ensuring consistency across projects.",challenges:"Refactoring production-critical code required extensive testing to prevent outages. Updating configurations and development standards introduced the risk of scope creep, demanding a disciplined approach to execution.",description:"In just a few months, I modernized project configurations, enhanced test coverage, and led multiple initiatives to successful on-time, on-budget completion. My work improved stability, accelerated development, and directly contributed to significant business growth.",imageAriaLabel:"Chart showing rising graphs lines and numbers",imageName:"fintech",impact:"Within three months, I delivered key functionalities that doubled financial deposits (+100%), a major milestone for the business. My work reduced test failures to zero, significantly accelerating development speed and increasing confidence in automated testing. I improved test coverage across multiple repositories by over 50%, enhancing overall software quality. By standardizing design and development patterns, I reduced engineering overhead and strengthened brand consistency across products.",tags:["Front-End","Leadership","Financial Tech (FinTech)","React Native","Mobile","AI","Modernization","Collaboration","Project Management","Knowledge Sharing","Agile Development","Quality Assurance (QA)","Playwright"]},{name:"Founder & Leader of Front-End Guild",subheader:"Excellence Through Mentorship, Collaboration, and Best Practice",approach:"I began by identifying the guild's core audience, assessing their domain-specific expertise, and defining focus areas that would provide the most immediate value. Early on, I established structured sessions covering best practices, emerging technologies, and collaborative problem-solving. Over time, I transitioned the guild into a more community-driven initiative by empowering members to lead discussions and present new ideas. Anonymous surveys were used to gather feedback and refine upcoming topics, ensuring continuous improvement for the life of the guild. To further scale the initiative, I formed a leadership panel to share responsibilities and maintain engagement, while also documenting key guidelines for sustaining long-term success.",challenges:"With a diverse group of approximately two dozen engineers at varying skill levels, ensuring engagement, relevance, and long-term value was critical. Sustaining momentum, fostering active participation, and balancing structured learning with organic discussions were key challenges.",description:"Established an ongoing mentorship and knowledge-sharing program for front-end engineers, fostering a collaborative environment where best practices were defined, refined, and adopted across the company. The guild served as a hub for technical discussions, technology demonstrations, and Q&A sessions, empowering engineers of all levels to improve their skills and contribute to higher engineering standards.",imageName:"guild",imageAriaLabel:"Lightbulb design surrounded by multicolored gears",impact:"Led to the adoption of company-wide best practices, resulting in higher quality, more standardized code across dozens of projects. Standardization accelerated onboarding for new engineers, reduced friction in cross-team collaboration, and improved overall development efficiency. The guild also facilitated informed decision-making on new technologies, enabling the team to adopt modern solutions with confidence. Its success led the executive team to replicate the model across other engineering disciplines, further elevating knowledge-sharing and engineering excellence throughout the company.",tags:["Front-End","Leadership","Mentorship","Collaboration","Project Management","Knowledge Sharing","Agile Development","Engineering Culture","Quality Assurance (QA)"]},{name:"IoT Tech Lead",subheader:"Leading cross-discipline development for an enterprise IoT solution (NDA Protected)",approach:"Planned multiple features simultaneously to minimize blockers, allowing engineers to stay productive. Maintained constant communication with designers, engineers, and stakeholders to anticipate and mitigate issues early. Led by example—writing production-ready code, reviewing PRs, and guiding engineers through technical challenges. Due to the nature of this project and contractual agreements, specific details and code samples cannot be shared publicly; however, I'm happy to discuss my contributions in general terms upon request.",challenges:"Orchestrating cross-functional collaboration to ensure seamless integration across hardware and software while avoiding development bottlenecks caused by parallel feature development. Balancing leadership responsibilities while remaining deeply involved in coding and architecture.",description:"Led a team of over 20 engineers across multiple disciplines, including front-end, back-end, hardware, design, and QA. While driving architecture and strategy, I remained hands-on—contributing directly to complex features, reviewing critical code, and mentoring engineers. Ensured smooth parallel development by breaking down large initiatives into actionable tasks, enabling efficient collaboration across teams.",imageName:"iot",imageAriaLabel:"Cybernetically styled text showing IoT, Internet of Things",impact:"Successfully delivered key IoT features under an aggressive timeline, contributing directly to securing ongoing contracts. Delivered high-stakes client demos, showcasing functional prototypes that met evolving requirements. Maintained high technical standards while adapting to shifting priorities, ensuring both strategic alignment and hands-on execution.",tags:["IoT","Fullstack","Leadership","Technical Leadership","Client Facing","Communication","Project Management","Cross-Discipline Collaboration","Agile Development","Software Architecture","Quality Assurance (QA)"]},{name:"DiDi & Smiling Johns",subheader:"small business website (deprecated)",approach:"I worked closely with the business owners to define their goals, prioritizing an engaging and personality-driven online presence. Through an iterative design process, I incorporated their feedback to create an accessible website featuring individual staff spotlights, a strong call to action, and interactive elements that highlighted the shop's welcoming atmosphere. To ensure maintainability, I implemented a custom CMS integration, allowing them to update select content safely while preserving design integrity. The final design struck a balance between individuality and brand cohesion, using color schemes, group photos, and layout consistency to unify the dual business.",challenges:"Building a website for a dual barber/salon required balancing individuality and cohesion—each stylist needed a personalized section while maintaining a unified brand identity. The business owners also wanted the ability to edit content with minimal risk, necessitating a custom CMS solution that was both flexible and easy to use. It was important to the core identity of the business that the website be inclusive and accessible, as well as accommodate a rotating staff, requiring a structure that could easily adapt to changes.",description:"This is a website I designed and coded for a local business pro-bono to help unify their branding and improve their web presence. They were looking to show each professional as an individual with their own specialties and prices, but also provide cohesion to reflect how closely they worked together. To achieve this, I focused on separating each person and providing them a card with their details while directing focus to groupshots and and increased the use of their branding colors to provide unity.",imageName:"didiAndSmilingJohns",imageAriaLabel:"Blurred photo of barbers and cutting clients hair",impact:"The website successfully increased customer engagement and boosted bookings by over 100%, giving the business a much-needed online presence. Customers frequently praised the site's design and usability, reinforcing the brand's credibility. The site remained active for several years, supporting the business until its closure due to pandemic-era challenges and ownership changes.",links:[{name:"Website (Archived)",url:"https://web.archive.org/web/20220308053756/https:/www.didiandsmilingjohns.com/"}],tags:["React","UI/UX Design","WordPress","Styled Components","Accessibility (a11y)","Responsive Design","Mobile First","CMS Integration","SEO Optimization","Web Deployment"]}],k=()=>s.useMemo(()=>I,[]),N=()=>{x();const o=k();return e.jsx("div",{className:"flex flex-col m-auto gap-6 min-h-screen p-2 md:px-6 md:py-2 bg-brand-gradient-2",children:e.jsxs("div",{className:"container-card",children:[e.jsx("h2",{className:"page-heading",children:"Professional History"}),e.jsx("div",{className:"flex flex-col gap-8",children:o.map((a,r)=>{const n={...a,imagePositionStart:!!(r%2)};return e.jsx("div",{className:"rounded-lg p-5 border-2 border-cyber-red-500 bg-cyber-yellow-500",children:e.jsx(j,{...n},a.name)},a.name)})})]})})};export{N as ProfessionalHistory,N as default};
