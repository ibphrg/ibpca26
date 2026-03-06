const btnA = document.getElementById('btnAbout');
const btnH = document.getElementById('btnHobbies');
const btnF = document.getElementById('btnFaves');
const scolip = document.getElementById('scoliCry');
const pokeB = document.getElementById('shine');
let startNum = 1;

let aboutMe =
  '<h3>Ian Brown</h3>' +
  '<h1>Web Developer</h1>' +
  '<span>To be</span>' +
  '<p>Ian is a passionate, life long learner that is eager to embark on the next great chapter of his life.</p>' +
  '<p>Ian was born in Maryland, but moved to and grew up in Delaware from when he was five years old. He graduated from the University of Delaware in 2011 with a Bachelor of the Arts in the Fine Art program.</p>' +
  "<p>As someone who grew up with the internet, Ian's love of programming started small and familiar for a lot of his peers- on an up and coming website called Neopets™ that let you take basic HTML to your storefront and make it yours. This would later transition to MySpace™ making profile pages for people now using CSS.</p>" +
  '<p>As an adult, and still looking to do more, Ian went back to school and got an Associates in Computer Science at Del Tech University before ultimately landing at <span class="PHRG" title="I work here!">Power Home Remodeling Group</span> and joined their <span class="PHRG" title="This is my job!">Ninja Support Team</span> with the driving light of one day joining the PCA.</p>' +
  "<p>But first thing's first...Who's your favorite Pokémon?</p>";

let aboutHobbies =
  '<h1>Hobbies</h1>' +
  '<br>' +
  '<p>These are some things I like to <span class="strikethrough">waste</span> spend time on!</p>' +
  "<p>You can click on the name of the Hobby for a \'personal fave\' in that category</p>" +
  '<div id="infoGraph">' +
  '<a href=\"https://myanimelist.net/anime/1482/DGray-man" target="_blank" id="animeButton"><div>Anime</div></a>' +
  '<div class=\"second\"><p>When I was a young thing I got a random video tape in the mail advertising some unknown cartoon called "Pokemon". At the time it was an unheard of strange cartoon about weird creatures out of Japan. My parents were skeptical but let me and my younger brother watch it. This was widely considered a "bad move" because my love for the Anime genre started here and has not slowed or dulled in 30 years...</p></div>' +
  '<a href=\"https://killsixbilliondemons.com/\" target="_blank" id="artButton"><div>Art</div></a>' +
  '<div class=\"second\"><p>It did however lead me to get into the arts, so much so that I got my first degree in Fine Art where I developed my artistic eye and got a number of fun stories to share but that\'s for another time.</p><p>I distinctly remembering wanting to really get into it in the 3rd grade so that I could draw Goku from Dragon Ball Z, so come 8 years old it was time to get to work...</p></div>' +
  '<a href=\"https://persona.atlus.com/p5r/?lang=en\" target="_blank" id="gamesButton"><div>Video Games</div></a>' +
  '<div class=\"second\"><p>One of the biggest contributors to my new "studying" was video games, particularly JRPGs \(Japanese Role Playing Games\) like Persona, Final Fantasy, Pokemon again, and more...</p></div>' +
  '<a href=\"https://ramenkumamoto.com/\" target="_blank" id="foodButton"><div>Food</div></a>' +
  '<div class=\"second\"><p>I know everyone needs to eat but I <i>really</i> enjoy getting to try new flavors and textures of food from around the world.</p></p>Recently, My love for food has taken me to a local ramen shop that does some of the best tonkotsu broth I\'ve ever had. I swear it\s the worlds most drinkable gravy.</p></div>' +
  '<a href=\"https://www.bookbub.com/referral/c52481cba4647f48\" target="_blank" id="booksButton"><div>Books</div></a>' +
  '<div class=\"second\"><p>I used to be an <i>avid</i> reader but as I grew up and had more responsibilities and even just other hobbies it\s something I grew out of but something that I\'m trying to get back into. Horror is my particular favorite with Epic Fantasies close behind.</p><p>I also am a big champion for E-Books, being able to carry that many at once is next level, and you can get really good deals!</p></div>' +
  '</div>';

let aboutFaves =
  '<h2>Limbus Company</h2>' +
  "<p>Of late a lot of my free time if not being diverted into one of my other hobbies there is a 50/50 chance that I'm sat back in my bed or at my desk playing a Korean Gacha Game called <i>Limbus Company.</i></p>" +
  '<p><blockquote cite="https://limbuscompany.fandom.com/wiki/Limbus_Company_(game)">In <i>Limbus Company</i> you play as an amnesiac named Dante who is recruited by Limbus Company to act as executive manager to the Limbus Company Bus Department, a group of twelve Sinners who travel through the City on Mephistopheles, a bus with unique abilities, to collect the Golden Boughs left behind at old Lobotomy Corporation facilities. The City itself is set in a dystopian, hyper-capitalist world where other games of the developing company, Project Moon, take place. Dante and the Sinners enter a contract with each other that allows Dante to reverse time for them, a power which they use to heal their injuries and even bring them back from death.</blockquote></p>' +
  "<p>This is far and away the smallest and most concise summary of <i>Limbus Company</i> that could potentially exist as the game itself and the knowledge of the world within is expansive to say the very least. The main draw of the game is obviously it's characters, the Sinners with which you navigate the City on your search.</p>" +
  '<div class="slideshow-container">' +
  '<div class="mySlides fade"><img src="img/sinner1.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner2.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner3.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner4.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner5.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner6.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner7.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner8.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner9.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner10.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner11.png" style="width:100%"></div>' +
  '<div class="mySlides fade"><img src="img/sinner12.png" style="width:100%"></div>' +
  '<a class="prev" onclick="plusSlides(-1)">❮</a>' +
  '<a class="next" onclick="plusSlides(1)">❯</a>' +
  '</div>' +
  "<p>These are, as I like to call them, my idiot children of which I am solely responsible for their well being. This is enormously stressful and I wouldn't trade it for anything right now.</p>" +
  '<p>I grabbed the following description of The City from the gameplay <a href="https://limbuscompany.wiki.gg/"><b>wiki</b></a> and it is extremely brief compared to how much goes into the game.</p>' +
  '<div class="limbusStory"><h2>Districts</h2><p>The City is divided into twenty-six Districts, quite diverse in culture and aesthetics, each of which is governed by a Wing, a corporation that has ascended to claim complete control of said area. All Wings respond to the Head, the supreme governing power of the City. The arrangement of the Districts seems to be static, as there has been no mentioned case of a District expanding into a fallen Wing\'s territory.</p><p>Each District is split into a Nest, a territory directly governed and protected by its Wing, and the Backstreets, expansive spaces of wilderness or slums, largely neglected by the Wings, where the Syndicates of the City run free.</p><p>Districts tend to have similarities to their neighbors, and are typically grouped into four sections: the northern, eastern, southern, and western quarters. These quarters may be distinguished by commonalities including culture and temperature, such as the same Fixer Associations differing in garb and fighting style across different quarters, or the northern quarter having colder weather.</p><p>District 26, while confirmed to exist in current times, is not visible from the map.</p>' +
  "<h2>The Head</h2><p>The Head is the leader of the Wings and the central governing body of the City. It is in direct control of A Corp., B Corp., and C Corp., the three Districts at the very center of the City. The Head's identity is completely unknown, although it appears the term refers to a group of people rather than a singular entity; any detail regarding it is a closely guarded secret.</p><p>The Head, through A Corp., retains control of the entire City. It is responsible for authorizing Wings, managing patents, and the minting of Ahn, the currency used in the City.</p><p>Despite this, it does not typically interfere directly with the affairs of the various Wings in their own Districts; rather, the Head's greatest involvement in the life of the City consists in establishing and enforcing the rules that relate to the overall ethics of the City.</p><p>The Head's will shapes the image of the City, as it wields the ability to decide when a part of it no longer fits in the vision, and to chase it outside its confines. Some speculate the Head's decisions in these matters aren't aimed at maintaining order, but rather that the Head wishes to preserve its ideal image of the City, and that for this reason they allow the various Stars of the City to keep existing. This is corroborated by the agents of the Head themselves referring to their work as cultivating the ecology of the City.</p><p>To preserve this vision, the Head retains the unique power to assign the highest risk level in the scale of hazards of the City, that of Impuritas Civitatis, or Impurity of the City. The risk level of Impurity signifies a hazard that violates the ethics of the City,[11] and that must be either destroyed or physically expelled from the confines of the City expeditiously.</p>" +
  "<p>At a certain point in history, sapient beings that weren't humans were driven out of the City and into the Outskirts, and their existence within the confines of the City was deemed a Taboo. This marked the beginning of the City's \"age of humanity\". As part of this action, the Head introduced the Artificial Intelligence Ethics Amendment, which established a series of City-wide Taboos against the creation of machines that resembled humans, outlawing the creation of both mechanical copies of a human body and machines with an intelligence comparable to that of humans. Furthermore, a Taboo was established by the Head against the resurrection of a human being. Ultimately, all of these are considered to be unethical pursuits.</p><p>The Head has also set a number of restrictions on the creation and distribution of firearms[14] and on human cloning, which allow two copies of the same person to exist in the City for no longer than seven days. The Head is also responsible for various other Taboos of the City, such as not paying one's taxes, and violating a residential area during the Night in the Backstreets.</p><p>The punishment for breaking any of these Taboos usually involve physical extermination, and for a Wing, the stripping of its qualifications and immediate shutdown.[16] The punishment for violating the Taboos established by the Head is noted to be different from breaking a Taboo of a Nest, which usually involves being chased by a small number of Taboo hunters; breaking a Taboo of the City is believed to be equivalent to a death sentence.</p>" +
  '<p>The Head is backed up in its functions by the Eye and the Claw, the two authorities responsible for B Corp. and C Corp. respectively. In enforcing the laws of the City, the three Wings make use of three types of agents: the Arbiters, the Beholders, and the Claws. When handling an Impurity-level threat, these agents are qualified to expel an entity from the City itself and move it into the Outskirts.<p>' +
  '<h2>Wings and Nests</h2><p>The Wings of the World are a group of the twenty-six largest, most powerful conglomerates in the City. Each Wing acts as the governing body of a Nest of the City\'s District, and is commonly referred to with a letter from A to Z, corresponding to the number of the District in their control. Wings generally oversee all facets of living in the Nest of their District, while leaving the residents of the Backstreets to fend for themselves.</p><p>A Nest is the urban center of a District, which is under the direct management of its Wing. The citizens and employees of a Wing are commonly referred to as "feathers"; the status of a feather is widely considered one of the best and most secure paths in life, which the people of the Backstreets are often willing to go to great lengths to obtain. To gain access to a Nest, a corresponding Nest migration permit is required, while to be granted temporary passage one must be in possession of a visa unique to the specific Nest. Visas are implied to be relatively common, with corporate employees being provided with work visas that allow them as easy passage; Nest migration permits, on the other hand, are highly sought after, and implied to be expensive enough that even Grade 1 Fixers would struggle to obtain them. During the Smoke War, migration permits were offered as rewards to Fixers participating for K Corp. and I Corp., although by the end of the war the veterans were refused entry to the Nests.</p>' +
  "<p>Each Wing has its own cultural style and social structure which are reflected in how it governs its Nest, and the policies that regulate the way of life in the District's Backstreets. The laws of a Wing are called Taboos, and are enforced by specialized Fixers called Taboo hunters that police both the Nest and the Backstreets. While all Wings have Taboos, the enforcement and punishment for breaking them varies.</p><p>The Wings are directly ruled over by the Head, which bestows the status on a corporation that possesses and is able to successfully utilize a Singularity, a unique form of technology that is able to break the laws of physics.</p><p>As such, the Wings closely guard any information about their Singularity, employing military forces from their own ranks or from those of their business partners to avoid losing its secrets to rival Wings, industry competitors, or other forces. If a Wing's technology is stolen, fails commercially, or is viewed unfavorably by the Head, a Wing can collapse, resulting in the Nest losing its protection and being encroached by various factions that vie for its control, such as the Syndicates of the Backstreets. After a Wing collapses, a different corporation can attempt to ascend to the status of a Wing for that District. </p>" +
  "<p>The Backstreets are the areas of a District that lay outside the Wing's domain. The Backstreets are typically slums crowded with buildings, characterized by twisted and irregular roads, although there can be great differences between Districts.</p><p>Wings have differing degrees of presence, influence, and benevolence with regards to their Backstreets, although their relationship is ultimately exploitative. Citizens of the Backstreets are motivated to move up the ladder and into the Nests, while citizens of the Nests are motivated to maintain their statuses and preserve a more comfortable life under their Wing's protection. While not as secure as the Nest, residential areas are the safest parts of the Backstreets.</p><p>Given how strongly Backstreets denizens wish for a life in the Nest, Wings tend to uphold strict divides between the sectors, including security checkpoints and physical divisions. Security of borders between Nests and Backstreets vary from plasma walls to mere chain fences, but the Wings' power is such that no one in the Backstreets dares to cross over into a Nest without express permission.</p><p>As the Backstreets are not under the control and protection of the Wings, and even the Head's power struggles to reach within them, various factions operate freely in their place. The Backstreets are home to the headquarters of both Fixers, a type of mercenary for hire, who typically operate their Offices in the Backstreets, and organizations and gangs called Syndicates. Among Syndicates, the most important are the Five Fingers, the five largest Syndicates of the City which most other Syndicates answer to, and whose power is said to rival that of the Wings.</p>" +
  "<p>The Night in the Backstreets is another defining component of Backstreets life, as an 80 minute phenomena taking place from 3:14 to 4:34 AM. During this time period, nearly everything is allowed, as no one is held responsible for their deeds done during this time period. It is considered a brazenly savage, brutal, and vulgar period, even for the City. Beings known as Sweepers routinely become active during the Night in the Backstreets, and sweep through the streets in waves in order to consume any objects and structures located outside of permitted residential buildings, erasing all evidence of crime.</p><p>The Night in the Backstreets are regulated by only two Taboos: that residential areas mustn't be destroyed or violated in any way, including forcing the doors open, and that nothing which occurs during the Night in the Backstreets is recorded. The only form of testimony allowed during the Night in the Backstreets are direct eyewitnesses; even then, it is a Taboo mandated by the Head that no activity during this period are to be reported on. While the rules of the Night in the Backstreet don't apply to the Nest, it's viable to drag a Nest citizen into the Backstreets and dispose of them in this manner.</p> </div>" +
  "<p>And that's part of why I love it. It gives me something to really dig into, to really delve into the world despite its problems and learn about the messed up scenario within. </p>" +
  "<p>I am trying, and failing to be brief about what goes on here in this weird strange place and I'll leave it where it is for now but there's so much more it's honestly gross. We haven't even gotten to talking about the multiple alternate dimensions that it also somehow tangentially takes place in.</p>";

btnA.addEventListener('click', function () {
  document.getElementById('textBody').innerHTML = aboutMe;
  document.getElementById('whatPkmn').src = 'img/Pokeball.png';
  document.getElementById('pkmnSection').style.display = 'block';
  document.getElementById('shine').style.display = 'block';
});

btnH.addEventListener('click', function () {
  document.getElementById('textBody').innerHTML = aboutHobbies;
  document.getElementById('pkmnSection').style.display = 'none';
});

btnF.addEventListener('click', function () {
  document.getElementById('textBody').innerHTML = aboutFaves;
  showSlides(startNum);
  document.getElementById('pkmnSection').style.display = 'none';
});

scolip.addEventListener('click', function () {
  var audio = document.getElementById('audioPlay');
  audio.load();
  audio.play();
});

pokeB.addEventListener('click', function () {
  document.getElementById('shine').style.opacity = 100;
  setTimeout(function () {
    document.getElementById('shine').style.opacity = 0;
  }, 200);
});

document.getElementById('pkmnForm').addEventListener('submit', whoDatMon);

function whoDatMon(e) {
  var yourFav = document.getElementById('textbox').value;
  yourFav = yourFav.toLowerCase();
  document.getElementById('whatPkmn').src =
    'https://img.pokemondb.net/artwork/large/' + yourFav + '.jpg';
  if (
    yourFav == 'scolipede' ||
    yourFav == 'venipede' ||
    yourFav == 'whirlipede'
  ) {
    document.getElementById('nicePick').style.display = 'block';
    document.getElementById('hiThere').style.display = 'none';
  } else {
    document.getElementById('hiThere').style.display = 'block';
    document.getElementById('nicePick').style.display = 'none';
  }
  document.getElementById('shine').style.display = 'none';
  document.getElementById('textbox').value = null;
  e.preventDefault();
}

/*w3schools js slideshow */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
