# Rapport de mise en place de la SEO

## Sémantique

La sémantique est le premier réflexe à avoir : une page bien référencée est une page "comprise" par le robot d'indexation.

À beaucoup d'endroits, la sémantique peut être retravaillée pour donner plus de sens aux pages et à leurs éléments.

Pas de panique côté style, Bootstrap a prévu des classes portant le nom des balises correspondantes, on peut ainsi facilement transformer un `h2` en `h3.h2` ou un `small` en `div.small` *sans rien toucher au fichier de style* :sunglasses:

Pareil pour modifier le display d'un élément par exemple, Bootstrap a tout prévu avec ses classes `.d-*` :wink:

Documentation du role et du sens de chaque balise html: 
https://schema.org/docs/documents.html


## Meta Contenu
Des fichier ou des balises dans le head qui donne plein d'informations sur notre page web.

On peux mettre des mot clés mais ils doivent être cohérent (https://www.seo.fr/definition/black-hat-seo)

- Fichier sitemap.xml: donne des infos au robot google sur les pages web de notre site. On créer un sitemap.xml à la racine de notre site web. https://www.sitemaps.org/protocol.html
- Fichier robots.txt: permet de dire aux robot quel page peut être analysé ou non. On créer un robots.txt à la racine de notre dossier public (racine du site web `http://url.fr/robots.txt`) https://developers.google.com/search/docs/advanced/robots/create-robots-txt?hl=fr
- Avoir plusieurs favicon adapté au media (1616, 3232, ou android, etc)
- Des balises meta dans le head
```html
<meta name="description" content="Site web de review de figurine. Par les fans pour les fans, vous permettant de commenter vos figurines.">
<meta name="author" content="O'Clock 'n Co">
```
- Ld+JSON, des infos supplémentaires et structuré pour les moteurs de recherche https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data. Pour O'fig: on vend des figurines, indiquons au robot que ce sont des figurines, ou au moins des jouets... Bon, OK, indiquons lui que ce sont des produits :man_shrugging: et qu'à ce titre, ils ont : (un prix, une description, une note et des avis)

C'est pas toujours sympa à rédiger, toutes ces microdonnées, mais plus vous les soignez, plus vite vous attendrez une bonne place dans les résultats ~de Google~ des moteurs de recherche. Et c'est bien ça qu'on veut :heart_eyes: Et en plus on a des outils pour nous aider à générer ces données facilement.

[Outil pour créer un ld+json facilement](https://webcode.tools/generators/json-ld?microdata=true)
[Pour generer différentes favicon](https://realfavicongenerator.net/)


## Accessibilité
Les moteurs de recherche aime quand notre site est accessible, donc plus il est utilisable facilement sur tout les types de support, et peu importe le handicap, plus il remontera haut dans les résultats. 
- Le site web doit être responsive (Un outil pour tester si son site est adapté aux mobiles: https://search.google.com/test/mobile-friendly?hl=fr)
- Les couleurs de fond et de police doivent être suffisament contrasté ([un outil pour tester les contraste](https://webaim.org/resources/contrastchecker/))


## Optimisation
Le site web doit être rapide à charger, et même pour les utilisateurs en 3g. Pour cela on peut faire plein de petite choses:
- Ajouter un link preload pour chaque contenu qui sera utilisé dans le site web. Cela permet de prevenir le navigateur de ce qui sera utilisé dans notre site web.
```html
<link rel="preload" href="myFont.woff2" as="font"
      type="font/woff2" crossorigin="anonymous">
<link rel="preload" as="style" href="/style/index.css">
<link rel="preload" as="image"
    href="/assets/images/intro-1920.webp"
    imagesrcset="/assets/images/intro-1920.webp 1920w, /assets/images/intro-960.webp 960w, /assets/images/intro-720.webp 720w"
    imagesizes="100vw"
>
<link rel="preload" as="script" href="/scripts/index.es.min.js">
```
- Avoir des images de tailles différentes https://developer.mozilla.org/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
```html
<img srcset="elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 600px) 480px,
            800px"
     src="elva-fairy-800w.jpg"
     alt="Elva dressed as a fairy">
```
- Avoir des formats d'image cohérents (https://developer.mozilla.org/fr/docs/Web/Media/Formats/Image_types).
```
.svg => logo
.png => image (généré par ordinateur, png conserve des bords droit et intersection nette)
.webp => photo (meilleur format de compression pour les photos, mais tout les navigateurs ne supporte pas ce format: https://caniuse.com/webp)
.jpg => photo (il vaut mieux préférer le format webp plus puissant)
```


## Ressources
- [Documentation du HTML](https://schema.org/docs/search_results.html?q=section)
- [Pour genere du json+ld](https://webcode.tools/generators/json-ld?microdata=true)
- [Trouver les bons contrastes](https://webaim.org/resources/contrastchecker/)
- [Pour generer différentes favicon](https://realfavicongenerator.net/)
- [Documentation image adaptative](https://developer.mozilla.org/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Tester son site web (extension chrome HTML validator)](https://chrome.google.com/webstore/detail/html-validator/mpbelhhnfhfjnaehkcnnaknldmnocglk)
- [Tester l'accessibilité de son site (extension chrome)](https://chrome.google.com/webstore/detail/siteimprove-accessibility/djcglbmbegflehmbfleechkjhmedcopn)
- [Tester le ld+JSON](https://search.google.com/test/rich-results?hl=fr)
- [Tester son site web (mobile)](https://search.google.com/test/mobile-friendly?hl=fr)
- [Tester performance site web (google)](https://developers.google.com/speed/pagespeed/insights/?hl=fr)
- [Tester performance site web (gtmetrix)](https://gtmetrix.com/)
- Google chrome -> console -> lighthouse
- [Google analytics](https://analytics.google.com/analytics/web/provision/#/provision)
- [Google search console](https://search.google.com/search-console/about?hl=fr)