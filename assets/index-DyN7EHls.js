(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s=`<h1>Hello, World! I'm Rudy Soliz</h1>
<p>I'm a software developer and aspiring computer science student! I'm a professional figure outer, so if you want me to try something out, i might be able to figure it out (:</p>
<p>Below, you can check out my projects that I'm most proud of. If you want to see more, feel free to check out my Github Repositories.</p>
<h2>Arrcy</h2>
<p>repo: <a href="https://github.com/Rubyboat1207/arrcy-programming-language">here</a></p>
<p>paper: <a href="/arrcy_language.pdf">here</a></p>
<p>Put simply, Arrcy is a programming language I created. It is made for simple array processing and for me to learn how to create a programming language. It is certainly one of my most complex projects to date. It has foreach loops, mapping functions, arithmetic, function calling, and more. I sum it up well in my paper. (I promise its not that long of a read. read it! read it!) The diction in my paper may be a bit professional, but I swear I make it interesting.</p>
<h2>Change the Game (Antiques through time)</h2>
<p>repo: <a href="https://github.com/Rubyboat1207/CTG-Antiques-Through-Time">here</a></p>
<p>play it <a href="https://rubyboat1207.github.io/CTG-Antiques-Through-Time/">here</a>!</p>
<p>CTG was a school project for my sophmore year at high school, wherein we had 9 weeks to create a game and manage people. In this project, the game theme that my team decided on was &quot;Antiques through time&quot; oooo~.</p>
<h3>Story</h3>
<p>Cassie inherits an antique shop from her grandpa, and checks it out only to find that there's no more stock. She comes back with her friends Alfred and Brady to clean it up when they stumble into the basement. Plenty of boxes and empty shelves, but then cassie messes with a coo coo clock where a bird jumps out and throws them all back in time!</p>
<video style="width: 500px;" controls>
    <source src="/Cuckoo Cutscene.mp4">
</video>
<p>(thank you wonderful art team for the animation!)</p>
<p>This game is full of puzzles and 3 huge levels to complete. Some puzzles are more fair than others, this was all because of the short timeframe. Minimal testing was done, but overall this was an amazing project.</p>
<h4>My Leadership</h4>
<p>I was lead of the programming team, I already had a reputation for being the best programmer in the school. It was a very easy decision for me to be elected into this position. I also became de-facto team lead, as I created the idea for the game as well. I was very strategic with the artstyle of the game, I created a paper-mario esque style with sprite characters in a 3d world. Sprites are really simple for an inexperienced art team to draw, and my knowledge of 3D modeling would come in where the art team couldn't. In addition to creating my game, I also aided the other teams with their games as well. As one of 3 developers in the whole grade, I was pulled in almost every direction. I helped write dialogue tree systems for a visual novel. I helped fix collisions and physics issues for a 2d platformer. I helped writing movement systems for a rythm dungeon crawler. It was stressful but certainly the most fun i've had at school!</p>
`,n=document.querySelector("#app");n.innerHTML=`
  <div class="markdown">
    ${s}
  </div>
`;
